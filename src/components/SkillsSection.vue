<template>
  <div class="fixed inset-0 z-50 overflow-y-auto" v-if="true">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/40 backdrop-blur-sm"></div>

    <!-- Skills Panel -->
    <div class="relative min-h-screen flex items-center justify-center p-4">
      <div class="relative w-full max-w-4xl bg-[#111015] rounded-xl shadow-xl border border-zinc-800">
        <!-- Header -->
        <div class="relative p-6 border-b border-zinc-800">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-2 text-white">Technical Skills</h2>
            <p class="text-gray-400">
              A comprehensive overview of my technical expertise
      </p>
    </div>
          <!-- Close button -->
          <button @click="$emit('close')" 
                  class="absolute top-4 right-4 p-2 text-gray-400 hover:text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
      </div>

        <!-- Skills Grid -->
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(skillsList, category) in skills" :key="category" 
                 class="bg-[#18171c] rounded-lg p-4">
              <h3 class="text-lg font-semibold mb-3 text-white">{{ category }}</h3>
              <div class="space-y-2">
                <div v-for="skill in skillsList" :key="skill.name" 
                     class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full" :class="getColorClasses(skill.color)"></div>
                  <span class="text-gray-300">{{ skill.name }}</span>
        </div>
      </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string;
  color: string;
}

interface SkillCategory {
  [key: string]: Skill[];
}

const skills: SkillCategory = {
  'Core Technologies': [
    { name: 'JavaScript', color: 'yellow' },
    { name: 'TypeScript', color: 'blue' },
  ],
  'Frontend Frameworks': [
    { name: 'Vue.js', color: 'green' },
    { name: 'React', color: 'blue' },
    { name: 'Next.js', color: 'blue' },
    { name: 'Svelte', color: 'orange' },
    { name: 'SvelteKit', color: 'orange' },
  ],
  'Styling and UI': [
    { name: 'HTML5', color: 'orange' },
    { name: 'CSS3', color: 'blue' },
    { name: 'SCSS', color: 'pink' },
    { name: 'Tailwind', color: 'cyan' },
    { name: 'PrimeVue', color: 'blue' },
    { name: 'Vuetify', color: 'green' },
  ],
  'State Management': [
    { name: 'Redux', color: 'purple' },
    { name: 'Pinia', color: 'green' },
    { name: 'Vuex', color: 'green' },
  ],
  'Testing': [
    { name: 'Playwright', color: 'green' },
    { name: 'Cypress', color: 'green' },
    { name: 'Vitest', color: 'green' },
    { name: 'Jest', color: 'red' },
    { name: 'Testing Library', color: 'blue' },
    { name: 'Mock Service Worker', color: 'purple' },
  ],
  'Build and DevOps': [
    { name: 'Vite', color: 'purple' },
    { name: 'Webpack', color: 'blue' },
    { name: 'Docker', color: 'blue' },
    { name: 'Docker Compose', color: 'blue' },
    { name: 'Jenkins', color: 'red' },
  ],
  'Version Control': [
    { name: 'Git', color: 'orange' },
    { name: 'GitHub', color: 'purple' },
    { name: 'Bitbucket', color: 'blue' },
  ],
  'Optimization': [
    { name: 'Responsive Design', color: 'green' },
    { name: 'Lazy Loading', color: 'blue' },
    { name: 'Code Splitting', color: 'purple' },
    { name: 'Asset Minification', color: 'orange' },
    { name: 'Compression', color: 'cyan' },
  ],
  'Design and Tools': [
    { name: 'Figma', color: 'pink' },
    { name: 'API Integrations', color: 'blue' },
    { name: 'Documentation', color: 'green' },
  ]
}

const getColorClasses = (color: string) => {
  const colorMap = {
    pink: 'bg-pink-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    cyan: 'bg-cyan-500'
  }
  return colorMap[color as keyof typeof colorMap] || 'bg-gray-500'
}
</script> 