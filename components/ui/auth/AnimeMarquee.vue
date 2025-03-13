<script setup lang="ts">
const imagesOne = ref([
  'https://cdn.myanimelist.net/images/anime/1015/138006.jpg'
])
</script>

<template>
  <div>
    <UPageMarquee reverse>
      <NuxtImg
        v-for="(image, index) in imagesOne"
        :key="index"
        :src="image"
        class="pointer-events-none select-none"
      />
    </UPageMarquee>
  </div>
</template>

<style scoped>

</style>
