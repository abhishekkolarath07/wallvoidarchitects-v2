/**
 * Enquiry endpoint — Vercel Serverless Function (Node runtime).
 *
 * The site itself is fully static; this is the only server-side code. It validates
 * the enquiry again on the server (never trusting the client), applies basic abuse
 * controls, and hands the message to Resend.
 *
 * Required environment variables (set in the Vercel project, never in the repo):
 *   RESEND_API_KEY   Resend API key.
 *   ENQUIRY_TO       Recipient, e.g. info@wva.co.in
 *   ENQUIRY_FROM     Verified sender on your Resend domain,
 *                    e.g. "WVA Website <website@wva.co.in>"
 * Optional:
 *   ENQUIRY_ORIGIN   Comma-separated list of allowed origins. Defaults to the
 *                    request's own host, which is what you want in normal use.
 */

interface EnquiryPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  place?: unknown;
  brief?: unknown;
  kind?: unknown;
  website?: unknown;
  renderedAt?: unknown;
}

const KINDS = new Set([
  'New building',
  'Redevelopment',
  'Refurbishment',
  'Bungalow',
  'Interiors',
  'Feasibility',
]);

const LIMITS: Record<string, number> = {
  name: 120,
  email: 200,
  phone: 40,
  place: 160,
  brief: 4000,
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Minimum time a genuine person needs to fill the form, in milliseconds. */
const MIN_FILL_MS = 3000;

/** In-memory rate limit. Per-instance only — a speed bump, not a guarantee. */
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 500) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
    }
  }

  return recent.length > RATE_MAX;
}

const asText = (value: unknown): string => (typeof value === 'string' ? value.trim() : '');

/** Strip characters that would let a value forge extra email headers. */
const headerSafe = (value: string): string => value.replace(/[\r\n]+/g, ' ').slice(0, 200);

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

export const config = { runtime: 'nodejs' };

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json(405, { ok: false, error: 'Method not allowed.' });
  }

  // Same-origin only: this endpoint exists for the site's own form.
  const origin = request.headers.get('origin');
  if (origin) {
    const allowed = (process.env.ENQUIRY_ORIGIN ?? '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const host = request.headers.get('host');
    const originHost = (() => {
      try {
        return new URL(origin).host;
      } catch {
        return null;
      }
    })();

    const ok = allowed.length > 0 ? allowed.includes(origin) : originHost !== null && originHost === host;
    if (!ok) return json(403, { ok: false, error: 'Request blocked.' });
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (rateLimited(ip)) {
    return json(429, {
      ok: false,
      error: 'Too many enquiries from this connection. Please try again shortly.',
    });
  }

  let payload: EnquiryPayload;
  try {
    payload = (await request.json()) as EnquiryPayload;
  } catch {
    return json(400, { ok: false, error: 'Could not read that submission.' });
  }

  // Honeypot: a real person never fills a field they cannot see. Accept silently so
  // a bot gets no signal about why it failed.
  if (asText(payload.website)) return json(200, { ok: true });

  // Timing check: a submission faster than a person could type is not a person.
  const renderedAt = Number(payload.renderedAt);
  if (Number.isFinite(renderedAt) && renderedAt > 0 && Date.now() - renderedAt < MIN_FILL_MS) {
    return json(200, { ok: true });
  }

  const values = {
    name: asText(payload.name),
    email: asText(payload.email),
    phone: asText(payload.phone),
    place: asText(payload.place),
    brief: asText(payload.brief),
    kind: asText(payload.kind),
  };

  const fields: Record<string, string> = {};
  if (!values.name) fields.name = 'Please add your name.';
  if (!values.email) fields.email = 'Please add an email address.';
  else if (!EMAIL.test(values.email)) fields.email = 'That email address does not look right.';
  if (!values.phone) fields.phone = 'Please add a phone number.';
  if (!values.place) fields.place = 'Please add the project location.';
  if (!values.brief) fields.brief = 'Please describe the project briefly.';
  if (!values.kind) fields.kind = 'Please pick a type of work.';
  else if (!KINDS.has(values.kind)) fields.kind = 'Please pick one of the listed types of work.';

  for (const [field, max] of Object.entries(LIMITS)) {
    const value = values[field as keyof typeof values];
    if (value.length > max) fields[field] = `Please keep this under ${max} characters.`;
  }

  if (Object.keys(fields).length > 0) {
    return json(422, { ok: false, error: 'Please check the highlighted fields.', fields });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO;
  const from = process.env.ENQUIRY_FROM;

  if (!apiKey || !to || !from) {
    // Misconfiguration is ours, not the visitor's — say so without leaking detail.
    console.error('[enquiry] missing RESEND_API_KEY, ENQUIRY_TO or ENQUIRY_FROM');
    return json(500, {
      ok: false,
      error: 'The enquiry form is not available right now. Please email info@wva.co.in directly.',
    });
  }

  const rows: Array<[string, string]> = [
    ['Name', values.name],
    ['Email', values.email],
    ['Phone', values.phone],
    ['Location', values.place],
    ['Type of work', values.kind],
  ];

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    values.brief,
    '',
    `— Sent from the ${new URL(request.url).host} enquiry form`,
  ].join('\n');

  const html = [
    '<div style="font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;color:#0d0d0d">',
    '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse">',
    ...rows.map(
      ([label, value]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#666">${label}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
    ),
    '</table>',
    `<p style="white-space:pre-wrap;margin-top:18px">${escapeHtml(values.brief)}</p>`,
    `<p style="margin-top:24px;font-size:12px;color:#888">Sent from the ${escapeHtml(new URL(request.url).host)} enquiry form.</p>`,
    '</div>',
  ].join('');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        // Never put visitor input in `from` — only in reply_to, header-sanitised.
        reply_to: headerSafe(values.email),
        subject: headerSafe(`Enquiry — ${values.kind}, ${values.place}`),
        text,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      console.error('[enquiry] resend rejected', response.status, detail.slice(0, 400));
      return json(502, {
        ok: false,
        error: 'We could not send that just now. Please try again, or email info@wva.co.in directly.',
      });
    }
  } catch (error) {
    console.error('[enquiry] resend request failed', error);
    return json(502, {
      ok: false,
      error: 'We could not send that just now. Please try again, or email info@wva.co.in directly.',
    });
  }

  return json(200, { ok: true });
}
