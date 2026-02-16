import { defineConfig } from 'astro/config';

// import tailwind from "@astrojs/tailwind";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // integrations: [tailwind()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  vite: {
    plugins: [tailwindcss()]
  }
});