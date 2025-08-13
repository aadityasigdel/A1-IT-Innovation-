import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), compression()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets', 
  },
});
