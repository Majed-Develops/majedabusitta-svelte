import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    rollupOptions: {
      external: [],
    },
    target: 'esnext',
    sourcemap: false,
  },
  ssr: {
    noExternal: ['gray-matter', 'remark', 'remark-html']
  },
});
