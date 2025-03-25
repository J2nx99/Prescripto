import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Changed from "./" for Vercel compatibility
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true, // Ensures clean builds
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 3000, // Optional: Consistent dev server port
  },
});
