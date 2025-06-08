<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
</script>

<template>
  <main class="min-h-screen bg-[#111015]">
    <HeroSection />
  </main>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #ff3366;
  --secondary: #ff6b6b;
  --accent: #4ecdc4;
  --background: #111015;
  --text: #ffffff;
}

body {
  @apply bg-[#111015] text-white;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
</style>
