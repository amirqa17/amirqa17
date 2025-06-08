<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useWindowSize } from '@vueuse/core'

const container = ref<HTMLElement | null>(null)
const { width } = useWindowSize()
const isLoading = ref(true)
const hasError = ref(false)
const loadingProgress = ref(0)
const isUserInteracting = ref(false)
const autoSpinTimeout = ref<number | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let tower: THREE.Group
let towerGroup: THREE.Group
let animationFrameId: number
let isDragging = false
let previousMousePosition = { x: 0, y: 0 }
let previousTouchPosition = { x: 0, y: 0 }

const handleMouseDown = (event: MouseEvent) => {
  isDragging = true
  previousMousePosition = {
    x: event.clientX,
    y: event.clientY
  }
  isUserInteracting.value = true
  if (autoSpinTimeout.value) {
    clearTimeout(autoSpinTimeout.value)
    autoSpinTimeout.value = null
  }
}

const handleTouchStart = (event: TouchEvent) => {
  if (event.touches.length === 1) {
    isDragging = true
    previousTouchPosition = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    }
    isUserInteracting.value = true
    if (autoSpinTimeout.value) {
      clearTimeout(autoSpinTimeout.value)
      autoSpinTimeout.value = null
    }
  }
}

const handleMouseMove = (event: MouseEvent) => {
  if (!isDragging || !towerGroup) return

  const deltaMove = {
    x: event.clientX - previousMousePosition.x,
    y: event.clientY - previousMousePosition.y
  }

  towerGroup.rotation.y += deltaMove.x * 0.01

  previousMousePosition = {
    x: event.clientX,
    y: event.clientY
  }
}

const handleTouchMove = (event: TouchEvent) => {
  if (!isDragging || !towerGroup || event.touches.length !== 1) return

  const deltaMove = {
    x: event.touches[0].clientX - previousTouchPosition.x,
    y: event.touches[0].clientY - previousTouchPosition.y
  }

  towerGroup.rotation.y += deltaMove.x * 0.01

  previousTouchPosition = {
    x: event.touches[0].clientX,
    y: event.touches[0].clientY
  }
}

const handleMouseUp = () => {
  isDragging = false
  isUserInteracting.value = false
  if (towerGroup) {
    towerGroup.rotation.y += 0.005 // Force immediate rotation
  }
}

const handleTouchEnd = () => {
  isDragging = false
  isUserInteracting.value = false
  if (towerGroup) {
    towerGroup.rotation.y += 0.005 // Force immediate rotation
  }
}

const init = () => {
  if (!container.value) return

  try {
    console.log('Initializing Three.js scene...')
    
    // Scene setup
    scene = new THREE.Scene()
    scene.background = null

    // Camera setup
    const aspect = container.value.clientWidth / container.value.clientHeight
    camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000)
    camera.position.set(0, 0, 3.5)
    camera.lookAt(0, 0, 0)

    // Renderer setup with enhanced quality
    renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'highp'
    })
    renderer.setSize(container.value.clientWidth, container.value.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.value.appendChild(renderer.domElement)

    // Create park environment
    const createPark = () => {
      const park = new THREE.Group()

      // Grass platform
      const grassGeometry = new THREE.CircleGeometry(1.6, 32)
      const grassMaterial = new THREE.MeshStandardMaterial({
        color: 0x7cff6b,
        roughness: 1.0,
        metalness: 0.0,
        flatShading: true
      })
      const grass = new THREE.Mesh(grassGeometry, grassMaterial)
      grass.rotation.x = -Math.PI / 2
      grass.position.y = -0.8
      grass.receiveShadow = true
      park.add(grass)

      // Trees (larger)
      const createTree = (x: number, z: number) => {
        const tree = new THREE.Group()

        // Tree trunk (larger)
        const trunkGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.2, 8)
        const trunkMaterial = new THREE.MeshStandardMaterial({
          color: 0x8b4513, // Cartoon brown
          roughness: 1.0,
          metalness: 0.0,
          flatShading: true
        })
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial)
        trunk.position.y = 0.1
        trunk.castShadow = true
        tree.add(trunk)

        // Sakura blossoms (larger)
        const createBlossoms = (y: number, scale: number) => {
          const blossomGeometry = new THREE.SphereGeometry(0.15 * scale, 8, 8)
          const blossomMaterial = new THREE.MeshStandardMaterial({
            color: 0xffc0cb, // More pink sakura color
            roughness: 0.5,
            metalness: 0.0,
            transparent: true,
            opacity: 0.9,
            flatShading: true
          })
          const blossoms = new THREE.Mesh(blossomGeometry, blossomMaterial)
          blossoms.position.y = y
          blossoms.castShadow = true
          return blossoms
        }

        // Add multiple layers of blossoms for a fuller sakura tree
        tree.add(createBlossoms(0.3, 1.0))  // Main blossom cluster
        tree.add(createBlossoms(0.35, 0.8)) // Upper layer
        tree.add(createBlossoms(0.25, 0.7)) // Lower layer

        // Add some scattered blossoms
        for (let i = 0; i < 5; i++) {
          const angle = (i / 5) * Math.PI * 2
          const radius = 0.08
          const blossom = createBlossoms(0.3, 0.3)
          blossom.position.x = Math.cos(angle) * radius
          blossom.position.z = Math.sin(angle) * radius
          tree.add(blossom)
        }

        tree.position.set(x, -0.8, z)
        return tree
      }

      // Add trees around the tower (further away)
      const treePositions = [
        [-1.0, -1.0], [1.0, -1.0], [-1.0, 1.0], [1.0, 1.0],
        [-1.2, 0], [1.2, 0], [0, -1.2], [0, 1.2]
      ]

      treePositions.forEach(([x, z]) => {
        park.add(createTree(x, z))
      })

      return park
    }

    // Create a group to hold both the tower and park
    towerGroup = new THREE.Group()
    scene.add(towerGroup)

    // Add park to the group
    const park = createPark()
    towerGroup.add(park)

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)
    
    // Main point light with warm color
    const pointLight = new THREE.PointLight(0xffd700, 2.0)
    pointLight.position.set(2, 2, 2)
    pointLight.castShadow = true
    scene.add(pointLight)

    // Secondary point light with cool color
    const pointLight2 = new THREE.PointLight(0x4169e1, 1.5)
    pointLight2.position.set(-2, 1, -2)
    pointLight2.castShadow = true
    scene.add(pointLight2)

    // Create a simple tower as fallback with enhanced materials
    const createSimpleTower = () => {
      const group = new THREE.Group()
      
      // Main structure with PBR material (red)
      const geometry = new THREE.CylinderGeometry(0.1, 0.2, 1.5, 8)
      const material = new THREE.MeshStandardMaterial({ 
        color: 0xff0000,
        metalness: 0.6,
        roughness: 0.2,
        envMapIntensity: 1.5
      })
      const mainTower = new THREE.Mesh(geometry, material)
      mainTower.castShadow = true
      mainTower.receiveShadow = true
      group.add(mainTower)

      // Observation deck with PBR material (white)
      const deckGeometry = new THREE.BoxGeometry(0.3, 0.1, 0.3)
      const deckMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xffffff,
        metalness: 0.7,
        roughness: 0.1,
        envMapIntensity: 1.5
      })
      const deck = new THREE.Mesh(deckGeometry, deckMaterial)
      deck.position.y = 0.7
      deck.castShadow = true
      deck.receiveShadow = true
      group.add(deck)

      return group
    }

    // Load the model
    const loadModel = async () => {
      try {
        const loader = new GLTFLoader()
        
        await new Promise((resolve, reject) => {
          loader.load(
            '/models/Tokyo_Tower.glb',
            (gltf) => {
              console.log('Model loaded successfully')
              tower = gltf.scene
              
              // Keep the base platform but remove any other ground meshes
              tower.traverse((node) => {
                if (node instanceof THREE.Mesh) {
                  // Check if this is a ground/platform mesh
                  const geometry = node.geometry
                  if (geometry instanceof THREE.BufferGeometry) {
                    const position = geometry.attributes.position
                    if (position) {
                      const yValues: number[] = []
                      for (let i = 0; i < position.count; i++) {
                        yValues.push(position.getY(i))
                      }
                      // Only hide meshes that are completely flat and not the main base
                      if (yValues.every(y => Math.abs(y) < 0.1) && 
                          !node.name.toLowerCase().includes('base') &&
                          !node.name.toLowerCase().includes('platform')) {
                        node.visible = false
                      }
                    }
                  }

                  // Enhance materials for all meshes with cartoon style
                  if (node.material) {
                    const materials = Array.isArray(node.material) ? node.material : [node.material]
                    materials.forEach(mat => {
                      if (mat instanceof THREE.MeshStandardMaterial) {
                        mat.flatShading = true
                        mat.metalness = 0.0
                        mat.roughness = 1.0
                        
                        // Adjust colors based on mesh name or position
                        if (mat.color) {
                          const color = new THREE.Color(mat.color)
                          // Check if this is a red section
                          if (color.r > 0.5 && color.g < 0.3 && color.b < 0.3) {
                            color.r = 1.0
                            color.g = 0.2
                            color.b = 0.2
                            mat.color = color
                            mat.emissive = new THREE.Color(0xff0000).multiplyScalar(0.3)
                          }
                          // Check if this is a white section
                          else if (color.r > 0.8 && color.g > 0.8 && color.b > 0.8) {
                            color.r = 1.0
                            color.g = 1.0
                            color.b = 1.0
                            mat.color = color
                            mat.emissive = new THREE.Color(0xffffff).multiplyScalar(0.4)
                          }
                        }
                      }
                    })
                  }

                  // Enable shadows
                  node.castShadow = true
                  node.receiveShadow = true
                }
              })
              
              // Scale and position the model
              const box = new THREE.Box3().setFromObject(tower)
              const size = box.getSize(new THREE.Vector3())
              const maxDim = Math.max(size.x, size.y, size.z)
              const scale = 40.0 / maxDim
              tower.scale.set(scale, scale, scale)
              
              // Center the model
              const center = box.getCenter(new THREE.Vector3())
              tower.position.x = -center.x * scale
              tower.position.y = -center.y * scale
              tower.position.z = -center.z * scale
              
              // Add tower to the group
              towerGroup.add(tower)
              isLoading.value = false
              resolve(true)
            },
            (xhr) => {
              loadingProgress.value = (xhr.loaded / xhr.total) * 100
              console.log(`Loading: ${loadingProgress.value.toFixed(1)}%`)
            },
            (error) => {
              console.error('Error loading model:', error)
              reject(error)
            }
          )
        })
      } catch (error) {
        console.error('Error in loadModel:', error)
        tower = createSimpleTower()
        towerGroup.add(tower)
        hasError.value = true
        isLoading.value = false
      }
    }

    // Start loading the model
    loadModel()

    // Initial render
    renderer.render(scene, camera)
  } catch (error) {
    console.error('Error in init:', error)
    hasError.value = true
    isLoading.value = false
  }
}

const animate = () => {
  try {
    if (towerGroup && !isUserInteracting.value) {
      towerGroup.rotation.y += 0.005
    }
    
    if (renderer && scene && camera) {
      renderer.render(scene, camera)
    }
    
    animationFrameId = requestAnimationFrame(animate)
  } catch (error) {
    console.error('Error in animation:', error)
  }
}

const handleResize = () => {
  if (!container.value || !camera || !renderer) return
  
  try {
    const width = container.value.clientWidth
    const height = container.value.clientHeight
    
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  } catch (error) {
    console.error('Error in resize:', error)
  }
}

onMounted(() => {
  console.log('Component mounted')
  init()
  animate()
  window.addEventListener('resize', handleResize)
  
  // Add mouse and touch event listeners
  if (container.value) {
    container.value.addEventListener('mousedown', handleMouseDown)
    container.value.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleTouchEnd)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('touchmove', handleTouchMove)
  window.removeEventListener('mouseup', handleMouseUp)
  window.removeEventListener('touchend', handleTouchEnd)
  if (container.value) {
    container.value.removeEventListener('mousedown', handleMouseDown)
    container.value.removeEventListener('touchstart', handleTouchStart)
  }
  if (autoSpinTimeout.value) {
    clearTimeout(autoSpinTimeout.value)
  }
  cancelAnimationFrame(animationFrameId)
  
  if (container.value && renderer) {
    container.value.removeChild(renderer.domElement)
  }
  
  if (scene) {
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose())
        } else {
          object.material.dispose()
        }
      }
    })
  }
  
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<template>
  <div 
    ref="container" 
    class="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
  >
    <!-- Loading state -->
    <div v-if="isLoading" class="absolute inset-0 flex flex-col items-center justify-center text-pink-500">
      <div class="text-xl mb-2">Loading...</div>
      <div class="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          class="h-full bg-pink-500 transition-all duration-300"
          :style="{ width: `${loadingProgress}%` }"
        ></div>
      </div>
    </div>
    
    <!-- Error state -->
    <div v-else-if="hasError" class="absolute inset-0 flex items-center justify-center text-pink-500 text-3xl md:text-4xl">
      🗼
    </div>
  </div>
</template>

<style scoped>
/* Remove any background color from the container */
div[ref="container"] {
  background: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 