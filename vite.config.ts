/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: ["**/db.json"],
    },
  },
  test: {
    environment: "jsdom", // 👈 Adicione isso
    globals: true, // Opcional: permite usar 'describe', 'it', etc sem importar
    typecheck: {
      enabled: true,
    },
  },
});
