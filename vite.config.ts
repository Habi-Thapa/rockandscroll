// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Assuming your entry file is src/index.ts
      name: "ScrollableCardList",
      formats: ["es", "cjs"],
      fileName: (format) => {
        if (format === "es") {
          return "index.js"; // For ES module format
        } else if (format === "cjs") {
          return "index.cjs.js"; // For CommonJS format
        }
        return `index.${format}.js`; // For other formats
      },
      // You can add any other options specific to your library build configuration
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Specify external dependencies to avoid bundling
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: "index.css", // Output CSS as index.css
      },
    },
  },
});
