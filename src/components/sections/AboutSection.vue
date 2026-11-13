<template>
  <section id="about" :class="[backgrounds.about, sectionClasses]">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Header -->
      <header class="max-w-3xl" v-reveal>
        <div
          aria-hidden="true"
          class="mb-4 w-8 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
        ></div>
        <p
          class="text-sm font-semibold tracking-[0.18em] uppercase text-slate-400 dark:text-slate-300"
        >
          {{ $t("approachSection.title") }}
        </p>
        <h2
          class="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-950 dark:text-slate-100"
        >
          {{ $t("approachSection.subtitle") }}
        </h2>
        <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {{ $t("approachSection.description") }}
        </p>
      </header>

      <!-- Pilares -->
      <h3
        class="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500"
      >
        {{ $t("approachSection.stepsTitle") }}
      </h3>
      <ul class="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
        <li
          v-for="(step, i) in $tm('approachSection.steps')"
          :key="i"
          v-reveal="Number(i) * 80"
          class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 hover:-translate-y-1 hover:border-cyan-400 dark:hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-200/50 dark:hover:shadow-cyan-900/40 transition-all duration-300"
        >
          <span
            aria-hidden="true"
            class="pointer-events-none absolute top-3 right-4 text-6xl font-black leading-none select-none text-slate-100 dark:text-white/[0.04]"
            >{{ (Number(i) + 1).toString().padStart(2, "0") }}</span
          >
          <div class="flex items-start gap-3">
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-slate-100">
                {{ step.title }}
              </h3>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </li>
      </ul>

      <!-- Principios -->
      <h3
        class="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500"
      >
        {{ $t("approachSection.valuesTitle") }}
      </h3>
      <div class="mt-6 overflow-x-auto" v-reveal="200">
        <ul class="flex flex-wrap gap-3 justify-start md:gap-4">
          <li
            v-for="(v, i) in $tm('approachSection.values')"
            :key="i"
            class="mt-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-900/40 hover:border-cyan-400 dark:hover:border-cyan-300 hover:-translate-y-px transition-all duration-200"
          >
            <span
              class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 break-words"
              >{{ v }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useSectionBackground } from "@/composables/useSectionBackground";

const { backgrounds, sectionClasses } = useSectionBackground();
</script>
