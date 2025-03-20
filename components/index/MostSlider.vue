<script setup lang="ts">
const { data } = await useAsyncData('api-anime-shikimori-top-most', () => $fetch('/api/anime/shikimori/top/most'))
const animes = ref<never[]>([])

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 100))
  animes.value = data.value?.data?.animes
})
</script>

<template>
  <div>
    <div
      v-if="!animes.length"
      class="bg-(--ui-bg-elevated)/25 rounded-lg overflow-hidden"
    >
      <div class="w-full relative flex gap-5">
        <div>
          <USkeleton class="min-w-[300px] h-[400px]" />
        </div>
        <div class="py-4 w-full pr-5">
          <USkeleton class="w-full h-[36px]" />
          <USkeleton class="w-full h-[120px] mt-3" />
          <div class="flex gap-5 mt-3">
            <USkeleton
              class="w-[92px] h-[40px]"
            />
          </div>
        </div>
      </div>
    </div>

    <ClientOnly v-else>
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
            <div class="py-4 pr-5">
              <h2 class="text-3xl">
                {{ slide.russian }}
                <span class="opacity-50 text-2xl">{{ slide.name }}</span>
              </h2>
              <p class="opacity-50 mt-3">
                {{ slide.description }}
              </p>
              <div class="flex gap-5 mt-3">
                <UButton
                  label="Смотреть"
                  size="xl"
                  variant="soft"
                />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style scoped>
</style>
