import tailwindcss from "@tailwindcss/vite";

import "./lib/env";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  // register eslint module with options
  modules: [
    ["@nuxt/eslint", { config: { standalone: false } }],
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ["@nuxt/devtools", "@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  colorMode: {
    dataValue: "theme",
  },
});
