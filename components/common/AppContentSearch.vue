<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('content'), {
  server: false
})

const links = [{
  label: 'Docs',
  icon: 'i-lucide-book',
  to: '/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/components'
}, {
  label: 'Roadmap',
  icon: 'i-lucide-chart-no-axes-gantt',
  to: '/roadmap'
}]

const searchTerm = ref('')
</script>

<template>
  <div>
    <UContentSearchButton />
    <ClientOnly>
      <UContentSearch
        v-model:search-term="searchTerm"
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :links="links"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </div>
</template>

<style scoped>

</style>
