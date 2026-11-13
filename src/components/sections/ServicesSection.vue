<template>
  <section id="services" :class="[backgrounds.services, sectionClasses]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-12 xl:grid-cols-[0.95fr_1.25fr]">
        <!-- Columna izquierda -->
        <div class="xl:sticky xl:top-28 xl:self-start" v-reveal>
          <div
            aria-hidden="true"
            class="mb-4 w-8 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
          ></div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-400"
          >
            {{ $t("servicesSection.eyebrow") }}
          </p>

          <h2
            class="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-100"
          >
            {{ $t("servicesSection.title") }}
          </h2>

          <p
            class="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300"
          >
            {{ $t("servicesSection.lead1") }}
          </p>

          <p
            class="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300"
          >
            {{ $t("servicesSection.lead2") }}
          </p>

          <div class="mt-10">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-cyan-400"
            >
              {{ $t("servicesSection.cta") }}
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Columna derecha -->
        <div class="space-y-6">
          <article
            v-for="(item, idx) in $tm('servicesSection.items')"
            :key="item.id"
            v-reveal="Number(idx) * 80"
            class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-200/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300 dark:hover:shadow-cyan-900/40"
          >
            <div
              class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
            >
              <!-- Número -->
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 text-base font-semibold text-slate-400 transition-all duration-300 group-hover:border-cyan-200 group-hover:from-cyan-50 group-hover:to-indigo-50 group-hover:text-cyan-600 dark:border-white/10 dark:from-white/5 dark:to-white/10 dark:text-cyan-300 dark:group-hover:from-cyan-950/60 dark:group-hover:to-indigo-950/60"
              >
                {{ item.number }}
              </div>

              <!-- Contenido -->
              <div class="flex-1 md:pl-6">
                <h3
                  class="text-lg md:text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-100"
                >
                  {{ item.title }}
                </h3>

                <p
                  class="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300"
                >
                  {{ item.description }}
                </p>

                <ul class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <li
                    v-for="bullet in item.bullets"
                    :key="bullet"
                    class="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                  >
                    {{ bullet }}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSectionBackground } from "@/composables/useSectionBackground";

const { backgrounds, sectionClasses } = useSectionBackground();
</script>
