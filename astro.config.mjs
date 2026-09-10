import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.wallvoidsarchitects.com',

  /*
   * Clean URLs by construction, not by host configuration.
   *
   * `build.format: 'directory'` (Astro's default) emits dist/projects/index.html,
   * which every static host — Vercel, Netlify, Cloudflare, nginx, S3 — serves at
   * /projects with no rewrite rule of any kind.
   *
   * The previous `format: 'file'` emitted a flat dist/projects.html, so nothing
   * existed at /projects and the clean URL depended entirely on Vercel's
   * `cleanUrls` flag being honoured. That is a single host-specific point of
   * failure, and it is what put .html into the browser's address bar.
   *
   * `trailingSlash: 'never'` keeps every generated link, canonical and sitemap
   * entry extensionless and slashless (/projects, not /projects/); vercel.json
   * pins the same choice at the edge so the two cannot disagree.
   */
  build: { format: 'directory' },
  trailingSlash: 'never',

  integrations: [sitemap()],
});
