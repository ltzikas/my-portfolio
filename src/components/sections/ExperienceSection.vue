<template>
  <section id="experience" :class="[backgrounds.experience, sectionClasses]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="max-w-4xl" v-reveal>
        <div
          aria-hidden="true"
          class="mb-4 w-8 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
        ></div>
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400"
        >
          {{ $t("experienceSection.area") }}
        </p>
        <h2
          class="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-100"
        >
          {{ $t("experienceSection.title") }}
        </h2>
        <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          {{ $t("experienceSection.description") }}
        </p>
      </div>

      <!-- Cards -->
      <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div
          v-for="(item, idx) in $tm('experienceSection.cards')"
          :key="idx"
          v-reveal="Number(idx) * 80"
          class="group relative overflow-hidden flex flex-col rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-200/50 dark:hover:shadow-cyan-900/40"
        >
          <div
            aria-hidden="true"
            class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <h3 class="text-lg font-semibold text-slate-950 dark:text-slate-100">
            {{ item.title }}
          </h3>
          <p class="py-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {{ item.summary }}
          </p>
          <button
            type="button"
            @click="openModal(item)"
            class="mt-auto inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-300 text-sm font-medium hover:underline focus:outline-none"
          >
            {{ $t("experienceSection.seeDetails") }}
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Modal -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="modalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <Transition
            appear
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 scale-[0.98] translate-y-1"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-[0.98] translate-y-1"
          >
            <div
              class="relative w-full max-w-lg rounded-3xl border border-cyan-200 bg-white p-6 shadow-xl dark:border-cyan-900 dark:bg-slate-900 transition-all duration-300"
            >
              <button
                class="absolute top-4 right-6 text-slate-400 hover:text-cyan-500 text-2xl"
                @click="closeModal"
                aria-label="Cerrar"
              >
                &times;
              </button>
              <h3
                class="text-2xl font-bold text-slate-950 dark:text-slate-100 mb-2"
              >
                {{ modalItem.title }}
              </h3>
              <p
                class="mb-4 text-base leading-7 text-slate-600 dark:text-slate-300"
              >
                {{ modalItem.description }}
              </p>
              <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div
                  v-for="bullet in modalItem.bullets"
                  :key="bullet"
                  class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  {{ bullet }}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>

      <!-- Recorrido -->
      <div
        class="mt-8 rounded-3xl border border-slate-200 bg-white p-5 md:p-6 dark:border-white/10 dark:bg-white/5"
        v-reveal="200"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-400"
        >
          {{ $t("experienceSection.journeyTitle") }}
        </p>
        <p
          class="mt-4 text-base font-medium leading-7 text-slate-900 dark:text-slate-100"
        >
          <span
            v-for="(step, i) in $tm('experienceSection.journeyPath')"
            :key="i"
          >
            <span
              v-if="Number(i) > 0"
              class="mx-2 text-slate-300 dark:text-slate-600"
              >→</span
            >
            <span class="font-semibold">{{ step }}</span>
          </span>
        </p>
        <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          {{ $t("experienceSection.journeyDescription") }}
        </p>
        <hr class="my-2 border-t border-slate-100 dark:border-slate-700" />
        <p class="text-base leading-7 text-slate-600 dark:text-slate-300">
          <span class="font-semibold text-slate-900 dark:text-slate-100">{{
            $t("experienceSection.baseTitle")
          }}</span>
          {{ $t("experienceSection.baseDescription") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSectionBackground } from "@/composables/useSectionBackground";

const { backgrounds, sectionClasses } = useSectionBackground();

const modalOpen = ref(false);
const modalItem = ref({ title: "", summary: "", description: "", bullets: [] });

function openModal(item: any) {
  modalItem.value = item;
  modalOpen.value = true;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOpen.value = false;
  document.body.style.overflow = "";
}
</script>
