import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.glb', '**/*.gltf'], // Add support for 3D model files
  build: {
    assetsInlineLimit: 0 // Ensure GLB files are not inlined
  }
}) 