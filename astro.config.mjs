// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://iasdniteroi.com.br',
  image: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com'],
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});