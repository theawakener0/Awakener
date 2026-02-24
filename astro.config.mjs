// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://awakener.dev',
  image: {
    domains: ['cdn.jsdelivr.net'],
  },
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        'simple-icons': ['github'],
        'lucide': ['arrow-right', 'arrow-left', 'menu', 'x', 'external-link', 'calendar', 'clock']
      }
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
