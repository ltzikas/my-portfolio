<template>
  <button
    @click="toggleLanguage"
    class="relative w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
    :aria-label="locale === 'en' ? 'Cambiar a español' : 'Switch to English'"
  >
    <span
      class="absolute inset-0 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300"
    ></span>
    <span
      class="absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center transition-all duration-300 hover:ring-2 hover:ring-blue-500/30 hover:scale-110"
      :class="locale === 'en' ? 'translate-x-6' : 'translate-x-0'"
    >
      <span class="font-bold text-xs text-slate-700 dark:text-slate-200">
        {{ locale === 'es' ? 'ES' : 'EN' }}
      </span>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

const { locale } = useI18n()

onMounted(() => {
  // Leer idioma guardado
  const saved = localStorage.getItem('lang')
  if (saved) {
    locale.value = saved
  }
})

function toggleLanguage() {
  // 1. Toggle el idioma
  locale.value = locale.value === 'en' ? 'es' : 'en'
  
  // 2. Guardar en localStorage (persistencia)
  localStorage.setItem('lang', locale.value)
}
</script>