import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

export default defineConfig(({ mode }) => {
  // Load environment variables using import.meta.url
  const env = loadEnv(mode, fileURLToPath(new URL(".", import.meta.url)));

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api/tmdb": {
          target: "https://api.themoviedb.org/3",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/tmdb/, ""),
          headers: {
            Authorization: `Bearer ${env.VITE_TMDB_ACCESS_TOKEN}`,
            "Content-Type": "application/json;charset=utf-8",
          },
        },
      },
    },
  };
});
