<template>
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div class="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4">

      <!-- logo + copyright -->
      <div class="flex items-center gap-4">
        <a href="/" aria-label="Home"
          class="h-9 w-9 rounded-full flex items-center justify-center
                 bg-slate-100 hover:bg-slate-200
                 dark:bg-slate-700 dark:hover:bg-slate-600
                 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors">
          <span class="sr-only">Home</span>
          <svg class="h-6 w-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="24" cy="24" r="20" stroke-width="2" fill="none" class="stroke-slate-400 dark:stroke-white" opacity="0.35"/>
            <line x1="24" y1="24" x2="10" y2="14" stroke-width="2.8" stroke-linecap="round" class="stroke-slate-500 dark:stroke-white" opacity="0.9"/>
            <line x1="24" y1="24" x2="38" y2="14" stroke-width="2.8" stroke-linecap="round" class="stroke-slate-500 dark:stroke-white" opacity="0.9"/>
            <line x1="24" y1="24" x2="24" y2="40" stroke-width="2.8" stroke-linecap="round" class="stroke-slate-500 dark:stroke-white" opacity="0.9"/>
            <circle cx="10" cy="14" r="3.5" opacity="0.9" class="fill-slate-500 dark:fill-white"/>
            <circle cx="38" cy="14" r="3.5" opacity="0.9" class="fill-slate-500 dark:fill-white"/>
            <circle cx="24" cy="40" r="3.5" opacity="0.9" class="fill-slate-500 dark:fill-white"/>
            <circle cx="24" cy="24" r="5" fill="#06b6d4"/>
            <circle cx="24" cy="24" r="8.5" stroke="#06b6d4" stroke-width="1.6" fill="none" opacity="0.4"/>
          </svg>
        </a>

        <p class="text-sm text-slate-700 dark:text-slate-300">
          © {{ year }} · Lucio Tzikas · {{ $t('footer.portfolio') }}
        </p>
      </div>

      <!-- iconos sociales -->
      <div class="flex items-center gap-3">
        <a class="group p-2 rounded-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300"
          href="mailto:info@luciotzikas.com" aria-label="Email" rel="noopener">
          <svg class="h-6 w-6 stroke-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
            <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 8.5l8.5 5L20 8.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <a class="group p-2 rounded-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300"
          href="https://www.linkedin.com/in/ltzikas" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5 2.5 2.5 0 0 0 4.98 3.5zM3 9.5h4v11H3zM9.5 9.5h3.7v1.5h.05c.52-.98 1.8-2 3.7-2 3.95 0 4.68 2.6 4.68 6V20.5h-4v-5.3c0-1.26-.02-2.87-1.75-2.87-1.75 0-2.02 1.37-2.02 2.78V20.5h-4z"/>
          </svg>
        </a>

        <a class="group p-2 rounded-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300"
          :href="whatsappHref" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.52 3.48A11.93 11.93 0 0 0 12 .5 11.7 11.7 0 0 0 3.7 5.1 11.98 11.98 0 0 0 2 15.3l.02.9L2 21l4.9-1.3.9.02a11.98 11.98 0 0 0 9.3-5.2A11.7 11.7 0 0 0 24 12 11.93 11.93 0 0 0 20.52 3.48zM12 20c-1.5 0-2.97-.4-4.24-1.12l-.3-.18L5 19l.3-2.3-.18-.3A8 8 0 1 1 20 12a8 8 0 0 1-8 8zm4.3-6.7c-.24-.12-1.42-.7-1.64-.78-.22-.09-.37-.14-.53.11-.15.24-.6.78-.74.94-.13.16-.27.17-.5.06-.23-.11-1-.38-1.9-1.2-.66-.59-1.1-1.32-1.23-1.55-.13-.23-.01-.36.1-.47.1-.1.23-.28.34-.42.11-.14.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.11-.52-1.25-.71-1.72-.18-.47-.37-.42-.51-.43-.18-.01-.39-.01-.6-.01-.2 0-.5.07-.76.29-.26.22-.97.78-.97 1.9 0 1.12.95 3.17 1.08 3.38.13.22 1.9 3.1 4.6 4.35 1 .4 1.6.5 2.2.42.6-.07 1.3-.54 1.5-1.07.2-.53.2-.98.14-1.08-.06-.09-.2-.15-.44-.26z"/>
          </svg>
        </a>

        <button @click.prevent="scrollTop"
          class="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-300"
          aria-label="Back to top">
          ↑ {{ $t('footer.top') }}
        </button>
      </div>

      <!-- legal links: centrado en mobile, derecha en desktop -->
      <div class="w-full sm:w-auto flex justify-center sm:justify-end items-center gap-1 text-xs text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800 sm:border-0 pt-3 sm:pt-0 mt-1 sm:mt-0">
        <a :href="privacyHref" class="hover:text-slate-600 dark:hover:text-slate-300 hover:underline transition-colors" target="_self" rel="noopener">{{ $t('footer.privacy') }}</a>
        <span class="mx-1 opacity-50">·</span>
        <a :href="termsHref" class="hover:text-slate-600 dark:hover:text-slate-300 hover:underline transition-colors" target="_self" rel="noopener">{{ $t('footer.terms') }}</a>
      </div>

    </div>
  </footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const year = new Date().getFullYear()

function scrollTop() {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    window.scrollTo(0, 0)
  }
}

const { locale } = useI18n()
const supported = ['en', 'es']
const lang = computed(() => {
  const code = String(locale.value || 'en').split('-')[0].toLowerCase()
  return supported.includes(code) ? code : 'en'
})

const privacyHref = computed(() => `/privacy-${lang.value}.html`)
const termsHref = computed(() => `/terms-${lang.value}.html`)
const whatsappHref = computed(() => 'https://wa.me/5491134133083')
</script>