import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd());
  console.log("env is:", env, "vite-config", mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    plugins: [react()]
  };
});
