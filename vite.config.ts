/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: Vite 基础配置，启用 React-SWC 插件并指定输出目录
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"
  }
});
