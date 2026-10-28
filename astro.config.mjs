// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ajergianyar.web.id', 
    integrations: [
    sitemap(),  // ← TAMBAHKAN INI
    // ... integrasi lainnya
  ],
  output: 'server',
  adapter: vercel(),
});