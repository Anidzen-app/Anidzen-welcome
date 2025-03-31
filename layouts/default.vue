<template>
  <div>
    <UDashboardGroup
      unit="rem"
      storage="cookie"
      storage-key="anidzen-one-dash-collapse"
    >
      <CommonSidePanel />
      <div>
        <CommonAppHeader />
        <div>
          <UContainer class="w-auto max-w-[var(--container-8xl)] mt-0 md:mt-5 px-0 py-0">
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
