import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/Heartlight/' : '/',
  plugins: [react()],
  publicDir: 'public',
  build: { outDir: 'dist', emptyOutDir: true },
});
