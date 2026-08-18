import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: 'https://infinitiwarrior.github.io/',
  integrations: [tailwind()],
});
