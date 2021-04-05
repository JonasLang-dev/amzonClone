import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': 'http://127.0.0.1:5000',
  //   }
  // },
  plugins: [reactRefresh()],
});
