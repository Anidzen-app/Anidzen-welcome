<script setup lang="ts">
const features = ref([
  {
    title: 'Всё в одном месте',
    description: 'Аниме, манга, арты, новости, фан-контент — всё, что ты любишь, собрано в AniDzen. Больше не нужно искать по всему интернету — просто заходи.',
    icon: 'i-lucide-globe',
    to: ''
  },
  {
    title: 'Открытый API',
    description: 'Стань частью вселенной AniDzen. С помощью Sora.QL — нашего собственного GraphQL API — ты можешь создавать собственные аниме-приложения, ботов, виджеты или даже строить свои миры. Надёжно, гибко, масштабируемо.',
    icon: 'i-lucide-cloud-sun',
    to: 'https://sora.anidzen.com'
  },
  {
    title: 'На любом устройстве',
    description: 'AniDzen всегда с тобой. Смотри аниме, читай мангу и оставайся в курсе новостей с любого устройства: смартфона, планшета, ноутбука, телевизора и даже смарт-холодильника. Мы оптимизированы под всё, даже под мечту.',
    icon: 'i-lucide-monitor-smartphone',
    to: '/#platforms'
  }
])
const links = ref([
  {
    label: 'Начать смотреть',
    to: 'https://watch.anidzen.com',
    color: 'primary',
    variant: 'solid',
    size: 'xl',
    trailingIcon: 'i-lucide-play-circle'
  },
  {
    label: 'Поддержать проект',
    to: '/donate',
    color: 'primary',
    variant: 'soft',
    size: 'xl',
    disabled: true,
    trailingIcon: 'i-lucide-heart'
  }
])
</script>

<template>
  <div>
    <div class="top-0 left-0 absolute w-full h-dvh bg-linear-to-r from-(--ui-bg) from-55%">
      <div class="h-dvh flex items-center">
        <UContainer class="max-w-8xl">
          <div class="h-full w-full">
            <UPageSection
              title="Добро пожаловать в AniDzen — Вселенную аниме!"
              description="AniDzen — твой универсальный мир аниме. Всё, что ты хочешь знать, увидеть и почувствовать, в одном месте!"
              :features="features"
              orientation="horizontal"
              :links="links"
              :ui="{ container: 'py-0 sm:py-0 lg:py-0 mx-0 px-0 sm:px-0 lg:px-0 max-w-auto' }"
            />
          </div>
        </UContainer>
      </div>
    </div>
  </div>
</template>
