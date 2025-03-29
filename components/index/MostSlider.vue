<script setup lang="ts">
import type Swiper from 'swiper'

const { data } = await useAsyncData('api-anime-shikimori-top-most', () =>
  $fetch('/api/anime/shikimori/top/most')
)
const animes = data?.value?.data.animes

const progress = ref(0)
const swiperRef = ref<Swiper | null>(null)
const autoplayDelay = 3000

const updateProgress = (swiper: Swiper) => {
  const timeLeft = swiper.autoplay.running ? swiper.autoplay.timeLeft : autoplayDelay
  progress.value = ((autoplayDelay - timeLeft) / autoplayDelay) * 100
}

onMounted(async () => {
  await nextTick()
  if (!swiperRef.value) return

  const swiper = swiperRef.value.swiper
  if (!swiper) return

  swiper.on('slideChangeTransitionStart', () => {
    progress.value = 0
  })

  swiper.on('autoplay', () => {
    updateProgress(swiper)
  })

  swiper.on('autoplayTimeLeft', () => {
    updateProgress(swiper)
  })
})
</script>

<template>
  <div class="max-h-[500px] lg:max-h-[400px] overflow-hidden bg-(--ui-bg-elevated)/25  md:rounded-lg relative">
    <div
      class="hidden md:block absolute top-0 h-1 bg-primary-400 z-10"
      :style="{ width: progress + '%' }"
    />

    <swiper-container
      ref="swiperRef"
      :slides-per-view="1"
      :space-between="30"
      grab-cursor
      loop
      :history="{
        key: 'most-slider'
      }"
      :autoplay="{
        delay: autoplayDelay,
        disableOnInteraction: false
      }"
    >
      <swiper-slide
        v-for="(slide, idx) in animes"
        :key="idx"
      >
        <div class="w-full relative flex gap-5 flex-col md:flex-row">
          <div>
            <NuxtImg
              :src="slide.poster.originalUrl"
              :alt="slide.name"
              class="w-full md:min-w-[300px] object-cover h-[500px] md:h-[400px]"
            />
          </div>
          <div class="py-4 pr-5 flex flex-col bottom-0 absolute md:relative bg-(--ui-bg) md:bg-transparent w-full md:w-auto">
            <h2 class="text-2xl md:text-3xl text-center">{{ slide.russian }}</h2>
            <span class="hidden md:block opacity-50 text-xl">{{ slide.name }}</span>
        	<div class="hidden md:block mt-3">
				<p class="opacity-50 line-clamp-5">
					{{ clearShikimoriDescription(slide.description) }}
				</p>
			</div>
            <div class="flex gap-3 mt-3 items-center justify-center md:justify-start">
              <UButton
                label="Смотреть"
                icon="i-lucide-play"
                size="xl"
              />
              <UTooltip
                :delay-duration="0"
                text="В избранное"
                arrow
              >
                <UButton
                  icon="i-lucide-bookmark"
                  size="lg"
                  variant="soft"
                />
              </UTooltip>
              <UTooltip
                :delay-duration="0"
                text="Дополнительное"
                arrow
              >
                <UButton
                  icon="i-lucide-ellipsis-vertical"
                  size="lg"
                  variant="soft"
                />
              </UTooltip>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>
