import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // Tell Vite where your frontend lives
  root: path.resolve(__dirname, "client"),

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },

  // Build output inside client folder (perfect for Render static hosting)
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

