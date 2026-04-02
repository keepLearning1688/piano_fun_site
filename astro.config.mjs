import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // 'advanced' is the key for 2026. It forces the _worker.js
    // into the root of /dist instead of /dist/server.
    mode: 'advanced',
  }),
  vite: {
    ssr: {
      external: ['@supabase/supabase-js']
    }
  }
});