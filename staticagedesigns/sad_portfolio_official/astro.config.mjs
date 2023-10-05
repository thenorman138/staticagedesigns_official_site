import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://staticagedesigns.netlify.app',
  integrations: [mdx(), tailwind({
    applyBaseStyles: false
  }), compress(), sitemap()]
});