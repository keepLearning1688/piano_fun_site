import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // or 'hybrid' if you want some static pages
  adapter: cloudflare(),
  vite: {
    ssr: {
      external: ['node:buffer', 'node:stream'] // This fixes the Rollup external error
    }
  }
});