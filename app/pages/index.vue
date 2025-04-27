<script setup lang="ts">
const { t } = useI18n()

useHead({
	title: t('meta.index.title'),
	meta: [{ name: 'description', content: t('meta.index.description') }]
})
</script>

<template>
  <div>
    <div class="relative min-h-dvh">
      <IndexPrimaryHeader />
      <div class="hidden lg:block w-full h-dvh overflow-hidden absolute -z-10">
        <UiAnimeMarquee />
      </div>
    </div>
  </div>
</template>
