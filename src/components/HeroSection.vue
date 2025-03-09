<script setup lang="ts">
import { shallowRef } from 'vue'
import { Icon } from '@iconify/vue'

const technologies = shallowRef({
  frameworks: [
    {
      name: 'Vue.js',
      icon: 'logos:vue',
      color: 'bg-emerald-100/90 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300'
    },
    {
      name: 'React',
      icon: 'logos:react',
      color: 'bg-sky-100/90 text-sky-900 dark:bg-sky-900/30 dark:text-sky-300'
    },
    {
      name: 'Svelte',
      icon: 'logos:svelte-icon',
      color: 'bg-orange-100/90 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300'
    }
  ],
  languages: [
    {
      name: 'TypeScript',
      icon: 'logos:typescript-icon',
      color: 'bg-blue-100/90 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300'
    },
    {
      name: 'JavaScript',
      icon: 'logos:javascript',
      color: 'bg-yellow-100/90 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-300'
    }
  ],
  styling: [
    {
      name: 'Tailwind',
      icon: 'logos:tailwindcss-icon',
      color: 'bg-cyan-100/90 text-cyan-900 dark:bg-cyan-900/30 dark:text-cyan-300'
    }
  ],
  tools: [
    {
      name: 'Vitest',
      icon: 'logos:vitest',
      color: 'bg-emerald-100/90 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300'
    },
    {
      name: 'Vite',
      icon: 'logos:vitejs',
      color: 'bg-purple-100/90 text-purple-900 dark:bg-purple-900/30 dark:text-purple-300'
    }
  ]
})
</script>

<template>
  <section class="pt-32 pb-20 px-6 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 -z-10">
      <!-- Base background with pattern -->
      <div class="absolute inset-0 bg-gradient-to-br from-stone-50 via-zinc-100/90 to-neutral-100 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-800 
        [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] 
        dark:[background-image:radial-gradient(#1e293b_1px,transparent_1px)]"></div>
      
      <!-- Floating shapes -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-50/30 dark:bg-emerald-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-blob opacity-60"></div>
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-50/30 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-blob animation-delay-2000 opacity-60"></div>
      <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-rose-50/30 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-blob animation-delay-4000 opacity-60"></div>
    </div>

    <div class="container mx-auto relative">
      <div class="flex items-center justify-between">
        <!-- Left side content -->
        <div class="max-w-2xl">
          <h2 class="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Hi 👋, I'm Amir 
            <span class="block mt-2 text-4xl text-zinc-600 dark:text-zinc-300">
              A Frontend Engineer based in Tokyo
            </span>
          </h2>

          <div class="space-y-6">
            <p class="text-lg text-zinc-600 dark:text-zinc-300">
              With 4+ years of experience in frontend engineering, I enjoy creating responsive and 
              user-friendly web applications. I'm passionate about clean code, performance optimization, 
              and delivering great user experiences.
            </p>

            <div class="flex gap-4 pt-4">
              <router-link
                to="/about#contact"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 
                transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 
                dark:hover:shadow-purple-500/20 font-medium"
              >
                Get in touch
              </router-link>
              <router-link
                to="/#projects"
                class="px-6 py-3 bg-white text-blue-600 dark:bg-zinc-900 dark:text-purple-400 rounded-lg 
                hover:bg-blue-50 dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-105 
                hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 
                border border-blue-200 dark:border-purple-800 font-medium"
              >
                View projects
              </router-link>
            </div>

            <div class="flex flex-wrap gap-6">
              <div v-for="(techs, category) in technologies" :key="category" class="space-y-2">
                <h3 class="text-sm font-medium text-zinc-500 dark:text-zinc-400 capitalize">{{ category }}</h3>
                <div class="flex flex-wrap gap-3">
                  <span 
                    v-for="tech in techs"
                    :key="tech.name"
                    :class="[
                      'px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all hover:scale-105 hover:-translate-y-1 tech-badge',
                      tech.color
                    ]"
                    :style="{
                      animationDelay: `${tech.name.length * 0.1}s`
                    }"
                  >
                    <Icon 
                      :icon="tech.icon"
                      class="w-4 h-4 tech-icon"
                    />
                    {{ tech.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side animated laptop -->
        <div class="hidden lg:block relative w-[600px] h-[450px]">
          <div class="laptop">
            <div class="laptop-screen">
              <div class="macos-window">
                <!-- Window Controls -->
                <div class="window-header">
                  <div class="window-controls">
                    <span class="control close"></span>
                    <span class="control minimize"></span>
                    <span class="control maximize"></span>
                  </div>
                  <div class="window-title">terminal</div>
                </div>
                
                <!-- Terminal Content -->
                <div class="terminal-content">
                  <div class="prompt">
                    <span class="user">ibraimov.amir1996@gmail.com</span>
                    <span class="separator">:</span>
                    <span class="directory">~/portfolio</span>
                    <span class="symbol">$</span>
                  </div>
                  <div class="command-history">
                    <div class="command-line">
                      <span class="command">Profile</span>
                      <div class="output">
                        🌐  Languages  : Japanese (N3), English (Fluent), Russian (Native) <br/>
                        📍  Location   : Tokyo, Japan <br/>
                      </div>
                    </div>
                    <div class="command-line">
                      <div class="output">
                        Ready to collaborate ✨
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.laptop {
  position: relative;
  width: 550px;
  height: 340px;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform: rotateX(2deg) rotateY(-1deg) translateY(20px);
  animation: float 8s ease-in-out infinite;
}

.laptop-screen {
  position: relative;
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  border-radius: 12px;
  border: 2px solid #444;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(88, 156, 255, 0.3),
    0 0 60px rgba(242, 87, 255, 0.2);
  overflow: hidden;
  padding: 4px;
  animation: screenGlow 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.laptop-screen::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #333;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
}

.laptop-keyboard {
  position: absolute;
  width: 130%;
  height: 120px;
  left: -15%;
  bottom: -100px;
  background: linear-gradient(to bottom, #808080, #999);
  border-radius: 0 0 12px 12px;
  transform: rotateX(60deg);
  transform-origin: top;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(60, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1px;
  padding: 8px;
}

.laptop-keyboard::after {
  content: '';
  position: absolute;
  width: 30%;
  height: 4px;
  bottom: 10px;
  left: 35%;
  background: #666;
  border-radius: 2px;
}

.laptop-key {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.laptop-base {
  position: absolute;
  width: 130%;
  height: 8px;
  left: -15%;
  bottom: -8px;
  background: linear-gradient(to bottom, #999, #808080);
  border-radius: 0 0 12px 12px;
  transform: rotateX(-90deg);
  transform-origin: top;
}

.laptop-base::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
}

.laptop-trackpad {
  position: absolute;
  width: 40%;
  height: 30px;
  left: 30%;
  bottom: 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.laptop-code {
  padding: 20px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #e0e0e0;
  opacity: 0.9;
}

.code-block {
  animation: slideUp 20s linear infinite;
}

.code-line {
  white-space: nowrap;
  margin: 8px 0;
}

.indent {
  padding-left: 20px;
}

.code-comment {
  color: #888;
  font-style: italic;
}

.code-keyword {
  color: #f92672;
}

.code-variable {
  color: #a6e22e;
}

.code-operator {
  color: #d4d4d4;
}

.code-string {
  color: #e6db74;
}

.code-bracket {
  color: #d4d4d4;
}

.laptop-glow {
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: radial-gradient(
    circle at center,
    rgba(100, 255, 218, 0.15) 0%,
    transparent 70%
  );
  filter: blur(30px);
  animation: glow 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(-100%);
  }
}

@keyframes float {
  0%, 100% {
    transform: rotateX(2deg) rotateY(-1deg) translateY(20px);
  }
  50% {
    transform: rotateX(3deg) rotateY(1deg) translateY(10px);
  }
}

@keyframes glow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.laptop-keyboard::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at center, rgba(0,0,0,0.2) 0.5px, transparent 1px);
  background-size: 10px 10px;
  background-position: -5px -5px;
}

:deep(.dark) .laptop-screen {
  background: #000;
  border-color: #333;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(100, 255, 218, 0.3),
    0 0 80px rgba(100, 255, 218, 0.2);
  animation: rgbGlowDark 8s linear infinite;
}

@keyframes screenGlow {
  0% {
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(88, 156, 255, 0.2),
      0 0 40px rgba(242, 87, 255, 0.1);
  }
  50% {
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.3),
      0 0 80px rgba(88, 156, 255, 0.5),
      0 0 120px rgba(242, 87, 255, 0.4);
  }
  100% {
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(88, 156, 255, 0.2),
      0 0 40px rgba(242, 87, 255, 0.1);
  }
}

@keyframes rgbGlowDark {
  0% {
    box-shadow: 
      0 0 40px rgba(255, 0, 0, 0.6),
      0 0 80px rgba(255, 0, 0, 0.3);
  }
  33% {
    box-shadow: 
      0 0 40px rgba(0, 255, 0, 0.6),
      0 0 80px rgba(0, 255, 0, 0.3);
  }
  66% {
    box-shadow: 
      0 0 40px rgba(0, 0, 255, 0.6),
      0 0 80px rgba(0, 0, 255, 0.3);
  }
  100% {
    box-shadow: 
      0 0 40px rgba(255, 0, 0, 0.6),
      0 0 80px rgba(255, 0, 0, 0.3);
  }
}

.laptop::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    45deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.05) 50%,
    rgba(255,255,255,0) 100%
  );
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .laptop,
  .code-block,
  .laptop-glow {
    animation: none;
  }
}

.macos-window {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.window-header {
  background: #323233;
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
}

.window-controls {
  display: flex;
  gap: 8px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.close {
  background: #ff5f56;
}

.minimize {
  background: #ffbd2e;
}

.maximize {
  background: #27c93f;
}

.window-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #999;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.terminal-content {
  flex: 1;
  padding: 24px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Menlo', monospace;
  font-size: 15px;
  line-height: 1.6;
  color: #eee;
}

.prompt {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
}

.command {
  color: #eee;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
}

.command-history .output {
  color: #a0a0a0;
  font-size: 15px;
  line-height: 1.8;
  margin-left: 4px;
}

.laptop {
  position: relative;
  width: 500px;
  height: 320px;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform: rotateX(2deg) rotateY(-1deg) translateY(20px);
  animation: float 8s ease-in-out infinite;
}

.laptop-screen {
  position: relative;
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  border-radius: 12px;
  border: 2px solid #444;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(88, 156, 255, 0.3),
    0 0 60px rgba(242, 87, 255, 0.2);
  overflow: hidden;
  padding: 4px;
  animation: screenGlow 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.laptop-screen::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #333;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
}

.laptop-keyboard {
  position: absolute;
  width: 130%;
  height: 120px;
  left: -15%;
  bottom: -100px;
  background: linear-gradient(to bottom, #808080, #999);
  border-radius: 0 0 12px 12px;
  transform: rotateX(60deg);
  transform-origin: top;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(60, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1px;
  padding: 8px;
}

.laptop-keyboard::after {
  content: '';
  position: absolute;
  width: 30%;
  height: 4px;
  bottom: 10px;
  left: 35%;
  background: #666;
  border-radius: 2px;
}

.laptop-key {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.laptop-base {
  position: absolute;
  width: 130%;
  height: 8px;
  left: -15%;
  bottom: -8px;
  background: linear-gradient(to bottom, #999, #808080);
  border-radius: 0 0 12px 12px;
  transform: rotateX(-90deg);
  transform-origin: top;
}

.laptop-base::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
}

.laptop-trackpad {
  position: absolute;
  width: 40%;
  height: 30px;
  left: 30%;
  bottom: 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.laptop-code {
  padding: 20px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #e0e0e0;
  opacity: 0.9;
}

.code-block {
  animation: slideUp 20s linear infinite;
}

.code-line {
  white-space: nowrap;
  margin: 8px 0;
}

.indent {
  padding-left: 20px;
}

.code-comment {
  color: #888;
  font-style: italic;
}

.code-keyword {
  color: #f92672;
}

.code-variable {
  color: #a6e22e;
}

.code-operator {
  color: #d4d4d4;
}

.code-string {
  color: #e6db74;
}

.code-bracket {
  color: #d4d4d4;
}

.laptop-glow {
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: radial-gradient(
    circle at center,
    rgba(100, 255, 218, 0.15) 0%,
    transparent 70%
  );
  filter: blur(30px);
  animation: glow 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(-100%);
  }
}

@keyframes float {
  0%, 100% {
    transform: rotateX(2deg) rotateY(-1deg) translateY(20px);
  }
  50% {
    transform: rotateX(3deg) rotateY(1deg) translateY(10px);
  }
}

@keyframes glow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.laptop-keyboard::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at center, rgba(0,0,0,0.2) 0.5px, transparent 1px);
  background-size: 10px 10px;
  background-position: -5px -5px;
}

:deep(.dark) .laptop-screen {
  background: #000;
  border-color: #333;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(100, 255, 218, 0.3),
    0 0 80px rgba(100, 255, 218, 0.2);
  animation: rgbGlowDark 8s linear infinite;
}

@keyframes screenGlow {
  0% {
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(88, 156, 255, 0.2),
      0 0 40px rgba(242, 87, 255, 0.1);
  }
  50% {
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.3),
      0 0 80px rgba(88, 156, 255, 0.5),
      0 0 120px rgba(242, 87, 255, 0.4);
  }
  100% {
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(88, 156, 255, 0.2),
      0 0 40px rgba(242, 87, 255, 0.1);
  }
}

@keyframes rgbGlowDark {
  0% {
    box-shadow: 
      0 0 40px rgba(255, 0, 0, 0.6),
      0 0 80px rgba(255, 0, 0, 0.3);
  }
  33% {
    box-shadow: 
      0 0 40px rgba(0, 255, 0, 0.6),
      0 0 80px rgba(0, 255, 0, 0.3);
  }
  66% {
    box-shadow: 
      0 0 40px rgba(0, 0, 255, 0.6),
      0 0 80px rgba(0, 0, 255, 0.3);
  }
  100% {
    box-shadow: 
      0 0 40px rgba(255, 0, 0, 0.6),
      0 0 80px rgba(255, 0, 0, 0.3);
  }
}

.laptop::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    45deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.05) 50%,
    rgba(255,255,255,0) 100%
  );
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .laptop,
  .code-block,
  .laptop-glow {
    animation: none;
  }
}

.macos-window {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.window-header {
  background: #323233;
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
}

.window-controls {
  display: flex;
  gap: 8px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.close {
  background: #ff5f56;
}

.minimize {
  background: #ffbd2e;
}

.maximize {
  background: #27c93f;
}

.window-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #999;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.terminal-content {
  flex: 1;
  padding: 16px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Menlo', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #eee;
}

.prompt {
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
}

.command {
  color: #eee;
  margin-bottom: 8px;
}

.node-prompt {
  color: #7cbe4e;
  margin: 8px 0;
}

.user {
  color: #7cbe4e;
}

.separator, .symbol {
  color: #999;
}

.directory {
  color: #4a9eff;
}

.code-block {
  margin-top: 12px;
  animation: typing 4s steps(50, end);
}

@keyframes typing {
  from { 
    clip-path: inset(0 100% 0 0);
  }
  to { 
    clip-path: inset(0 0 0 0);
  }
}

:deep(.dark) .macos-window {
  background: #1a1a1a;
}

:deep(.dark) .window-header {
  background: #2a2a2a;
}

.macos-window::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255,255,255,0.1) 50%,
    transparent
  );
}

.macos-window {
  position: relative;
}

.macos-window::before {
  content: '';
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
  border-radius: 8px;
  pointer-events: none;
}

/* Add neon glow container */
.laptop::before {
  content: '';
  position: absolute;
  inset: -20px;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(88, 156, 255, 0.2) 0%,
    rgba(242, 87, 255, 0.1) 40%,
    transparent 70%
  );
  filter: blur(40px);
  z-index: -1;
  animation: pulseGlow 6s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

/* Enhance dark mode glow */
:deep(.dark) .laptop::before {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(100, 255, 218, 0.2) 0%,
    rgba(100, 255, 218, 0.1) 40%,
    transparent 70%
  );
}

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

/* Add subtle glow on hover */
.tech-badge:hover {
  box-shadow: 
    0 8px 20px rgba(88, 156, 255, 0.15),
    0 4px 12px rgba(242, 87, 255, 0.1);
  transform: translateY(-4px) scale(1.05);
}

:deep(.dark) .tech-badge:hover {
  box-shadow: 
    0 8px 20px rgba(100, 255, 218, 0.15),
    0 4px 12px rgba(100, 255, 218, 0.1);
}

/* Add subtle entrance animation */
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

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>