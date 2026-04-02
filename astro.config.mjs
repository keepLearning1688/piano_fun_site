import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // This forces the output into the standard 'dist' folder
    platformProxy: {
      enabled: true,
    },
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