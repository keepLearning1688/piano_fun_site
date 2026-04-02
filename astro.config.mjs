import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // This is the specific Astro 6 fix.
    // It tells Astro: "Don't make a fancy config, just make a Worker file."
    mode: 'advanced',
    imageService: 'passthrough'
  }),
  vite: {
    ssr: {
      external: ['@supabase/supabase-js']
    }
  }
});