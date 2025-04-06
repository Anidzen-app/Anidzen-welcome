<script setup lang="ts">
const features = ref([
  {
    title: 'Icons',
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/getting-started/icons'
  },
  {
    title: 'Fonts',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/getting-started/fonts'
  },
  {
    title: 'Color Mode',
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/getting-started/color-mode'
  }
])
const links = ref([
  {
    label: 'Explore components',
    to: '/components/app',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <div>
    <div class="top-0 left-0 absolute w-full h-dvh bg-linear-to-r from-(--ui-bg) from-50%">
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
