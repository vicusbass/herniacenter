// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import lottie from 'astro-integration-lottie';

import icon from 'astro-icon';

import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import sanity from '@sanity/astro';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://herniacenter.ro',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon(),
    sanity({
      projectId: process.env.SANITY_STUDIO_PROJECT_ID,
      dataset: 'production',
      useCdn: false,
    }),
    lottie(),
    sitemap(),
  ],
});
