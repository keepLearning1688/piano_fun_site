import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // In Astro 6, we leave 'mode' out or set it to 'advanced'
    // to ensure the _worker.js file ends up in the root of /dist
    imageService: 'passthrough'
  }),
  vite: {
    ssr: {
      external: ['@supabase/supabase-js']
    }
  },
  // Do NOT include build: { format: 'directory' } here.
  // Astro 6 + Cloudflare handles the routing automatically.
});