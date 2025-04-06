// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui-pro', 'nuxt-swiper', '@nuxtjs/i18n'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

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
  },

  i18n: {
    bundle: {
      optimizeTranslationDirective: false
    },
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.json', name: 'English' },
      { code: 'hy', iso: 'hy-AM', file: 'hy-AM.json', name: 'Հայերեն' },
      { code: 'ja', iso: 'ja-JP', file: 'ja-JP.json', name: '日本語' },
      { code: 'ru', iso: 'ru-RU', file: 'ru-RU.json', name: 'Русский' }
    ],
    lazy: false,
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts'
  }

})
