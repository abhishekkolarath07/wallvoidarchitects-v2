import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.wallvoidsarchitects.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: { format: 'file' },
});
