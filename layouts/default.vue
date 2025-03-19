<template>
  <div>
    <UDashboardGroup>
      <CommonSidePanel />
      <div class="w-full overflow-y-scroll">
        <CommonAppHeader />
        <div class="w-full">
          <UContainer class="flex justify-between max-w-[var(--container-8xl)] mt-5">
            <slot />
          </UContainer>
        </div>
      </div>
    </udashboardgroup>
  </div>
</template>
