<!-- ./app.vue -->
<template>
  <div>
    <SiteHeader />
    <NuxtPage />
  </div>
</template>

<script>
export default {
  middleware (ctx) {
    ctx.$gtm.push({ event: 'ssr' })
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
