// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui-pro", "@vite-pwa/nuxt"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  devServer: { host: process.env.TAURI_DEV_HOST || "localhost" },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2025-01-15",

  vite: {
    clearScreen: false,
    envPrefix: ["VITE_", "TAURI_"],
    server: {
      strictPort: true,
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  pwa: {
    manifest: {
      name: "Anidzen",
      short_name: "Anidzen",
      description: "anidzen -- best app for anime",
    },
  },
});
