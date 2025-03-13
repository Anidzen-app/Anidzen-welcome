<script setup lang="ts">

</script>

<template>
  <div>
    <section class="relative flex h-dvh">
      <div class="hidden lg:block w-1/2">
        <UiAuthAnimeMarquee />
      </div>
      <div class="w-full lg:w-1/2">
        <div class="flex items-center justify-center h-full">
          <slot />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
