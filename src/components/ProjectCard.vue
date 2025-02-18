<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'

interface Technology {
  name: string
  icon: string
  color: string
}

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
}

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  'image-loaded': []
}>()

const imageLoaded = ref(false)
const imageRef = ref<HTMLImageElement | null>(null)

onMounted(() => {
  if (imageRef.value?.complete) {
    imageLoaded.value = true
  }
})

const handleImageLoad = () => {
  emit('image-loaded')
}
</script>

<template>
  <div class="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg ring-1 ring-zinc-200 dark:ring-zinc-700 hover:scale-105 transition-transform duration-300 will-change-transform">
    <img
      :src="project.image"
      :alt="project.title"
      loading="lazy"
      decoding="async"
      fetchpriority="low"
      width="400"
      height="300"
      ref="imageRef"
      :class="{ 'opacity-0': !imageLoaded }"
      @load="handleImageLoad"
      class="w-full h-48 object-cover transition-opacity duration-300"
    />
    <div v-if="!imageLoaded" class="animate-pulse bg-gray-200 dark:bg-gray-700 h-48" />
    <div class="p-6">
      <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">{{ project.title }}</h3>
      <p class="text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-2">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 0 20px rgba(88, 156, 255, 0.1),
    0 0 40px rgba(242, 87, 255, 0.05);
}

/* Add glow container */
.project-card::before {
  content: '';
  position: absolute;
  inset: -20px;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(88, 156, 255, 0.15) 0%,
    rgba(242, 87, 255, 0.1) 40%,
    transparent 70%
  );
  filter: blur(20px);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::before {
  opacity: 1;
}

/* Dark mode styles */
:deep(.dark) .project-card {
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(100, 255, 218, 0.1),
    0 0 40px rgba(100, 255, 218, 0.05);
}

:deep(.dark) .project-card::before {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(100, 255, 218, 0.15) 0%,
    rgba(100, 255, 218, 0.05) 40%,
    transparent 70%
  );
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.15),
    0 0 30px rgba(88, 156, 255, 0.2),
    0 0 50px rgba(242, 87, 255, 0.1);
}

:deep(.dark) .project-card:hover {
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(100, 255, 218, 0.2),
    0 0 50px rgba(100, 255, 218, 0.1);
}
</style> 