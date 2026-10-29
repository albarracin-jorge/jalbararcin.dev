import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  // Both locales are prerendered under /es/ and /en/; `/` picks one on the client.
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
