import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
// Use 'hybrid' so it creates a physical 'dist' folder for the images/bio
  // but still allows the 'Awards' to talk to Supabase.
  output: 'hybrid',
  adapter: cloudflare({
    mode: 'directory', // This is the secret fix for "Output directory not found"
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