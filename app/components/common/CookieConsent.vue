<script setup lang="ts">
const toast = useToast()

onMounted(async () => {
  const cookie = useCookie('cookie-consent')
  if (cookie.value === 'accepted') {
    return
  }

  toast.add({
    title: '🍪 Мы используем файлы cookie',
    description: 'Мы используем собственные файлы cookie для улучшения вашего опыта на нашем сайте, чтобы адаптировать контент, анализировать поведение пользователей и улучшать наши услуги. Продолжая использовать этот сайт, вы соглашаетесь на использование файлов cookie.',
    duration: 0,
    close: false,
    actions: [{
      size: 'xl',
      label: '✅ Принять',
      color: 'neutral',
      variant: 'outline',
      onClick: () => {
        cookie.value = 'accepted'
      }
    }, {
      size: 'xl',
      label: '🚫 Отказаться',
      color: 'neutral',
      variant: 'soft'
    }]
  })
})
</script>

<template>
  <div />
</template>
