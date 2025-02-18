import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
        vapor: true  // Enable Vapor mode
      }
    }),
    tailwindcss(),
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
});
