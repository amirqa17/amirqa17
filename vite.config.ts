import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
        vapor: true
      }
    }),
    visualizer()
  ],
  // Add SSR configuration if needed
  ssr: {
    noExternal: ['@iconify/vue']
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', '@iconify/vue'],
          'icons': ['@iconify/vue']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['vue', '@iconify/vue']
  }
}) 