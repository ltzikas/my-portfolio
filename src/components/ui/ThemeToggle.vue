<template>
  <button
    @click="toggleTheme"
    class="relative w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
    :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
  >
    <span
      class="absolute inset-0 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300"
    ></span>
    <span
      class="absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center transition-all duration-300 hover:ring-2 hover:ring-blue-500/30 hover:scale-110"
      :class="isDark ? 'translate-x-6' : 'translate-x-0'"
    >
      <!-- Sol (Light Mode) -->
      <svg
        v-if="!isDark"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="w-4 h-4 text-yellow-500"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
      </svg>

      <!-- Luna (Dark Mode) -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="w-4 h-4 text-slate-300"
        viewBox="0 0 24 24"
      >
        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
      </svg>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// isDark SOLO para saber la posición del toggle y qué ícono mostrar
// NO se usa para estilos (dark: de Tailwind lo maneja)
const isDark = ref(false)

onMounted(() => {
  // Leer preferencia guardada o detectar del DOM
  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = document.documentElement.classList.contains('dark')
  }
})

function toggleTheme() {
  // 1. Toggle el estado local (para la UI del componente)
  isDark.value = !isDark.value
  
  // 2. Aplicar/remover clase 'dark' en <html> (Tailwind lo detecta)
  document.documentElement.classList.toggle('dark', isDark.value)
  
  // 3. Guardar en localStorage (persistencia)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>