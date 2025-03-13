<script setup lang="ts">

</script>

<template>
  <div>
	  <section class="relative">
		  <div class="absolute">
			  <UiAuthAnimeMarquee/>
		  </div>
		  <div class="relative">
			  <UCard>
				  <slot/>
			  </UCard>
		  </div>
	  </section>
  </div>
</template>

<style scoped>

</style>
