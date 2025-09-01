import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Pre-render critical pages for SEO
        packages: resolve(__dirname, 'packages.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        testimonials: resolve(__dirname, 'testimonials.html'),
        blog: resolve(__dirname, 'blog.html'),
        accessibility: resolve(__dirname, 'accessibility.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
