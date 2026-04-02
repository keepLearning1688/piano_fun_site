import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
// 'static' is now the default and handles everything she needs
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  vite: {
    ssr: {
      // This tells the builder NOT to bundle Supabase
      // but to let the Cloudflare environment handle it.
      external: ['@supabase/supabase-js']
    },
    optimizeDeps: {
      // This ensures the local development server also works.
      exclude: ['@supabase/supabase-js']
    }
  }
});