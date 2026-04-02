import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // 'advanced' is the key here for Astro 6.
    // It puts the _worker.js file directly in the dist folder.
    mode: 'advanced',
  }),
  vite: {
    ssr: {
      external: ['@supabase/supabase-js']
    }
  }
});