<script setup lang="ts">
const { data } = await useFetch('/api/anime/shikimori/top/most')
const animes = data._value.data.animes
</script>

<template>
  <div>
    <swiper-container class="bg-(--ui-bg-elevated)/25 rounded-lg overflow-hidden">
      <swiper-slide
        v-for="(slide, idx) in animes"
        :key="idx"
      >
        <div class="w-full relative flex gap-5">
          <div>
            <NuxtImg
              :src="slide.poster.originalUrl"
              :alt="slide.name"
              class="min-w-[300px] h-[400px]"
            />
          </div>
          <div class="py-4">
            <h2 class="text-3xl">
              {{ slide.russian }} <span class="opacity-50 text-2xl">{{ slide.name }}</span>
            </h2>
            <p class="opacity-50 mt-3">
              {{ slide.description }}
            </p>
            <div class="flex gap-5 mt-3">
              <UButton label="Смотреть" size="xl" variant="soft"/>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped>

</style>
