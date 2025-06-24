// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import alpinejs from '@astrojs/alpinejs';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://ismail.to',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs(), react()]
});