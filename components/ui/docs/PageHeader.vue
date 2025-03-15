<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lastModified: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <UPageHeader
      :title="props.title"
      :description="props.description"
    >
      <template #headline>
        последное обнавление в {{ props.lastModified }}
      </template>
    </UPageHeader>
  </div>
</template>

<style scoped>

</style>
