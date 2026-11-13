<template>
  <a 
    href="#hero" 
    class="group inline-block"
    aria-label="Volver al inicio"
  >
    <!-- Badge (desktop) -->
    <div class="hidden md:block relative overflow-hidden">
      <div class="relative px-5 py-3 bg-white/5 backdrop-blur-sm dark:bg-gradient-to-br dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:bg-white/10 dark:group-hover:shadow-blue-400/30 group-hover:scale-[1.02] border-2 border-blue-600 dark:border-blue-500/30"
           style="clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);">
        
        <!-- Líneas decorativas -->
        <div class="absolute top-0 left-0 w-16 h-0.5 bg-blue-600 dark:bg-blue-500/50"></div>
        <div class="absolute top-0 left-0 w-0.5 h-16 bg-blue-600 dark:bg-blue-500/50"></div>
        
        <!-- Contenido con sangría en el nombre -->
        <div class="relative z-10 flex flex-col gap-1">
          <span class="text-lg font-bold text-slate-900 dark:text-white leading-none tracking-tight pl-2">
            Lucio Tzikas
          </span>
          <span class="text-[11px] text-blue-700 dark:text-blue-400 leading-none font-medium tracking-wide">
            {{ $t('badge') }}
          </span>
        </div>
        
        <!-- Brillo diagonal -->
        <div class="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 dark:via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      </div>
    </div>
  </a>
</template>