// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ScrollableCardList",
      fileName: (format) => {
        if (format === "es") {
          return "index.js"; // For ES module format
        } else if (format === "cjs") {
          return "index.cjs.js"; // For CommonJS format
        }
        return `index.${format}.js`; // For any other format
      },
      formats: ["es", "cjs"], // Specify the formats you want to output
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Avoid bundling react and react-dom
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "index.css";
          }
          return assetInfo.name;
        },
      },
    },
    cssCodeSplit: false, // Force all CSS into one file
  },
});
