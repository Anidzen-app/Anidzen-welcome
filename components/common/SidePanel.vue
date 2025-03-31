<script setup lang="ts">
import { useSidebarStore } from '~/stores/sidebar'

const config = useRuntimeConfig()
const sidebarStore = useSidebarStore()
const appVersion = config.public.appVersion

const links = [
  [
    {
      label: 'Главная',
      icon: 'i-lucide-house',
      to: '/'
    }
    // {
    //   label: 'Главная',
    //   icon: 'i-lucide-house',
    //   to: '/',
    //   defaultOpen: true,
    //   children: [
    //     {
    //       label: 'Introduction',
    //       description: 'Fully styled and customizable components for Nuxt.',
    //       icon: 'i-lucide-house'
    //     }
    //   ]
    // }
  ]
]
</script>

<template>
  <UDashboardSidebar
	  id="default"
    collapsible
    :collapsed="sidebarStore.collapsible"
    class="bg-(--ui-bg-elevated)/25"
    :ui="{ root: 'min-w-[73px]', footer: 'lg:border-t lg:border-(--ui-border) justify-center' }"
  >
    <template #header="{ collapsed }">
      <div class="py-4 flex items-center justify-between gap-2">
        <UColorModeImage
          light="/anidzen-light.svg"
          dark="/anidzen-dark.svg"
          :width="50"
          :height="50"
        />
        <h2
          v-if="!collapsed"
          class="text-3xl font-bold"
        >
          <span class="text-(--ui-primary)">Ani</span>dzen
        </h2>
      </div>
    </template>

    <template #default="{ collapsed }">
      <div class="min-w-[40px]">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[0]"
          orientation="vertical"
          :ui="{ linkLeadingIcon: 'size-7', linkTrailingBadgeSize: 'xl' }"
        />
      </div>
    </template>

    <template #footer="{ collapsed }">
      <div class="min-w-[40px]">
        <span
          v-if="!collapsed"
          class="text-xs text-left"
        >V. <span class="opacity-50">{{ appVersion }}</span></span>
      </div>
    </template>
  </UDashboardSidebar>
</template>
