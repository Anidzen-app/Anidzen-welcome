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
        label: 'Anidzen — Аниме-платформа',
        icon: 'i-lucide-film',
        description: 'Погрузись в мир аниме — все что нужно, в одном месте!',
        to: 'https://watch.anidzen.com',
        disabled: true
      },
      {
        label: 'Sora Graph-ql API',
        icon: 'i-lucide-cloud-sun',
        description: 'Sora.QL — быстрый GraphQL API для аниме. Получите всю информацию о аниме, персонажах и эпизодах через мощный API с поддержкой нескольких языков.',
        to: 'https://sora.anidzen.com'
      },
      {
        label: 'Ota-ku — Твой Личный Портал в Мир Аниме',
        icon: 'i-lucide-clapperboard',
        description: 'Лучшие аниме онлайн бесплатно с русской озвучкой. Погружайся в мир аниме на ota-ku.am — твой портал для просмотра аниме без границ!',
        to: 'https://ota-ku.am'
      },
      {
        label: 'Aira — Календарь выхода аниме эпизодов',
        icon: 'i-lucide-calendar-days',
        description: 'Следите за выходом новых серий любимых аниме через удобный календарь и расширение Chrome — всё для вашего удобства!',
        to: 'https://aira.anidzen.com'
      }
    ]
  },
  // {
  //   label: 'О нас',
  //   icon: 'i-lucide-user',
  //   to: '/',
  //   active: false
  // },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/Anidzen-app',
    target: '_blank'
  },
  {
    label: 'Telegram',
    icon: 'i-simple-icons-telegram',
    to: 'https://t.me/AnidzenEcosystems',
    target: '_blank'
  }
])
</script>

<template>
  <div>
    <header
      class="header py-3 px-4 sm:px-0 md:bg-(--ui-bg)/25 md:backdrop-blur md:border-b md:border-(--ui-border) w-full fixed md:fixed top-0 z-50"
    >
      <UContainer class="flex justify-between max-w-[var(--container-8xl)] px-0">
        <div class="flex items-center">
          <div class=" flex items-center justify-between gap-2">
            <UColorModeImage
              light="/anidzen-light.svg"
              dark="/anidzen-dark.svg"
              :width="50"
              :height="50"
              class="min-w-[50px] min-h-[50px]"
            />
            <h2
              class="text-3xl font-bold hidden sm:block"
            >
              <span class="text-(--ui-primary)">Ani</span>dzen
            </h2>
          </div>
        </div>
        <div class="center hidden lg:flex items-center w-full px-4 md:px-10 justify-center">
          <UContainer>
            <UNavigationMenu
              variant="link"
              :items="items"
              class="w-full justify-center"
            />
          </UContainer>
        </div>
        <div class="right flex items-center">
          <UColorModeButton
            size="xl"
            color="primary"
            variant="soft"
          />
        </div>
      </UContainer>
    </header>
  </div>
</template>
