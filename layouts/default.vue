<template>
  <div>
    <UDashboardGroup>
      <CommonSidePanel />
      <div class="w-full overflow-y-scroll">
        <CommonAppHeader />
        <div>
          <UContainer class="max-w-[var(--container-8xl)] w-full mt-0 md:mt-5 px-0 py-0">
            <div class="overflow-hidden">
              <slot />
            </div>
          </UContainer>
        </div>
      </div>
    </udashboardgroup>
  </div>
</template>

<script setup lang="ts">
</script>
