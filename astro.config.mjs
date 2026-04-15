// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages
  site: 'https://pedroobando.github.io', // 👈 REEMPLAZA con tu usuario
  base: '/drhouse', // 👈 REEMPLAZA con nombre del repo
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
});
