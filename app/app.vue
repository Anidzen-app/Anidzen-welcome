<script setup lang="ts">
const colorMode = useColorMode()
const { locale, t } = useI18n()

const color = computed(() =>
  colorMode.value === 'dark' ? '#18181b' : 'white'
)

const commonKeywords = 'anidzen аниме манга арты новости фан-контент Sora.QL API'

const keywords = {
  en: 'anime, manga, arts, news, fan content, AniDzen, Sora.QL API',
  hy: 'անիմե, մանգա, արվեստ, լուրեր, ֆան կոնտենտ, AniDzen, Sora.QL API',
  ja: 'アニメ、マンガ、アート、ニュース、ファンコンテンツ、AniDzen、Sora.QL API',
  ru: 'аниме, манга, арты, новости, фан-контент, AniDzen, Sora.QL API'
}

const currentKeywords = computed(() => keywords[locale.value] || keywords.en)

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
    {
      name: 'keywords',
      content: commonKeywords + ' ' + currentKeywords.value
    },
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: t('meta.index.description')
    },
    {
      property: 'image',
      content: `https://anidzen.com/images/og-images/og-image-${locale.value}.png`
    },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: t('meta.index.title') },
    {
      property: 'twitter:description',
      content: t('meta.index.description')
    },
    {
      property: 'twitter:image',
      content: `https://anidzen.com/images/og-images/og-image-${locale.value}.png`
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('meta.index.title') },
    { property: 'og:description', content: t('meta.index.description') },
    { property: 'og:locale', content: locale.value },
    {
      property: 'og:url',
      content: `https://anidzen.com${locale.value === 'en' ? '' : '/' + locale.value}`
    },
    {
      property: 'og:image',
      content: `https://anidzen.com/images/og-images/og-image-${locale.value}.png`
    },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' }
  ],
  htmlAttrs: {
    lang: locale.value
  }
})
</script>

<template>
  <CommonAppIcons />

  <UApp :toaster="{ expand: false }">
    <NuxtLoadingIndicator />
    <CommonCookieConsent />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
