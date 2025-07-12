<script setup lang="ts">
import TokyoTower3D from './TokyoTower3D.vue'
import SkillsSection from './SkillsSection.vue'
import { ref } from 'vue'

const showSkills = ref(false)
const highlightSocial = ref(false)
const socialLinksRef = ref<HTMLElement | null>(null)

const handleGetInTouch = () => {
  highlightSocial.value = true
  socialLinksRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  setTimeout(() => {
    highlightSocial.value = false
  }, 2000)
}
</script>

<template>
  <section class="relative min-h-[100dvh] flex flex-col justify-center items-center bg-[#111015] overflow-hidden px-4 sm:px-6 lg:px-8">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#111015] via-[#111015] to-[#1a1a1f] opacity-100"></div>

    <!-- Main content container -->
    <div class="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[100dvh] py-8 sm:py-12 md:py-16 lg:py-20">
      <!-- Headline -->
      <div class="text-center space-y-3 sm:space-y-4 lg:space-y-5">
        <h1 class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-[1.1] sm:leading-[1.2]">
          <span class="block text-white mb-1 sm:mb-1.5 lg:mb-2">Hi <span class="inline-block animate-wave origin-[70%_70%]">👋</span></span>
          <span class="block text-white">
            <span>I'm </span>
            <span class="bg-gradient-to-r from-pink-400 via-pink-300 to-amber-300 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">Ibraimov Amir</span>
          </span>
          <span class="block text-white mt-1 sm:mt-1.5 lg:mt-2">
            <span>a </span>
            <span class="bg-gradient-to-r from-pink-400 via-pink-300 to-amber-300 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">Frontend Engineer</span>
          </span>
          <span class="block text-white mt-1 sm:mt-1.5 lg:mt-2">based in Tokyo</span>
        </h1>
        
        <!-- 3D Model Container -->
        <div class="flex items-center justify-center w-full mt-6 sm:mt-8 lg:mt-10">
          <div class="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[16rem] lg:h-[16rem] xl:w-[20rem] xl:h-[20rem] 2xl:w-[24rem] 2xl:h-[24rem] min-h-[8rem] relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <TokyoTower3D />
            </div>
          </div>
        </div>

        <!-- M3 Divider -->
        <div class="w-full max-w-md mx-auto">
          <div class="h-px bg-gradient-to-r from-transparent via-[rgb(103,80,164)] to-transparent opacity-50"></div>
        </div>

        <p class="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 leading-relaxed mt-6 sm:mt-8 lg:mt-10">
          With 5+ years of experience in frontend engineering,<span class="whitespace-nowrap"> I enjoy</span> creating responsive and user-friendly web applications. I'm passionate about clean code, performance optimization, and delivering great user experiences.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center w-full max-w-md lg:max-w-xl mx-auto px-4 mt-6 sm:mt-8 lg:mt-10">
          <button 
            @click="handleGetInTouch"
            class="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-[1.25rem] text-base sm:text-lg font-medium tracking-[0.00625rem] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer overflow-hidden bg-gradient-to-r from-[rgb(103,80,164)] via-[rgb(123,90,194)] to-[rgb(103,80,164)] bg-[length:200%_200%] animate-gradient text-white shadow-[0_1px_2px_0_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)] hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.3),0_2px_6px_2px_rgba(0,0,0,0.15)] before:content-[''] before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:opacity-[0.08] active:before:opacity-[0.12] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span class="relative z-10">Get in touch</span>
          </button>
          <button 
            @click="showSkills = true"
            class="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-[1.25rem] text-base sm:text-lg font-medium tracking-[0.00625rem] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer overflow-hidden bg-[#18171c] text-[rgb(103,80,164)] border-2 border-[rgb(103,80,164)] hover:bg-[#232127] before:content-[''] before:absolute before:inset-0 before:bg-[rgb(103,80,164)] before:opacity-0 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:opacity-[0.08] active:before:opacity-[0.12] hover:scale-[1.02] active:scale-[0.98] shadow-[0_1px_2px_0_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)] hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.3),0_2px_6px_2px_rgba(0,0,0,0.15)]"
          >
            <span class="relative z-10">View technical skills</span>
          </button>
        </div>

        <!-- M3 Divider -->
        <div class="w-full max-w-md mx-auto">
          <div class="h-px bg-gradient-to-r from-transparent via-[rgb(103,80,164)] to-transparent opacity-50"></div>
        </div>

        <!-- Tech stack badges -->
        <div class="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4 mt-6 sm:mt-8 lg:mt-10">
          <span class="px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 rounded-full bg-[#18171c] text-pink-200 border border-pink-400/20 text-xs sm:text-sm lg:text-base font-medium hover:border-pink-400/40 transition-colors">
            Vue.js
          </span>
          <span class="px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 rounded-full bg-[#18171c] text-blue-200 border border-blue-400/20 text-xs sm:text-sm lg:text-base font-medium hover:border-blue-400/40 transition-colors">
            React
          </span>
          <span class="px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 rounded-full bg-[#18171c] text-orange-200 border border-orange-400/20 text-xs sm:text-sm lg:text-base font-medium hover:border-orange-400/40 transition-colors">
            Svelte
          </span>
          <span class="px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 rounded-full bg-[#18171c] text-cyan-200 border border-cyan-400/20 text-xs sm:text-sm lg:text-base font-medium hover:border-cyan-400/40 transition-colors">
            Tailwind
          </span>
          <span class="px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 rounded-full bg-[#18171c] text-green-200 border border-green-400/20 text-xs sm:text-sm lg:text-base font-medium hover:border-green-400/40 transition-colors">
            TypeScript
          </span>
          <span class="px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 rounded-full bg-[#18171c] text-yellow-200 border border-yellow-400/20 text-xs sm:text-sm lg:text-base font-medium hover:border-yellow-400/40 transition-colors">
            JavaScript
          </span>
        </div>

        <!-- M3 Divider -->
        <div class="w-full max-w-md mx-auto">
          <div class="h-px bg-gradient-to-r from-transparent via-[rgb(103,80,164)] to-transparent opacity-50"></div>
        </div>

        <!-- Social Links -->
        <div 
          ref="socialLinksRef"
          class="flex flex-col items-center justify-center mt-6 sm:mt-8 lg:mt-10 transition-all duration-500"
        >
          <div 
            class="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 transition-all duration-500"
            :class="{
              'scale-105': highlightSocial,
              'bg-[#232127]/30 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg': highlightSocial
            }"
          >
          <!-- GitHub -->
          <div class="flex flex-col items-center">
            <a 
              href="https://github.com/amirqa17" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-zinc-400 hover:text-white transition-colors p-2 hover:scale-110 transform duration-300"
              :class="{ 'text-white scale-110': highlightSocial }"
            >
              <span class="sr-only">GitHub</span>
              <svg class="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <span 
              class="text-xs text-gray-400 font-medium mt-1 transition-all duration-500"
              :class="{
                'opacity-100 translate-y-0': highlightSocial,
                'opacity-0 translate-y-2': !highlightSocial
              }"
            >GitHub</span>
          </div>
          
          <!-- LinkedIn -->
          <div class="flex flex-col items-center">
            <a 
              href="https://www.linkedin.com/in/amiribraimov/" 
              target="_blank"
              rel="noopener noreferrer"
              class="text-zinc-400 hover:text-white transition-colors p-2 hover:scale-110 transform duration-300"
              :class="{ 'text-white scale-110': highlightSocial }"
            >
              <span class="sr-only">LinkedIn</span>
              <svg class="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <span 
              class="text-xs text-gray-400 font-medium mt-1 transition-all duration-500"
              :class="{
                'opacity-100 translate-y-0': highlightSocial,
                'opacity-0 translate-y-2': !highlightSocial
              }"
            >LinkedIn</span>
          </div>
          
          <!-- Email -->
          <div class="flex flex-col items-center">
            <a 
              href="mailto:ibraimov.amir1996@gmail.com"
              class="text-zinc-400 hover:text-white transition-colors p-2 hover:scale-110 transform duration-300"
              :class="{ 'text-white scale-110': highlightSocial }"
            >
              <span class="sr-only">Email</span>
              <svg class="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
            <span 
              class="text-xs text-gray-400 font-medium mt-1 transition-all duration-500"
              :class="{
                'opacity-100 translate-y-0': highlightSocial,
                'opacity-0 translate-y-2': !highlightSocial
              }"
            >Email</span>
          </div>
          
          <!-- Discord -->
          <div class="flex flex-col items-center">
            <a 
              href="https://discord.com/users/amiracle2157"
              target="_blank"
              rel="noopener noreferrer"
              class="text-zinc-400 hover:text-white transition-colors p-2 hover:scale-110 transform duration-300"
              :class="{ 'text-white scale-110': highlightSocial }"
            >
              <span class="sr-only">Discord</span>
              <svg class="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <span 
              class="text-xs text-gray-400 font-medium mt-1 transition-all duration-500"
              :class="{
                'opacity-100 translate-y-0': highlightSocial,
                'opacity-0 translate-y-2': !highlightSocial
              }"
            >Discord</span>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- Skills Section -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <SkillsSection v-if="showSkills" @close="showSkills = false" />
    </Transition>
  </section>
</template>

<style>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.animate-gradient {
  animation: gradient 3s ease-in-out infinite;
}

.animate-wave {
  animation: wave 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}
</style>