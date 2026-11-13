<template>
  <section id="skills" :class="[backgrounds.skills, sectionClasses]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="max-w-3xl" v-reveal>
        <div
          aria-hidden="true"
          class="mb-4 w-8 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
        ></div>
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-300"
        >
          {{ $t("skillsSection.area") }}
        </p>
        <h2
          class="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-100"
        >
          {{ $t("skillsSection.title") }}
        </h2>
        <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          {{ $t("skillsSection.description") }}
        </p>
      </div>

      <!-- Grid de capacidades -->
      <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="(card, i) in $tm('skillsSection.cards')"
          :key="i"
          v-reveal="i * 80"
          class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 hover:-translate-y-1 hover:border-cyan-400 dark:hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-200/50 dark:hover:shadow-cyan-900/40 transition-all duration-300"
        >
          <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {{ card.title }}
          </h3>
          <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {{ card.desc }}
          </p>
        </div>
      </div>

      <!-- Base tecnológica -->
      <div
        class="mt-8 rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50/80 to-indigo-50/80 p-5 md:p-6 dark:border-cyan-900/40 dark:from-cyan-950/30 dark:to-indigo-950/30"
        v-reveal="200"
      >
        <h3
          class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-300"
        >
          {{ $t("skillsSection.baseTitle") }}
        </h3>

        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="(item, i) in $tm('skillsSection.base')"
            :key="i"
            class="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-900/40 hover:border-cyan-400 dark:hover:border-cyan-300 hover:-translate-y-px transition-all duration-200"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSectionBackground } from "@/composables/useSectionBackground";

const { backgrounds, sectionClasses } = useSectionBackground();
</script>
