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
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  to: '/',
  badge: '4',
  onSelect: () => {
    open.value = false
  }
}, {
  label: 'Customers',
  icon: 'i-lucide-users',
  to: '/',
  onSelect: () => {
    open.value = false
  }
}, {
  label: 'Settings',
  to: '/',
  icon: 'i-lucide-settings',
  defaultOpen: true,
  children: [{
    label: 'General',
    to: '/',
    exact: true,
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Members',
    to: '/',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Notifications',
    to: '/',
    onSelect: () => {
      open.value = false
    }
  }, {
    label: 'Security',
    to: '/',
    onSelect: () => {
      open.value = false
    }
  }]
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
    :collapsed="true"
    class="bg-(--ui-bg-elevated)/25"
    :ui="{ footer: 'lg:border-t lg:border-(--ui-border)' }"
  >
    <template #default="{ collapsed }">
      <UNavigationMenu
        :collapsed="collapsed"
        :items="links[0]"
        orientation="vertical"
      />
    </template>

    <template #footer="{ collapsed }">
      <UNavigationMenu
        :collapsed="collapsed"
        :items="links[1]"
        orientation="vertical"
        class="mt-auto"
      />
    </template>
  </UDashboardSidebar>
</template>
