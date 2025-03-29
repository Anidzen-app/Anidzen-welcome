<script setup lang="ts">
import { useSidebarStore } from '~/stores/sidebar'

const sidebarStore = useSidebarStore()
</script>

<template>
  <div>
    <header
      id="header"
      class="header py-3 md:bg-(--ui-bg)/75 md:backdrop-blur md:border-b md:border-(--ui-border) h-(--ui-header-height) w-full fixed md:sticky top-0 z-50"
    >
      <UContainer class="flex justify-between max-w-[var(--container-8xl)] px-0">
        <div class="left">
          <UButton
            size="xl"
            icon="i-lucide-menu"
            class="hidden lg:flex cursor-pointer"
            variant="subtle"
            @click="sidebarStore.toggle()"
          />
        </div>
        <div class="center flex items-center w-full px-4 md:px-10 justify-center">
          <UInput
            icon="i-lucide-search"
            size="xl"
            placeholder="Что прикажете найти, сенпай?"
            variant="soft"
            class="w-full max-w-[700px] hidden md:block"
          />
			<UInput
				icon="i-lucide-search"
				size="xl"
				placeholder="Что искать, сенпай?"
				:highlight="false"
				class="w-full max-w-[700px] block md:hidden"
			/>
        </div>
        <div class="hidden lg:block right">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/140258231?s=400&u=fb27d8779ed74ac3d21855706638fcb9311660f0&v=4"
            size="xl"
          />
        </div>
      </UContainer>
    </header>
  </div>
</template>
