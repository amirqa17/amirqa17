<template>
  <main class="pt-32 pb-20 px-6">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-zinc-900 dark:text-white mb-8">
        About Me
      </h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Bio Section -->
        <div class="space-y-6">
          <p class="text-lg text-zinc-600 dark:text-zinc-300">
            Hi, I'm Amir! I'm a passionate Front-End Developer with 4+ years of experience 
            building modern web applications.
          </p>
          
          <p class="text-zinc-600 dark:text-zinc-300">
            I specialize in Vue.js and React ecosystems, with a strong focus on creating 
            performant and user-friendly interfaces. My journey in web development started...
            <!-- Add your story -->
          </p>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-zinc-900 dark:text-white">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </div>

        <!-- Skills/Info Section -->
        <div class="space-y-8">
          <div class="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <!-- Move your technologies list here -->
          </div>

          <div class="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              Experience
            </h3>
            <!-- Add your experience -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'
</script> 