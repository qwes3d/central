import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src/",

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        favorites: resolve(__dirname, "src/favorites/index.html"),
        funzone: resolve(__dirname, "src/funzone/index.html"),
        },
    },
  },
});
