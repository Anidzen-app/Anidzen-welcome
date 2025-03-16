<script setup lang="ts">
import { isTauri } from '@tauri-apps/api/core'
import { Capacitor } from '@capacitor/core'

const toast = useToast()

onMounted(async () => {
  const isTauriApp = isTauri()
  const isCapacitor = Capacitor.isNativePlatform()

  if (isTauriApp || isCapacitor) return

  const cookie = useCookie('cookie-consent')
  if (cookie.value === 'accepted') {
    return
  }

  toast.add({
    title: '🍪 Мы используем собственные файлы cookie, чтобы улучшить ваш опыт на нашем сайте.',
    duration: 0,
    close: false,
    actions: [{
      size: 'md',
      label: '✅ Принять',
      color: 'neutral',
      variant: 'outline',
      onClick: () => {
        cookie.value = 'accepted'
      }
    }, {
      size: 'md',
      label: '🚫 Отказаться',
      color: 'neutral',
      variant: 'ghost'
    }]
  })
})
</script>

<template>
  <div />
</template>
