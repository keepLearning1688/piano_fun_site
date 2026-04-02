import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // 'advanced' mode forces Astro to put the _worker.js
    // directly in the /dist folder instead of a subfolder.
    mode: 'advanced',
  }),
  vite: {
    ssr: {
      external: ['@supabase/supabase-js']
    }
  }
});