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
  <div class="max-h-[520px] md:max-h-[400px] overflow-hidden md:bg-(--ui-bg-elevated)/25  md:rounded-lg relative">
    <div
      class="hidden md:block absolute top-0 h-0.5 md:h-1 bg-primary-400 z-10"
      :style="{ width: progress + '%' }"
    />

    <swiper-container
      ref="swiperRef"
      :slides-per-view="1"
      grab-cursor
      loop
      :breakpoints="{
        100: {
          spaceBetween: '10'
        },
        768: {
          spaceBetween: '20'
        },
        1024: {
          spaceBetween: '20'
        }
      }"
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
              class="w-full md:min-w-[300px] object-cover h-[520px] md:h-[400px]"
            />
          </div>
          <div class="py-4 px-4 md:pr-4 flex flex-col bottom-0 absolute md:relative bg-linear-to-t from-(--ui-bg) from-45% md:bg-transparent md:from-transparent w-full md:w-auto">
            <h2 class="text-2xl md:text-3xl text-center md:text-left line-clamp-2 lg:line-clamp-2">
              {{ slide.russian }}
            </h2>
            <div class="hidden md:block">
              <span class="opacity-50 text-xl line-clamp-1">{{ slide.name }}</span>
            </div>
            <div class="mt-1 md:mt-3 text-center md:text-left opacity-50 text-sm md:opacity-100 md:text-base">
              <span>Оценка: {{ slide.score }}</span> |
              <span>Серии։ {{ slide.episodes }}</span> |
              <span>{{ slide.genres[0].russian }}</span>
            </div>
            <div class="hidden md:block mt-3">
              <p class="opacity-50  line-clamp-3 lg:line-clamp-5">
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
