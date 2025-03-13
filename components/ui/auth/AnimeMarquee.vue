<script setup lang="ts">
const imagesOne = ref([
  'https://cdn.myanimelist.net/images/anime/1015/138006.webp',
  'https://cdn.myanimelist.net/images/anime/1245/116760.webp',
  'https://cdn.myanimelist.net/images/anime/1122/96435.webp',
  'https://cdn.myanimelist.net/images/anime/10/51723.webp',
  'https://cdn.myanimelist.net/images/anime/1825/110716.webp',
  'https://cdn.myanimelist.net/images/anime/1379/145452.webp',
  'https://cdn.myanimelist.net/images/anime/1379/145452.webp',
  'https://cdn.myanimelist.net/images/anime/5/87048.webp',
  'https://cdn.myanimelist.net/images/anime/1084/112813.webp',
  'https://cdn.myanimelist.net/images/anime/6/79597.webp'
])

const imagesTwo = ref([
  'https://cdn.myanimelist.net/images/anime/1015/138006.webp',
  'https://cdn.myanimelist.net/images/anime/1245/116760.webp',
  'https://cdn.myanimelist.net/images/anime/1122/96435.webp',
  'https://cdn.myanimelist.net/images/anime/10/51723.webp',
  'https://cdn.myanimelist.net/images/anime/1825/110716.webp',
  'https://cdn.myanimelist.net/images/anime/1379/145452.webp',
  'https://cdn.myanimelist.net/images/anime/1379/145452.webp',
  'https://cdn.myanimelist.net/images/anime/5/87048.webp',
  'https://cdn.myanimelist.net/images/anime/1084/112813.webp',
  'https://cdn.myanimelist.net/images/anime/6/79597.webp'
])

const imagesThree = ref([
  'https://cdn.myanimelist.net/images/anime/1015/138006.webp',
  'https://cdn.myanimelist.net/images/anime/1245/116760.webp',
  'https://cdn.myanimelist.net/images/anime/1122/96435.webp',
  'https://cdn.myanimelist.net/images/anime/10/51723.webp',
  'https://cdn.myanimelist.net/images/anime/1825/110716.webp',
  'https://cdn.myanimelist.net/images/anime/1379/145452.webp',
  'https://cdn.myanimelist.net/images/anime/1379/145452.webp',
  'https://cdn.myanimelist.net/images/anime/5/87048.webp',
  'https://cdn.myanimelist.net/images/anime/1084/112813.webp',
  'https://cdn.myanimelist.net/images/anime/6/79597.webp'
])
</script>

<template>
  <div>
    <UPageMarquee
      class="my-2"
      reverse
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <NuxtImg
        v-for="(image, index) in imagesOne"
        :key="index"
        :src="image"
        class="pointer-events-none select-none w-[100px] rounded-lg lg:w-[110px] xl:w-[140px] 2xl:w-[200px] 2xl:rounded-xl"
      />
    </UPageMarquee>
    <UPageMarquee
      class="my-2"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <NuxtImg
        v-for="(image, index) in imagesTwo"
        :key="index"
        :src="image"
        class="pointer-events-none select-none w-[100px] rounded-lg lg:w-[110px] xl:w-[140px] 2xl:w-[200px] 2xl:rounded-xl"
      />
    </UPageMarquee>
    <UPageMarquee
      reverse
      class="my-2"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <NuxtImg
        v-for="(image, index) in imagesThree"
        :key="index"
        :src="image"
        class="pointer-events-none select-none w-[100px] rounded-lg lg:w-[110px] xl:w-[140px] 2xl:w-[200px] 2xl:rounded-xl"
      />
    </UPageMarquee>
  </div>
</template>

<style scoped>

</style>
