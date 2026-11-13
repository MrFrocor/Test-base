// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves the site at https://mrfrocor.github.io/Test-base/
export default defineConfig({
  site: 'https://mrfrocor.github.io',
  base: '/Test-base',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
