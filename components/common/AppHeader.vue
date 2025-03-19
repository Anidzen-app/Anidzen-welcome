<script setup lang="ts">
import { useSidebarStore } from '~/stores/sidebar'

const sidebarStore = useSidebarStore()
</script>

<template>
  <div>
    <header
      id="header"
      class="header py-2 px-4 bg-(--ui-bg)/75 backdrop-blur border-b border-(--ui-border) h-(--ui-header-height) sticky top-0 z-50"
    >
      <UContainer class="flex justify-between max-w-[var(--container-8xl)]">
        <div class="left">
          <UButton
            size="xl"
            icon="i-lucide-menu"
            class="cursor-pointer"
            variant="subtle"
            @click="sidebarStore.toggle()"
          />
        </div>
        <div class="center flex items-center w-full px-10 justify-center">
          <UInput
            icon="i-lucide-search"
            size="xl"
            placeholder="Search..."
            variant="soft"
            class="w-full max-w-[700px]"
          />
        </div>
        <div class="right">
          <UAvatar
            src="https://github.com/benjamincanac.png"
            size="xl"
          />
        </div>
      </UContainer>
    </header>
  </div>
</template>
