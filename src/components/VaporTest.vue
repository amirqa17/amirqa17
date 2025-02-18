<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++

// Add performance test
const testVapor = () => {
  console.time('vapor-test')
  for(let i = 0; i < 1000; i++) {
    count.value++
  }
  console.timeEnd('vapor-test')
}
</script>

<template>
  <div class="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
    <h3 class="text-lg font-bold mb-2">Vapor Mode Test</h3>
    <p>Count: {{ count }}</p>
    <button 
      @click="increment"
      class="px-4 py-2 bg-zinc-800 dark:bg-zinc-700 text-white rounded-lg mt-2"
    >
      Increment
    </button>
    <button 
      @click="testVapor"
      class="px-4 py-2 bg-zinc-800 dark:bg-zinc-700 text-white rounded-lg mt-2 ml-2"
    >
      Test Vapor
    </button>
  </div>
</template> 