// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  // Configuración de imágenes para Cloudflare Pages
  // Usamos 'passthrough' para que las imágenes se sirvan sin procesamiento
  // Esto evita el error 404 en Cloudflare Pages porque no requiere Sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
});
