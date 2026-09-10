/**
 * Shared page behaviour: scroll reveals, the sticky-header transition, the spine
 * progress fill, and count-up statistics.
 *
 * The export ran an equivalent of this on every page, but re-queried the whole
 * document from a MutationObserver on `document.body` with `{childList, subtree}` —
 * a full `querySelectorAll` sweep per mutation. Behaviour here is identical; the
 * work is done by an IntersectionObserver plus one rAF-throttled scroll handler.
 */

export const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Reveal elements as they enter the viewport. */
export function initReveals(): void {
  const selector = '[data-rv]:not(.in),[data-mask]:not(.in),[data-draw]:not(.in)';
  const targets = Array.from(document.querySelectorAll(selector));

  if (prefersReducedMotion()) {
    // Movement is off, but content must still be present.
    for (const el of targets) el.classList.add('in');
    return;
  }

  if (!('IntersectionObserver' in window)) {
    for (const el of targets) el.classList.add('in');
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    },
    { threshold: 0, rootMargin: '0px 0px -6% 0px' },
  );

  for (const el of targets) io.observe(el);

  // Anything already above the fold on load reveals immediately.
  const vh = window.innerHeight;
  for (const el of targets) {
    if (el.getBoundingClientRect().top < vh * 0.94) el.classList.add('in');
  }
}

/** Count-up statistics. Runs once per element, when it first scrolls into view. */
export function initCounters(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-countto]'));
  if (els.length === 0) return;

  const run = (el: HTMLElement) => {
    const target = Number.parseInt(el.getAttribute('data-countto') ?? '0', 10) || 0;

    if (prefersReducedMotion()) {
      el.textContent = String(target);
      return;
    }

    let n = 0;
    const stepSize = Math.max(1, Math.ceil(target / 18));
    const step = () => {
      n += stepSize;
      if (n >= target) {
        el.textContent = String(target);
        return;
      }
      el.textContent = String(n);
      requestAnimationFrame(step);
    };
    step();
  };

  if (!('IntersectionObserver' in window)) {
    for (const el of els) run(el);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        run(entry.target as HTMLElement);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );

  for (const el of els) io.observe(el);
}

interface ScrollChromeOptions {
  /** 'home' stays transparent until past the hero; 'inner' is solid from the top. */
  variant: 'home' | 'inner';
  spineId?: string;
  progressBarId?: string;
  progressNumId?: string;
}

/**
 * Header solidify + logo shrink + spine fill + scroll progress, on one rAF-throttled
 * scroll listener.
 */
export function initScrollChrome(options: ScrollChromeOptions): () => void {
  const { variant, spineId, progressBarId, progressNumId } = options;

  const header = document.getElementById('wva-header');
  const logo = document.getElementById('wva-logo');
  const spine = spineId ? document.getElementById(spineId) : null;
  const bar = progressBarId ? document.getElementById(progressBarId) : null;
  const num = progressNumId ? document.getElementById(progressNumId) : null;

  let solid: boolean | null = null;

  const setHeader = (next: boolean) => {
    if (next === solid) return;
    solid = next;
    if (!header) return;

    if (variant === 'home') {
      header.style.background = next ? 'rgba(255,255,255,.9)' : 'transparent';
      header.style.backdropFilter = next ? 'saturate(140%) blur(10px)' : 'none';
      header.style.borderBottomColor = next ? 'rgba(13,13,13,.14)' : 'rgba(255,255,255,0)';
    }

    header.style.padding = next ? '11px var(--gut)' : '15px var(--gut)';
    if (logo) logo.style.height = next ? '40px' : '50px';
  };

  let ticking = false;

  const frame = () => {
    ticking = false;
    const y = window.scrollY;
    const vh = window.innerHeight;

    setHeader(variant === 'home' ? y > vh - 90 : y > 90);

    const max = document.documentElement.scrollHeight - vh;
    const pct = max > 0 ? Math.min(1, y / max) : 0;

    if (spine && max > 0) spine.style.height = `${(pct * (max + vh)).toFixed(0)}px`;
    if (bar) bar.style.width = `${(pct * 100).toFixed(1)}%`;
    if (num) num.textContent = String(Math.round(pct * 100)).padStart(2, '0');
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(frame);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  frame();

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

/** Parallax on [data-par] elements. Skipped entirely under reduced motion. */
export function initParallax(): () => void {
  if (prefersReducedMotion()) return () => {};

  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-par]')).map((el) => ({
    el,
    k: Number.parseFloat(el.getAttribute('data-par') ?? '') || 0.1,
  }));

  if (items.length === 0) return () => {};

  let ticking = false;

  const frame = () => {
    ticking = false;
    const vh = window.innerHeight;
    for (const { el, k } of items) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      const mid = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0,${(-mid * k).toFixed(1)}px,0)`;
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(frame);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  frame();

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}
