import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import emoji from "markdown-it-emoji";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import code from "@yankeeinlondon/code-builder";
import link from "@yankeeinlondon/link-builder";
import meta from "@yankeeinlondon/meta-builder";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/head", "@vueuse/core"],
      dts: "src/auto-imports.d.ts",
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      // markdown-it plugin load
      // add options , emoji => [emoji, options]
      markdownItUses: [emoji],
      headEnabled: true,
      frontmatterDefaults: {
        requireAuth: false,
      },
      style: {
        baseStyle: "github",
      },
      builders: [
        meta(),
        link(),
        code({
          theme: "base",
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  optimizeDeps: {},
});
