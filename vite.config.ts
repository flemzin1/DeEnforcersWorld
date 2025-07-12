import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import flowbiteReact from 'flowbite-react/plugin/vite';

export default defineConfig({
  plugins: [react(), flowbiteReact()],
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    
  },
});
