import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".", // Project root = global-recipe/

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Allows "@/..." imports
    },
  },

  build: {
    outDir: "dist", // Outputs to global-recipe/dist
    emptyOutDir: true, // Clears dist/ before build
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // global-recipe/index.html
        favorites: resolve(__dirname, "favorites/index.html"), // global-recipe/favorites/index.html
        funzone: resolve(__dirname, "funzone/index.html"), // global-recipe/funzone/index.html
      },
    },
  },
});