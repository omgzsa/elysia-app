import vue from "@vitejs/plugin-vue";
// import Pages from "vite-plugin-pages";
// import generateSitemap from "vite-plugin-pages-sitemap";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// import treatmentsData from "./src/assets/treatments.json";
// import employeesData from "./src/assets/coworkers.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
});
