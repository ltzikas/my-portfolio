<template>
  <div class="flex gap-2 items-center">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="link.name"
      class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110 focus-visible:ring-2 focus-visible:ring-blue-500/50"
    >
      <!-- Email -->
      <svg
        v-if="link.name === 'mail'"
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.75-.25a.25.25 0 0 0-.25.25v.18l7.5 5.36 7.5-5.36v-.18a.25.25 0 0 0-.25-.25H4.75Zm14.75 2.28-6.9 4.94a1 1 0 0 1-1.16 0l-6.9-4.94v8.47c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25V8.78Z"/>
      </svg>

      <!-- Linkedin -->
      <svg
        v-else-if="link.name === 'linkedIn'"
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.94 8.5H4.56V19h2.38V8.5Zm.16-3.24A1.54 1.54 0 1 0 4.03 5.26a1.54 1.54 0 0 0 3.07 0ZM19 12.44c0-2.8-1.5-4.1-3.5-4.1-1.62 0-2.34.89-2.74 1.52V8.5h-2.38V19h2.38v-5.52c0-.3.02-.6.11-.81.24-.6.79-1.23 1.71-1.23 1.2 0 1.69.92 1.69 2.27V19H19v-6.56Z"/>
      </svg>

      <!-- Whatsapp -->
      <svg
        v-else-if="link.name === 'whatsapp'"
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.04 3C7.08 3 3.06 6.98 3.06 11.9c0 1.73.5 3.34 1.37 4.7L3 21l4.54-1.4a9.1 9.1 0 0 0 4.5 1.2h.01c4.95 0 8.97-3.98 8.97-8.9C21.02 6.98 17 3 12.04 3Zm0 16.28h-.01a7.48 7.48 0 0 1-3.81-1.04l-.27-.16-2.7.83.88-2.61-.18-.27a7.32 7.32 0 0 1-1.15-3.93c0-4.08 3.35-7.4 7.47-7.4 2 0 3.88.78 5.29 2.17a7.3 7.3 0 0 1 2.19 5.23c0 4.08-3.35 7.4-7.47 7.4Zm4.1-5.55c-.23-.11-1.35-.66-1.56-.73-.21-.08-.36-.11-.51.11-.15.22-.59.73-.72.88-.13.15-.27.17-.5.06-.23-.11-.98-.36-1.86-1.14-.69-.61-1.16-1.36-1.29-1.59-.13-.22-.01-.35.1-.46.1-.1.23-.27.34-.41.11-.13.15-.22.23-.37.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.7-1.68-.18-.43-.37-.37-.51-.38h-.43c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.82s.79 2.1.9 2.24c.11.15 1.55 2.35 3.75 3.3.52.22.93.36 1.25.46.53.17 1.02.15 1.4.09.43-.06 1.35-.55 1.54-1.08.19-.53.19-.98.13-1.08-.05-.09-.2-.14-.43-.25Z"/>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    name: 'mail',
    url: 'mailto:info@luciotzikas.com',
  },
  {
    name: 'linkedIn',
    url: 'https://www.linkedin.com/in/ltzikas/'
  },
  {
    name: 'whatsapp',
    url: 'https://wa.me/5491134133083',
  }
]
</script>