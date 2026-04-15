// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages
  site: 'https://TU-USUARIO.github.io',  // 👈 REEMPLAZA con tu usuario
  base: '/NOMBRE-REPO',                   // 👈 REEMPLAZA con nombre del repo
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});