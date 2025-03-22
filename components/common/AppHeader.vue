<script setup lang="ts">
import { useSidebarStore } from '~/stores/sidebar'

const sidebarStore = useSidebarStore()
</script>

<template>
  <div>
    <header
      id="header"
      class="header py-3  bg-(--ui-bg)/75 backdrop-blur border-b border-(--ui-border) h-(--ui-header-height) sticky top-0 z-50"
    >
      <UContainer class="flex justify-between max-w-[var(--container-8xl)]">
        <div class="left">
          <UButton
            size="xl"
            icon="i-lucide-menu"
            class="hidden lg:flex cursor-pointer"
            variant="subtle"
            @click="sidebarStore.toggle()"
          />
        </div>
        <div class="center flex items-center w-full px-10 justify-center">
                    <UInput
                      icon="i-lucide-search"
                      size="xl"
                      placeholder="Что прикажете найти, сенпай?"
                      variant="soft"
                      class="w-full max-w-[700px]"
                    />
        </div>
        <div class="right">
                    <UAvatar
                      src="https://avatars.githubusercontent.com/u/140258231?s=400&u=fb27d8779ed74ac3d21855706638fcb9311660f0&v=4"
                      size="xl"
                    />
        </div>
      </UContainer>
    </header>
  </div>
</template>
