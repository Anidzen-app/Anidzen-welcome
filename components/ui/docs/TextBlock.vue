<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div>
    <div class="flex mt-1 md:mt-1.5">
      <h3 class="mr-2 text-(--ui-primary)">
        {{ props.id }}
      </h3>
      <p>{{ props.content }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
