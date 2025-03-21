<template>
  <div class="space-y-8">
    <div class="text-center space-y-4">
      <div class="flex items-center gap-3 justify-center mb-4">
        <Icon icon="ph:code-block-bold" class="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        <h2 class="text-3xl font-bold text-zinc-900 dark:text-white">Technical Skills</h2>
      </div>
      <p class="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
        A comprehensive overview of my technical expertise and the technologies I work with.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Core Technologies -->
      <div class="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Core Technologies</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in skillSets.core_technologies"
            :key="tech.name"
            :class="[
              'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
              tech.color
            ]"
            :style="{
              animationDelay: `${tech.name.length * 0.1}s`
            }"
          >
            <Icon 
              :icon="tech.icon"
              class="w-4 h-4 tech-icon"
            />
            {{ tech.name }}
          </span>
        </div>
      </div>

      <!-- Frontend Frameworks -->
      <div class="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Frontend Frameworks</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in skillSets.frontend_frameworks"
            :key="tech.name"
            :class="[
              'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
              tech.color
            ]"
            :style="{
              animationDelay: `${tech.name.length * 0.1}s`
            }"
          >
            <Icon 
              :icon="tech.icon"
              class="w-4 h-4 tech-icon"
            />
            {{ tech.name }}
          </span>
        </div>
      </div>

      <!-- Styling and UI -->
      <div class="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Styling and UI</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in skillSets.styling_and_ui"
            :key="tech.name"
            :class="[
              'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
              tech.color
            ]"
            :style="{
              animationDelay: `${tech.name.length * 0.1}s`
            }"
          >
            <Icon 
              :icon="tech.icon"
              class="w-4 h-4 tech-icon"
            />
            {{ tech.name }}
          </span>
        </div>
      </div>

      <!-- Design and Prototyping -->
      <div class="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Design and Prototyping</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in skillSets.design_and_prototyping"
            :key="tech.name"
            :class="[
              'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
              tech.color
            ]"
            :style="{
              animationDelay: `${tech.name.length * 0.1}s`
            }"
          >
            <Icon 
              :icon="tech.icon"
              class="w-4 h-4 tech-icon"
            />
            {{ tech.name }}
          </span>
        </div>
      </div>

      <!-- State Management -->
      <div class="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">State Management</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in skillSets.state_management"
            :key="tech.name"
            :class="[
              'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
              tech.color
            ]"
            :style="{
              animationDelay: `${tech.name.length * 0.1}s`
            }"
          >
            <Icon 
              :icon="tech.icon"
              class="w-4 h-4 tech-icon"
            />
            {{ tech.name }}
          </span>
        </div>
      </div>

      <!-- Testing -->
      <div class="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Testing</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in skillSets.testing"
            :key="tech.name"
            :class="[
              'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
              tech.color
            ]"
            :style="{
              animationDelay: `${tech.name.length * 0.1}s`
            }"
          >
            <Icon 
              :icon="tech.icon"
              class="w-4 h-4 tech-icon"
            />
            {{ tech.name }}
          </span>
        </div>
      </div>

      <!-- Build and DevOps -->
      <div class="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 md:col-span-2">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Build and DevOps</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in skillSets.build_and_devops"
            :key="tech.name"
            :class="[
              'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
              tech.color
            ]"
            :style="{
              animationDelay: `${tech.name.length * 0.1}s`
            }"
          >
            <Icon 
              :icon="tech.icon"
              class="w-4 h-4 tech-icon"
            />
            {{ tech.name }}
          </span>
        </div>
      </div>

      <!-- Version Control -->
      <div class="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Version Control</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in skillSets.version_control"
            :key="tech.name"
            :class="[
              'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
              tech.color
            ]"
            :style="{
              animationDelay: `${tech.name.length * 0.1}s`
            }"
          >
            <Icon 
              :icon="tech.icon"
              class="w-4 h-4 tech-icon"
            />
            {{ tech.name }}
          </span>
        </div>
      </div>

      <!-- Optimization and Performance -->
      <div class="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Optimization and Performance</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in skillSets.optimization_and_performance"
            :key="tech.name"
            :class="[
              'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
              tech.color
            ]"
            :style="{
              animationDelay: `${tech.name.length * 0.1}s`
            }"
          >
            <Icon 
              :icon="tech.icon"
              class="w-4 h-4 tech-icon"
            />
            {{ tech.name }}
          </span>
        </div>
      </div>

      <!-- Development Tools -->
      <div class="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Development Tools</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tech in skillSets.development_tools"
            :key="tech.name"
            :class="[
              'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
              tech.color
            ]"
            :style="{
              animationDelay: `${tech.name.length * 0.1}s`
            }"
          >
            <Icon 
              :icon="tech.icon"
              class="w-4 h-4 tech-icon"
            />
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { Icon } from '@iconify/vue'

const skillSets = shallowRef({
  core_technologies: [
    {
      name: 'JavaScript',
      icon: 'logos:javascript',
      color: 'bg-yellow-100/90 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-300'
    },
    {
      name: 'TypeScript',
      icon: 'logos:typescript-icon',
      color: 'bg-blue-100/90 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300'
    }
  ],
  frontend_frameworks: [
    {
      name: 'Vue.js',
      icon: 'logos:vue',
      color: 'bg-emerald-100/90 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300'
    },
    {
      name: 'React',
      icon: 'logos:react',
      color: 'bg-sky-100/90 text-sky-900 dark:bg-sky-900/30 dark:text-sky-300'
    },
    {
      name: 'Next.js',
      icon: 'simple-icons:nextdotjs',
      color: 'bg-indigo-100/90 text-indigo-900 dark:bg-indigo-800/50 dark:text-indigo-200'
    },
    {
      name: 'Svelte',
      icon: 'logos:svelte-icon',
      color: 'bg-orange-100/90 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300'
    },
    {
      name: 'SvelteKit',
      icon: 'logos:svelte-icon',
      color: 'bg-orange-100/90 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300'
    }
  ],
  styling_and_ui: [
    {
      name: 'HTML5',
      icon: 'logos:html-5',
      color: 'bg-orange-100/90 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300'
    },
    {
      name: 'CSS3',
      icon: 'logos:css-3',
      color: 'bg-blue-100/90 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300'
    },
    {
      name: 'SCSS',
      icon: 'logos:sass',
      color: 'bg-pink-100/90 text-pink-900 dark:bg-pink-900/30 dark:text-pink-300'
    },
    {
      name: 'Tailwind',
      icon: 'logos:tailwindcss-icon',
      color: 'bg-cyan-100/90 text-cyan-900 dark:bg-cyan-900/30 dark:text-cyan-300'
    },
    {
      name: 'PrimeVue',
      icon: 'logos:vue',
      color: 'bg-green-100/90 text-green-900 dark:bg-green-900/30 dark:text-green-300'
    },
    {
      name: 'Vuetify',
      icon: 'simple-icons:vuetify',
      color: 'bg-blue-100/90 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300'
    }
  ],
  design_and_prototyping: [
    {
      name: 'Figma',
      icon: 'logos:figma',
      color: 'bg-purple-100/90 text-purple-900 dark:bg-purple-900/30 dark:text-purple-300'
    }
  ],
  state_management: [
    {
      name: 'Redux',
      icon: 'logos:redux',
      color: 'bg-purple-100/90 text-purple-900 dark:bg-purple-900/30 dark:text-purple-300'
    },
    {
      name: 'Pinia',
      icon: 'logos:pinia',
      color: 'bg-yellow-100/90 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-300'
    },
    {
      name: 'Vuex',
      icon: 'logos:vue',
      color: 'bg-emerald-100/90 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300'
    }
  ],
  testing: [
    {
      name: 'Playwright',
      icon: 'logos:playwright',
      color: 'bg-red-100/90 text-red-900 dark:bg-red-900/30 dark:text-red-300'
    },
    {
      name: 'Cypress',
      icon: 'simple-icons:cypress',
      color: 'bg-emerald-100/90 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300'
    },
    {
      name: 'Vitest',
      icon: 'logos:vitest',
      color: 'bg-emerald-100/90 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300'
    },
    {
      name: 'Jest',
      icon: 'logos:jest',
      color: 'bg-red-100/90 text-red-900 dark:bg-red-900/30 dark:text-red-300'
    },
    {
      name: 'Testing Library',
      icon: 'simple-icons:testinglibrary',
      color: 'bg-red-100/90 text-red-900 dark:bg-red-900/30 dark:text-red-300'
    },
    {
      name: 'Mock Service Worker',
      icon: 'carbon:api',
      color: 'bg-indigo-100/90 text-indigo-900 dark:bg-indigo-800/50 dark:text-indigo-200'
    }
  ],
  build_and_devops: [
    {
      name: 'Vite',
      icon: 'logos:vitejs',
      color: 'bg-purple-100/90 text-purple-900 dark:bg-purple-900/30 dark:text-purple-300'
    },
    {
      name: 'Webpack',
      icon: 'logos:webpack',
      color: 'bg-blue-100/90 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300'
    },
    {
      name: 'Docker',
      icon: 'logos:docker-icon',
      color: 'bg-sky-100/90 text-sky-900 dark:bg-sky-900/30 dark:text-sky-300'
    },
    {
      name: 'Docker Compose',
      icon: 'logos:docker-icon',
      color: 'bg-cyan-100/90 text-cyan-900 dark:bg-cyan-900/30 dark:text-cyan-300'
    },
    {
      name: 'Jenkins',
      icon: 'logos:jenkins',
      color: 'bg-blue-100/90 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300'
    }
  ],
  version_control: [
    {
      name: 'Git',
      icon: 'logos:git-icon',
      color: 'bg-orange-100/90 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300'
    },
    {
      name: 'GitHub',
      icon: 'mdi:github',
      color: 'bg-gray-100/90 text-gray-900 dark:bg-gray-800/50 dark:text-gray-300'
    },
    {
      name: 'Bitbucket',
      icon: 'logos:bitbucket',
      color: 'bg-blue-100/90 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300'
    }
  ],
  optimization_and_performance: [
    {
      name: 'Responsive Design',
      icon: 'mdi:responsive',
      color: 'bg-teal-100/90 text-teal-900 dark:bg-teal-900/30 dark:text-teal-300'
    },
    {
      name: 'Lazy Loading',
      icon: 'mdi:loading',
      color: 'bg-amber-100/90 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300'
    },
    {
      name: 'Code Splitting',
      icon: 'mdi:code-braces',
      color: 'bg-lime-100/90 text-lime-900 dark:bg-lime-900/30 dark:text-lime-300'
    },
    {
      name: 'Asset Minification',
      icon: 'mdi:package-variant-closed',
      color: 'bg-violet-100/90 text-violet-900 dark:bg-violet-900/30 dark:text-violet-300'
    },
    {
      name: 'Compression',
      icon: 'mdi:zip-box-outline',
      color: 'bg-fuchsia-100/90 text-fuchsia-900 dark:bg-fuchsia-900/30 dark:text-fuchsia-300'
    }
  ],
  development_tools: [
    {
      name: 'API Integrations',
      icon: 'carbon:api',
      color: 'bg-indigo-100/90 text-indigo-900 dark:bg-indigo-800/50 dark:text-indigo-200'
    },
    {
      name: 'Documentation',
      icon: 'mdi:file-document-outline',
      color: 'bg-amber-100/90 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300'
    }
  ]
})
</script>

<style scoped>
.tech-badge {
  animation: techFloat 6s ease-in-out infinite;
  will-change: transform;
  position: relative;
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-icon {
  transition: transform 0.3s ease;
}

.tech-badge:hover .tech-icon {
  transform: rotate(10deg) scale(1.2);
}

@keyframes techFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-4px) rotate(-1deg);
  }
  50% {
    transform: translateY(-6px) rotate(1deg);
  }
  75% {
    transform: translateY(-2px) rotate(0deg);
  }
}

.tech-badge:hover {
  box-shadow: 
    0 8px 20px rgba(88, 156, 255, 0.15),
    0 4px 12px rgba(242, 87, 255, 0.1);
  transform: translateY(-4px) scale(1.05);
}

@keyframes techEntrance {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tech-badge {
  animation: techEntrance 0.6s ease-out backwards,
             techFloat 6s ease-in-out infinite 0.6s;
}
</style> 