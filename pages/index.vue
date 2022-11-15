<!-- ./pages/index.vue -->
<template>
  <main>
    <section class="hero-section">
      <header>
        <h1 class="font-black text-8xl">مرحبا بكم</h1>
        <p> في <NuxtLink to="/blog">Ko5Blog</NuxtLink></p>
      </header>
    </section>
  </main>
</template>

<style scoped>
.hero-section {
  @apply flex items-center justify-center text-center w-full h-screen bg-slate-50 text-slate-700;
}
</style>