<script setup lang="ts">
const { data: mostData } = await useAsyncData('api-anime-shikimori-marquee-most', () =>
  $fetch('/api/anime/shikimori/marquee/most')
)

const mostAnimes = mostData?.value?.data.animes

const { data: anonsData } = await useAsyncData('api-anime-shikimori-marquee-anons', () =>
  $fetch('/api/anime/shikimori/marquee/anons')
)

const anonsAnimes = anonsData?.value?.data.animes

const { data: newData } = await useAsyncData('api-anime-shikimori-marquee-new', () =>
  $fetch('/api/anime/shikimori/marquee/new')
)

const newAnimes = newData?.value?.data.animes
</script>

<template>
  <div class="flex flex-col flex-1 h-dvh gap-4">
    <div class="h-full">
      <UPageMarquee
        :ui="{ root: '[--gap:--spacing(4)] h-full', content: 'w-full py-0 h-full justify-center flex-1' }"
      >
        <div
          v-for="(datum, index) in mostAnimes"
          :key="index"
          class="w-full h-full rounded-lg overflow-hidden"
        >
          <UTooltip
            :delay-duration="0"
            text="Open on GitHub"
          >
            <LazyNuxtImg
              :alt="datum.name"
              :src="datum.poster.preview2xUrl"
              class="pointer-events-none select-none w-full h-full"
            />
          </UTooltip>
        </div>
      </UPageMarquee>
    </div>
    <div class="h-full">
      <UPageMarquee
        reverse
        :ui="{ root: '[--gap:--spacing(4)] h-full', content: 'w-full py-0 h-full justify-center flex-1' }"
      >
        <div
          v-for="(datum, index) in anonsAnimes"
          :key="index"
          class="w-full h-full rounded-lg overflow-hidden"
        >
          <LazyNuxtImg
            :alt="datum.name"
            :src="datum.poster.preview2xUrl"
            class="pointer-events-none select-none w-full h-full"
          />
        </div>
      </UPageMarquee>
    </div>

    <div class="h-full">
      <UPageMarquee
        :ui="{ root: '[--gap:--spacing(4)] h-full', content: 'w-full py-0 h-full justify-center flex-1' }"
      >
        <div
          v-for="(datum, index) in newAnimes"
          :key="index"
          class="w-full h-full rounded-lg overflow-hidden"
        >
          <LazyNuxtImg
            :alt="datum.name"
            :src="datum.poster.preview2xUrl"
            class="pointer-events-none select-none w-full h-full"
          />
        </div>
      </UPageMarquee>
    </div>
  </div>
</template>

<style scoped>

</style>
