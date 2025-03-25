import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Critical fix for Netlify
  build: {
    outDir: "dist",
    assetsDir: "assets", // Explicit assets directory
  },
});
