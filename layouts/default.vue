<template>
  <div>
    <UDashboardGroup>
      <CommonSidePanel />
      <div class="overflow-y-auto flex-1">
        <CommonAppHeader />
        <div>
          <UContainer class="max-w-[var(--container-8xl)] mt-0 md:mt-5 px-0 py-0">
            <div>
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
