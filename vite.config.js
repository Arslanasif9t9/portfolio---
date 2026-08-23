import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative base keeps assets working on GitHub Pages project sites,
  // where the app is served from /<repo-name>/ rather than the domain root.
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    // Inline nothing — the hero video and portrait should stay separate
    // files so the browser can cache and range-request them.
    assetsInlineLimit: 0,
  },
});
