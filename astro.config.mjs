// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bridgechiropracticsd.com',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});
