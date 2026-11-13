<template>
  <section id="projects" :class="[backgrounds.projects, sectionClasses]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="max-w-4xl" v-reveal>
        <div
          aria-hidden="true"
          class="mb-4 w-8 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
        ></div>
        <p
          class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400"
        >
          {{ $t("projectsSection.area") }}
        </p>
        <h2
          class="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-100"
        >
          {{ $t("projectsSection.title") }}
        </h2>
        <p class="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
          {{ $t("projectsSection.description") }}
        </p>
      </div>

      <!-- Cards -->
      <ul class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <li
          v-for="(item, idx) in $tm('projectsSection.cases')"
          :key="item.id"
          v-reveal="Number(idx) * 80"
          class="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-200/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300 dark:hover:shadow-cyan-900/40"
        >
          <article class="flex h-full flex-col">
            <h3
              class="text-lg font-semibold text-slate-950 dark:text-slate-100"
            >
              {{ item.title }}
            </h3>
            <p
              class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300"
            >
              {{ item.summary }}
            </p>
            <div class="py-5 flex flex-wrap gap-2">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-700 dark:border-cyan-800/60 dark:bg-cyan-900/20 dark:text-cyan-300"
              >
                {{ tag }}
              </span>
            </div>
            <button
              type="button"
              class="mt-auto inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-300 text-sm font-medium hover:underline focus:outline-none"
              @click="openCase(item)"
            >
              {{ $t("projectsSection.viewCase") }}
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
          </article>
        </li>
      </ul>
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
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 px-2 md:px-4 backdrop-blur-sm"
        @click.self="closeCase"
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
            v-if="modalOpen"
            class="relative w-full max-w-2xl md:max-w-3xl rounded-3xl border border-cyan-200 bg-white p-6 shadow-xl dark:border-cyan-900 dark:bg-slate-900 transition-all duration-300"
          >
            <!-- Botón cerrar -->
            <button
              class="absolute top-4 right-6 text-slate-400 hover:text-cyan-500 text-2xl"
              @click="closeCase"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <!-- Contenido -->
            <div class="max-h-[70vh] overflow-y-auto pr-1">
              <h3
                class="text-xl font-bold tracking-tight text-slate-950 dark:text-slate-100"
              >
                {{ modalItem.modalTitle }}
              </h3>
              <p
                class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
              >
                {{ modalItem.modalIntro }}
              </p>
              <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div
                  v-for="(section, idx) in [
                    {
                      label: $t('projectsSection.context'),
                      value: modalItem.context,
                    },
                    {
                      label: $t('projectsSection.challenge'),
                      value: modalItem.challenge,
                    },
                    {
                      label: $t('projectsSection.intervention'),
                      value: modalItem.intervention,
                    },
                    {
                      label: $t('projectsSection.impact'),
                      value: modalItem.impact,
                    },
                  ]"
                  :key="idx"
                  class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-white/10"
                >
                  <p
                    class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-400"
                  >
                    {{ section.label }}
                  </p>
                  <p
                    class="mt-2 text-xs leading-6 text-slate-700 dark:text-slate-200"
                  >
                    {{ section.value }}
                  </p>
                </div>
              </div>
              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="tag in modalItem.modalTags"
                  :key="tag"
                  class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSectionBackground } from "@/composables/useSectionBackground";

const { backgrounds, sectionClasses } = useSectionBackground();

const modalOpen = ref(false);
const modalItem = ref({
  id: "",
  title: "",
  summary: "",
  tags: [],
  modalTitle: "",
  modalIntro: "",
  context: "",
  challenge: "",
  intervention: "",
  impact: "",
  modalTags: [],
});

function openCase(item: any) {
  modalItem.value = item;
  modalOpen.value = true;
  document.body.style.overflow = "hidden";
}

function closeCase() {
  modalOpen.value = false;
  document.body.style.overflow = "";
}
</script>
