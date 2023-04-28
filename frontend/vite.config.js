import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import treatmentsData from "./src/assets/treatments.json";
import employeesData from "./src/assets/coworkers.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      // onRoutesGenerated: (routes) => generateSitemap({ routes }),
      onRoutesGenerated: (routes) => {
        const treatments = treatmentsData;
        const employees = employeesData;
        const dynamicTreatmentRoutes = treatments.map((treatment) => {
          `/szolgaltatasok/${treatment.category[0].slug}/${treatment.slug}`;
        });
        const dynamicEmployeeRoutes = employees.map((employee) => {
          `/munkatarsak/${employee.slug}`;
        });
        generateSitemap({
          routes: [
            ...routes,
            ...dynamicTreatmentRoutes,
            ...dynamicEmployeeRoutes,
          ],
        });
      },
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
