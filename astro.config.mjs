import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // In Astro 6, we stop using 'mode'.
    // The adapter now automatically places the _worker.js
    // in the root of 'dist' if you don't specify a mode.
    imageService: 'passthrough'
  }),
  vite: {
    ssr: {
      external: ['@supabase/supabase-js']
    }
  }
});