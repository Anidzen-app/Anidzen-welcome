<template>
  <div>
    <UDashboardGroup>
      <CommonSidePanel />
      <div class="w-full overflow-y-scroll">
        <CommonAppHeader />
        <div>
          <slot />
        </div>
      </div>
    </udashboardgroup>
  </div>
</template>
