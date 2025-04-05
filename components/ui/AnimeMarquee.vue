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

console.log(newAnimes)
</script>

<template>
  <div>
    <UPageMarquee
      class="my-2"
      reverse
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <NuxtImg
        v-for="(datum, index) in mostAnimes"
        :key="index"
        :alt="datum.name"
        :src="datum.poster.preview2xUrl"
        class="pointer-events-none select-none w-[100px] rounded-lg lg:w-[110px] xl:w-[140px] 2xl:w-[200px] 2xl:rounded-xl"
      />
    </UPageMarquee>
    <UPageMarquee
      class="my-2"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <NuxtImg
        v-for="(datum, index) in anonsAnimes"
        :key="index"
        :alt="datum.name"
        :src="datum.poster.preview2xUrl"
        class="pointer-events-none select-none w-[100px] rounded-lg lg:w-[110px] xl:w-[140px] 2xl:w-[200px] 2xl:rounded-xl"
      />
    </UPageMarquee>
    <UPageMarquee
      reverse
      class="my-2"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <NuxtImg
        v-for="(datum, index) in newAnimes"
        :key="index"
        :alt="datum.name"
        :src="datum.poster.preview2xUrl"
        class="pointer-events-none select-none w-[100px] rounded-lg lg:w-[110px] xl:w-[140px] 2xl:w-[200px] 2xl:rounded-xl"
      />
    </UPageMarquee>
  </div>
</template>

<style scoped>

</style>
