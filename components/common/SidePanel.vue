<script setup lang="ts">
const open = ref(false)

const links = [[{
  label: 'Home',
  icon: 'i-lucide-house',
  to: '/',
  onSelect: () => {
    open.value = false
  }
}, {
  label: 'Customers',
  icon: 'i-lucide-users',
  to: '/auth/sign-in',
  onSelect: () => {
    open.value = false
  }
}], [{
  label: 'Feedback',
  icon: 'i-lucide-message-circle',
  to: 'https://github.com/nuxt-ui-pro/dashboard',
  target: '_blank'
}, {
  label: 'Help & Support',
  icon: 'i-lucide-info',
  to: 'https://github.com/nuxt/ui-pro',
  target: '_blank'
}]]
</script>

<template>
  <UDashboardSidebar
    v-model:open="open"
    collapsible
    class="bg-(--ui-bg-elevated)/25"
    :ui="{ root: 'min-w-[73px]', footer: 'lg:border-t lg:border-(--ui-border) justify-center' }"
  >
    <template #header>
      <div class="py-4">
        <NuxtImg src="/anidzen-light.svg" />
      </div>
    </template>

    <template #default="{ collapsed }">
      <div class="min-w-[40px]">
        <UNavigationMenu
          size="xl"
          :collapsed="collapsed"
          :items="links[0]"
          orientation="vertical"
          :ui="{ linkLeadingIcon: 'size-7', linkTrailingBadgeSize: 'xl' }"
        />
      </div>
    </template>
  </UDashboardSidebar>
</template>
