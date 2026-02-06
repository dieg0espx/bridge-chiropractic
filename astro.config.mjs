// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://bridgechiropracticsd.com',
  integrations: [sitemap(), react()],
  devToolbar: {
    enabled: false,
  },
});