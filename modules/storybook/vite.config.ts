import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import reactCall from "react-call/vite";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/bootstrap",
  envDir: "../..",
  publicDir: "../../public",
  cacheDir: "../../node_modules/.vite",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@module/design": fileURLToPath(new URL("../design/src", import.meta.url)),
    },
  },
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules/@react-pdf-viewer") || id.includes("node_modules/pdfjs-dist")) {
            return "storybook-pdf";
          }
          if (id.includes("node_modules/recharts")) {
            return "storybook-chart";
          }
          if (
            id.includes("node_modules/react-shiki") ||
            id.includes("node_modules/shiki") ||
            id.includes("node_modules/@shikijs") ||
            id.includes("/src/shared/components/CanvasCodePreview.tsx") ||
            id.includes("/src/shared/components/codeHighlighter.ts")
          ) {
            return "storybook-code";
          }
          return undefined;
        },
      },
    },
  },
  plugins: [
    devtools(),
    tanstackRouter({
      target: "react",
      routesDirectory: "../routes",
      generatedRouteTree: "./routeTree.gen.ts",
      autoCodeSplitting: true,
    }),
    tailwindcss(),
    viteReact(),
    reactCall(),
  ],
});
