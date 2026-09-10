# Wall Voids Architects

Production website for Wall Voids Architects, Mumbai.

This is an engineering migration of the approved Claude Design export. **The design is
locked.** Layout, typography, colour, spacing, imagery and interaction concepts are
reproduced as-is; only the implementation underneath was rebuilt. The original export is
kept verbatim under `_source-material/design-export/` as the visual reference.

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 7 — static output, zero client framework |
| Styling | One shared stylesheet plus the export's inline styles, preserved verbatim |
| Fonts | Self-hosted Archivo 300/400/500 and Caveat 400/500 (`@fontsource`) |
| Images | Astro's build-time pipeline (WebP + `srcset`) |
| Forms | Vercel serverless function → Resend |
| Hosting | Vercel |

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # serve the built site
npm run check     # Astro + TypeScript diagnostics
npm run assets    # regenerate favicons and Open Graph images
```

## Project layout

```
api/enquiry.ts          Vercel function backing the contact form
public/                 Static files served as-is (logos, favicons, OG images, robots.txt)
scripts/                One-off asset generation
src/assets/img/         Production photography, optimised at build time
src/components/         Head, Header (incl. mobile menu), Footer
src/data/               Project, sector, studio and site content
src/layouts/Base.astro  Shared page shell
src/lib/images.ts       Maps export-style image paths to optimised assets
src/pages/              Routes
src/scripts/            Client behaviour (scroll chrome, hero, register)
src/styles/global.css   Shared base, ported from the export
_source-material/       Reference only — never deployed (see .vercelignore)
```

## Routes

`/` · `/projects` · `/projects/<slug>` (12) · `/sectors` · `/studio` · `/contact` · `/404`

The projects index accepts `?sector=Residential|Commercial|Mixed%20Use|Interiors`, which is
what the sector cards link to.

## Contact form

The form posts to `/api/enquiry`, which validates server-side and sends through Resend.
Set these in **Vercel → Settings → Environment Variables** (see `.env.example`):

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key |
| `ENQUIRY_TO` | Where enquiries are delivered |
| `ENQUIRY_FROM` | Verified sender on your Resend domain |
| `ENQUIRY_ORIGIN` | *(optional)* allowed origins; defaults to same-origin |

Until these are set the endpoint returns a clear error and the form tells the visitor to
email directly. **Nothing works without a Resend domain verified for your sending address.**

## Before launch

1. Set the four environment variables above and send a real test enquiry.
2. Update `site.url` in `src/data/site.ts` and `site` in `astro.config.mjs` to the live
   domain, then re-run `npm run assets`.
3. **Verify the developer list** in `src/data/studio.ts`. Eight of the twelve names under
   "Developers worked with" are not corroborated by any project in this repository.
4. Supply a religious-buildings image if that sector should show one — see
   `RELIGIOUS_IMAGE_TODO` in `src/data/sectors.ts`.
5. Confirm the four projects still reading "To be confirmed" for plot and built-up area.

## Repository size

`_source-material/` holds ~300 MB of design reference (board renders, source documents,
the original export). It is excluded from deployment via `.vercelignore`, but it is still
in git history — clones are large. Purging it needs a history rewrite, which is a separate,
deliberate decision.
