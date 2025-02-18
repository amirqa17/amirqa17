<template>
  <section id="projects" class="py-20 bg-zinc-100 dark:bg-zinc-800/50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-12" v-once>
        <h2 class="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Featured Projects</h2>
        <p class="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          A selection of my recent work across different domains and technologies.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- E-commerce Project -->
        <div class="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6
          hover:shadow-lg transition-all duration-300 group
          hover:shadow-[0_0_30px_rgba(88,156,255,0.1)]
          dark:hover:shadow-[0_0_30px_rgba(242,87,255,0.15)]
          hover:border-blue-500/20 dark:hover:border-purple-400/20
          border border-transparent">
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2
            group-hover:text-blue-600 dark:group-hover:text-purple-400
            transition-colors duration-300">
            E-Commerce Platform
          </h3>
          <p class="text-zinc-600 dark:text-zinc-300 mb-4">
            Full-featured e-commerce platform with Firebase integration, FreedomPay API, 
            and email notifications. Includes review system and serverless architecture.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-sm bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 rounded">Next.js</span>
            <span class="px-2 py-1 text-sm bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 rounded">Tailwind</span>
            <span class="px-2 py-1 text-sm bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 rounded">Firebase</span>
          </div>
          <a 
            href="https://github.com/amirqa17/nextjs-e-commerce"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center mt-4 text-sm text-zinc-600 
            group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-purple-400
            transition-colors duration-300"
          >
            View on GitHub →
          </a>
        </div>

        <!-- Contentful Blog Project -->
        <div class="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6
          hover:shadow-lg transition-all duration-300 group
          hover:shadow-[0_0_30px_rgba(88,156,255,0.1)]
          dark:hover:shadow-[0_0_30px_rgba(242,87,255,0.15)]
          hover:border-blue-500/20 dark:hover:border-purple-400/20
          border border-transparent">
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2
            group-hover:text-blue-600 dark:group-hover:text-purple-400
            transition-colors duration-300">
            Contentful Blog with i18n
          </h3>
          <p class="text-zinc-600 dark:text-zinc-300 mb-4">
            Dynamic blog with full internationalization, integrating Contentful CMS. 
            Features multilingual content management and localized user experience.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-sm bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 rounded">Next.js</span>
            <span class="px-2 py-1 text-sm bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 rounded">Tailwind</span>
            <span class="px-2 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded">Contentful</span>
          </div>
          <a 
            href="https://github.com/amirqa17/i18-n-internatonalized-contentful-"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center mt-4 text-sm text-zinc-600 
            group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-purple-400
            transition-colors duration-300"
          >
            View on GitHub →
          </a>
        </div>

        <!-- AKKY LTD Project -->
        <div class="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6
          hover:shadow-lg transition-all duration-300 group
          hover:shadow-[0_0_30px_rgba(88,156,255,0.1)]
          dark:hover:shadow-[0_0_30px_rgba(242,87,255,0.15)]
          hover:border-blue-500/20 dark:hover:border-purple-400/20
          border border-transparent">
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2
            group-hover:text-blue-600 dark:group-hover:text-purple-400
            transition-colors duration-300">
            Office Paper Manufacturing Company
          </h3>
          <p class="text-zinc-600 dark:text-zinc-300 mb-4">
            Corporate website for a leading A4 office paper manufacturer. Features multilingual
            support, dynamic news feed, and emphasis on sustainable paper production practices.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-sm bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 rounded">React</span>
            <span class="px-2 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded">Material UI</span>
            <span class="px-2 py-1 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded">i18n</span>
          </div>
        </div>

        <!-- Event Planning Platform -->
        <div class="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6
          hover:shadow-lg transition-all duration-300 group
          hover:shadow-[0_0_30px_rgba(88,156,255,0.1)]
          dark:hover:shadow-[0_0_30px_rgba(242,87,255,0.15)]
          hover:border-blue-500/20 dark:hover:border-purple-400/20
          border border-transparent">
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2
            group-hover:text-blue-600 dark:group-hover:text-purple-400
            transition-colors duration-300">
            Nvidia Stock Tracker
          </h3>
          <p class="text-zinc-600 dark:text-zinc-300 mb-4">
            Stock tracking application for Nvidia (NVDA) that provides price monitoring and basic technical 
            analysis. Features include real-time price updates, historical data charts, and simple buy/sell 
            indicators. Built with Vue.js and financial market APIs.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-sm bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 rounded">Vue.js</span>
            <span class="px-2 py-1 text-sm bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 rounded">Tailwind</span>
            <span class="px-2 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded">Chart.js</span>
            <span class="px-2 py-1 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded">Financial APIs</span>
          </div>
          <a 
            href="https://github.com/amirqa17/nvidia-stock-tracker"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center mt-4 text-sm text-zinc-600 
            group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-purple-400
            transition-colors duration-300"
          >
            View on GitHub →
          </a>
        </div>

        <!-- Online Pharmacy Platform -->
        <div class="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6
          hover:shadow-lg transition-all duration-300 group
          hover:shadow-[0_0_30px_rgba(88,156,255,0.1)]
          dark:hover:shadow-[0_0_30px_rgba(242,87,255,0.15)]
          hover:border-blue-500/20 dark:hover:border-purple-400/20
          border border-transparent">
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2
            group-hover:text-blue-600 dark:group-hover:text-purple-400
            transition-colors duration-300">
            Online Pharmacy Platform
          </h3>
          <p class="text-zinc-600 dark:text-zinc-300 mb-4">
            International pharmaceutical e-commerce platform with real-time shipping quotes,
            PayBox payment integration, and Contentful CMS for product management.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-sm bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 rounded">Next.js</span>
            <span class="px-2 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded">PayBox API</span>
            <span class="px-2 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded">Contentful</span>
            <span class="px-2 py-1 text-sm bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 rounded">Tailwind</span>
          </div>
          <a 
            href="https://github.com/altaysorbent/website"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center mt-4 text-sm text-zinc-600 
            group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-purple-400
            transition-colors duration-300"
          >
            View on GitHub →
          </a>
        </div>

        <!-- Portfolio Website -->
        <div class="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6
          hover:shadow-lg transition-all duration-300 group
          hover:shadow-[0_0_30px_rgba(88,156,255,0.1)]
          dark:hover:shadow-[0_0_30px_rgba(242,87,255,0.15)]
          hover:border-blue-500/20 dark:hover:border-purple-400/20
          border border-transparent">
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-white mb-2
            group-hover:text-blue-600 dark:group-hover:text-purple-400
            transition-colors duration-300">
            Portfolio Website
          </h3>
          <p class="text-zinc-600 dark:text-zinc-300 mb-4">
            Clean and responsive portfolio website built with Next.js and TailwindCSS,
            featuring project showcases and semantic HTML structure.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 text-sm bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 rounded">Next.js</span>
            <span class="px-2 py-1 text-sm bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 rounded">Tailwind</span>
          </div>
          <a 
            href="https://github.com/amirqa17/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center mt-4 text-sm text-zinc-600 
            group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-purple-400
            transition-colors duration-300"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, shallowRef } from 'vue'
import ProjectCard from './ProjectCard.vue'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: 'Frontend' | 'Full Stack' | 'UI/UX'
  demoUrl: string
  githubUrl: string
}

const selectedCategory = ref<string>('all')

const projects = shallowRef<Project[]>([
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Vue 3 and Tailwind CSS',
    image: new URL('../assets/projects/ecommerce.jpg', import.meta.url).href,
    tags: ['Vue', 'Tailwind', 'TypeScript'],
    category: 'Full Stack',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Enterprise task management system with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60',
    tags: ['Vue', 'Firebase', 'DnD'],
    category: 'Frontend',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Interactive weather visualization with location-based forecasts and historical data analysis.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60',
    tags: ['API', 'Charts', 'Animations'],
    category: 'Frontend',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Data-driven social media analytics platform with customizable dashboards and reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    tags: ['Analytics', 'Vue', 'D3.js'],
    category: 'Full Stack',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'AI Chat Interface',
    description: 'Modern chat application with AI integration, real-time messaging, and voice commands.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    tags: ['AI', 'WebSocket', 'Vue'],
    category: 'Frontend',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Nvidia Stock Tracker',
    description: 'Real-time stock tracking application for Nvidia (NVDA) built with Vue.js and Tailwind CSS. Features live price updates, historical data visualization, and technical indicators using financial APIs.',
    image: '/projects/nvidia-tracker.jpg',
    tags: ['Vue.js', 'Tailwind CSS', 'Financial APIs', 'Chart.js'],
    category: 'Frontend',
    demoUrl: 'https://nvidia-stock-tracker.vercel.app',
    githubUrl: 'https://github.com/amirqa17/nvidia-stock-tracker'
  }
])

const categories = ['all', 'Frontend', 'Full Stack', 'UI/UX']

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return projects.value
  return projects.value.filter(project => project.category === selectedCategory.value)
})
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

/* Remove all other animation styles */
</style> 