<script setup lang="ts">

</script>

<template>
  <CommonAppIcons />

  <UApp :toaster="{ expand: false }">
    <NuxtLoadingIndicator />
    <CommonCookieConsent />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
