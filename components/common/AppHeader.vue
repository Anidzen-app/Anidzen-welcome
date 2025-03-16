<script setup lang="ts">
</script>

<template>
  <div>
    <header
      id="header"
      class="header py-2 px-4 bg-(--ui-bg)/75 backdrop-blur border-b border-(--ui-border) h-(--ui-header-height) sticky top-0 z-50 flex items-center justify-between "
    >
      <div class="left">
        <UDashboardSidebarCollapse />
      </div>

      <div class="center">
        <CommonAppContentSearch />
      </div>
      <div class="right">
        wdwd
      </div>
    </header>
  </div>
</template>
