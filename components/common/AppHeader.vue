<script setup lang="ts">
const items = ref<NavigationMenuItem[]>([
  {
    label: 'Главная',
    icon: 'i-lucide-house',
    to: '/'
  },
  {
    label: 'Экосистема',
    icon: 'i-lucide-atom',
    to: '/',
    active: false,
    children: [
      {
        label: 'AniDzen — Аниме-платформа',
        icon: 'i-lucide-tv',
        description: 'Смотреть аниме онлайн с русской и английской озвучкой.',
        to: 'https://watch.anidzen.com'
      },
      {
        label: 'API',
        icon: 'i-lucide-code',
        description: 'Документация по API для разработчиков.',
        to: '/api-docs'
      }
    ]
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/components',
    children: [
      {
        label: 'Link',
        icon: 'i-lucide-file-text',
        description: 'Use NuxtLink with superpowers.',
        to: '/components/link'
      },
      {
        label: 'Modal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '/components/modal'
      },
      {
        label: 'NavigationMenu',
        icon: 'i-lucide-file-text',
        description: 'Display a list of links.',
        to: '/components/navigation-menu'
      },
      {
        label: 'Pagination',
        icon: 'i-lucide-file-text',
        description: 'Display a list of pages.',
        to: '/components/pagination'
      },
      {
        label: 'Popover',
        icon: 'i-lucide-file-text',
        description: 'Display a non-modal dialog that floats around a trigger element.',
        to: '/components/popover'
      },
      {
        label: 'Progress',
        image: 'public/favicon.ico',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '/components/progress'
      }
    ]
  },
  {
    label: 'О нас',
    icon: 'i-lucide-user',
    to: '/about'
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/Anidzen-app',
    target: '_blank'
  }
])
</script>

<template>
  <div>
    <header
      class="header py-3 md:bg-(--ui-bg)/75 md:backdrop-blur md:border-b md:border-(--ui-border) h-(--ui-header-height) w-full fixed md:fixed top-0 z-50"
    >
      <UContainer class="flex justify-between max-w-[var(--container-8xl)] px-0">
        <div class="flex items-center">
          <div class="flex items-center justify-between gap-2">
            <UColorModeImage
              light="/anidzen-light.svg"
              dark="/anidzen-dark.svg"
              :width="50"
              :height="50"
            />
            <h2
              class="text-3xl font-bold"
            >
              <span class="text-(--ui-primary)">Ani</span>dzen
            </h2>
          </div>
        </div>
        <div class="center flex items-center w-full px-4 md:px-10 justify-center">
          <UContainer>
            <UNavigationMenu
              variant="link"
              :items="items"
              class="w-full justify-center"
            >
            </UNavigationMenu>
          </UContainer>
        </div>
        <div class="right flex items-center">
          <UColorModeButton
            size="xl"
            variant="soft"
          />
        </div>
      </UContainer>
    </header>
	  <UIcon></UIcon>
  </div>
</template>
