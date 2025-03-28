<template>
  <main class="pt-32 pb-20 px-6">
    <!-- Animated background -->
    <div class="fixed inset-0 overflow-hidden z-0 opacity-[0.03] dark:opacity-[0.05]">
      <pre class="coding-animation font-mono text-sm">
        <code>
          const app = createApp({
            setup() {
              const count = ref(0)
              const increment = () => count.value++
              
              onMounted(() => {
                console.log('Component mounted')
              })
              
              return {
                count,
                increment
              }
            }
          })
          
          app.mount('#app')
          
          // Vue Component
          const HelloWorld = {
            template: `
              <div class="hello">
                <h1>{{ msg }}</h1>
              </div>
            `,
            props: {
              msg: String
            }
          }
        </code>
      </pre>
    </div>

    <div class="container mx-auto relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Hero Section -->
        <div class="mb-16 text-center">
          <h1 class="text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            About Me
          </h1>
          <p class="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Frontend Engineer crafting intuitive and performant web experiences
          </p>
        </div>

        <!-- Bio Section -->
        <div class="space-y-12 mb-16">
          <!-- Background Card -->
          <div class="bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <div class="space-y-8">
              <!-- Overview Section -->
              <div>
                <div class="flex items-center gap-3 mb-6">
                  <Icon icon="ph:user-circle-bold" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 class="text-2xl font-semibold text-zinc-900 dark:text-white">Background</h2>
                </div>
                <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  I'm a Frontend Engineer with over 4 years of experience in crafting web applications. 
                  My journey in web development is driven by a deep passion for creating intuitive user 
                  interfaces and building complex, scalable applications. I specialize in modern JavaScript 
                  frameworks, with expertise in Vue.js, React, and Svelte, focusing on delivering 
                  high-performance, responsive web solutions.
                </p>
              </div>

              <!-- Approach -->
              <div>
                <div class="flex items-center gap-3 mb-6">
                  <Icon icon="ph:lightbulb-bold" class="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  <h3 class="text-xl font-semibold text-zinc-900 dark:text-white">My Approach</h3>
                </div>
                <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Throughout my career, I've had the opportunity to work on diverse projects across different 
                  industries, from e-commerce platforms to content management systems. I take pride in writing 
                  clean, maintainable code and staying up-to-date with the latest web technologies and best practices. 
                  My multilingual background has been invaluable in collaborating with international teams and 
                  understanding diverse user needs.
                </p>
              </div>
            </div>
          </div>

          <!-- Skills Section -->
          <div id="skills" class="space-y-6">
            <SkillsSection />
          </div>

          <!-- Contact Section -->
          <div id="contact" class="scroll-mt-32 space-y-6">
            <div class="bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div class="flex items-center gap-3 mb-6">
                <Icon icon="ph:envelope-bold" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 class="text-2xl font-semibold text-zinc-900 dark:text-white">Get in Touch</h2>
              </div>
              <!-- Social Links -->
              <div class="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/amirqa17" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg
                  text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white 
                  transition-all duration-200 hover:scale-105 hover:shadow-lg group
                  border border-zinc-200 dark:border-zinc-700"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  <span class="font-medium">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/amiribraimov/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg
                  text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white 
                  transition-all duration-200 hover:scale-105 hover:shadow-lg group
                  border border-zinc-200 dark:border-zinc-700"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span class="font-medium">LinkedIn</span>
                </a>
                <a 
                  href="mailto:ibraimov.amir1996@gmail.com"
                  class="flex items-center gap-3 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg
                  text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white 
                  transition-all duration-200 hover:scale-105 hover:shadow-lg group
                  border border-zinc-200 dark:border-zinc-700"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span class="font-medium">Email</span>
                </a>
                <a 
                  href="https://discord.com/users/amiracle2157"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg
                  text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white 
                  transition-all duration-200 hover:scale-105 hover:shadow-lg group
                  border border-zinc-200 dark:border-zinc-700"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <span class="font-medium">Discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import SkillsSection from '../components/SkillsSection.vue'
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

@keyframes codeScroll {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}

.coding-animation {
  animation: codeScroll 20s linear infinite;
  white-space: pre;
  line-height: 1.5;
}

.coding-animation code {
  display: block;
  color: currentColor;
}
</style> 