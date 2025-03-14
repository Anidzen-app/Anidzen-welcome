<script setup lang="ts">
const props = defineProps({
  titleId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  descriptionId: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <section>
      <div>
        <h2 class="text-xl sm:text-2xl text-pretty font-bold text-(--ui-text-highlighted) mt-2">
          {{ props.titleId }}. {{ props.title }}
        </h2>
        <span class="text-lg text-pretty text-(--ui-text-muted) mt-4">{{ props.descriptionId }}. {{ props.description }}</span>
      </div>
      <div>
        <div class="ml-7">
          <slot name="content" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
