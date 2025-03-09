<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent, Suspense } from 'vue'
import TheHeader from './components/TheHeader.vue'
const HeroSection = defineAsyncComponent(() => 
  import('./components/HeroSection.vue')
)
const ProjectsSection = defineAsyncComponent(() => 
  import('./components/ProjectsSection.vue')
)
const ContactSection = defineAsyncComponent(() => 
  import('./components/ContactSection.vue')
)

const darkMode = ref(false)

// Create media query for dark mode
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

// Handler for system theme changes
const handleThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
  darkMode.value = e.matches
  document.documentElement.classList.toggle('dark', e.matches)
}

onMounted(() => {
  // Set dark mode as default
  darkMode.value = true
  document.documentElement.classList.add('dark')
  
  // Listen for system theme changes
  mediaQuery.addEventListener('change', handleThemeChange)
})

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle('dark', darkMode.value)
}
</script>

<template>
  <Suspense>
    <template #default>
      <div class="min-h-screen bg-neutral-50 dark:bg-zinc-900 relative overflow-hidden">
        <!-- Background gradient mesh -->
        <div class="absolute inset-0 z-0">
          <div class="absolute -inset-[100%] opacity-[0.02] dark:opacity-[0.07]"
            style="background: radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, transparent 50%),
                            radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 50%),
                            radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 50%);">
          </div>
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <TheHeader :dark-mode="darkMode" :onToggleDarkMode="toggleDarkMode" />
          <router-view></router-view>
          <footer class="bg-stone-100 dark:bg-zinc-800/50 py-8">
            <div class="container mx-auto px-6 text-center text-zinc-600 dark:text-zinc-400">
              <span class="font-mono">
                &lt;/&gt; with 💙 using Vue.js {{ new Date().getFullYear() }}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </template>
    <template #fallback>
      <div class="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-zinc-900">
        <div class="animate-spin">Loading...</div>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
