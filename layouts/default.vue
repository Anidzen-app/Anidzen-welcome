<template>
  <div>
    <UDashboardGroup>
      <CommonSidePanel />
      <div class="w-full overflow-y-scroll">
        <CommonAppHeader />
        <div class="w-full">
          <UContainer class="max-w-[var(--container-8xl)] mt-5">
            <div class="w-full">
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
