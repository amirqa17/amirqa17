<template>
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <div>
      <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
      <input
        v-model="form.name"
        type="text"
        class="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
      <input
        v-model="form.email"
        type="email"
        class="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
      <textarea
        v-model="form.message"
        class="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
        rows="4"
      ></textarea>
    </div>
    <button
      type="submit"
      class="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
    >
      Send Message
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  // Handle form submission
  console.log(form.value)
  await nextTick()
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script> 