import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset paths, so the build works under /raffay-personal-website/ and at a domain root alike.
  base: './',
  build: { target: 'es2022' },
});
