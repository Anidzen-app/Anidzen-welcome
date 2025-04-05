<template>
  <div>
    <CommonAppHeader />
    <section class="relative flex h-dvh">
      <UContainer class="max-w-8xl">
        <div>
          <slot />
        </div>
      </UContainer>
      <div class="hidden lg:block w-full overflow-hidden absolute -z-10">
        <UiAnimeMarquee />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>
