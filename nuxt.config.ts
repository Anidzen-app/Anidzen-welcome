// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@pinia/nuxt',
    'nuxt-swiper'
  ],

  devtools: {
    enabled: true
  },

  css: ['./app/assets/css/main.css'],

  runtimeConfig: {
    public: {
      appVersion: process.env.APP_VERSION || '1.0.0'
    },
    appSsrDebug: process.env.APP_SSR_DEBUG || 'false',
    shikimoriApiBaseUrl: process.env.SHIKIMORI_API_BASE_URL || 'https://shikimori.one/api/graphql'
  },

  routeRules: {
    '/': { prerender: true }
  },

  devServer: { host: process.env.TAURI_DEV_HOST || 'localhost' },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }

})
