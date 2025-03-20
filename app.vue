<script setup lang="ts">

</script>

<template>
  <CommonCookieConsent />

  <UApp :toaster="{ expand: false }">
    <!--    <VitePwaManifest title="Anidzen" /> -->
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
