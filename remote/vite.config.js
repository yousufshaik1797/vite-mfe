import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./headerExposed": "./src/components/headerExposed.vue",
      },
      remotes: {},
      shared: ["vue"],
    }),
    createHtmlPlugin({
      inject: {
        // Inject data into ejs template
        data: {
          title: "remote",
        },
      },
    }),
  ],

  build: {
    polyfillModulePreload: falsae,
    assetsInlineLimit: 40960,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
