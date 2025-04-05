<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <h2 class="text-xl sm:text-2xl font-bold text-(--ui-text-highlighted) mt-2">
      {{ props.data.titleId }}. {{ props.data.title }}
    </h2>

    <section
      v-for="section in props.data.sections"
      :key="section.id"
      class="mt-1"
    >
      <h3 class="text-lg text-pretty text-(--ui-text-muted)">
        {{ section.id }}. {{ section.description }}
      </h3>
      <div>
        <div class="ml-7">
          <div
            v-for="term in section.options"
            :key="term.id"
          >
            <UiDocsTextBlock
              :id="term.id"
              :content="term.content"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
