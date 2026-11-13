<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 flex justify-between items-center py-0.5 md:py-1 px-3 md:px-4 shadow-md transition-all duration-300',
      scrolled
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'
        : 'bg-white dark:bg-slate-900',
    ]"
  >
    <!-- Logo -->
    <div class="hidden md:block">
      <BrandLogo />
    </div>

    <ul class="hidden md:flex justify-center gap-6 md:gap-8 list-none m-0 p-0">
      <li v-for="link in links" :key="link.to">
        <a
          :href="link.to"
          :class="[
            'block text-base md:text-lg px-2 md:px-3 py-2 rounded transition-colors',
            activeSection === link.to.slice(1)
              ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 font-medium'
              : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800',
          ]"
          >{{ $t(link.label) }}</a
        >
      </li>
    </ul>
    <HamburgerIcon
      :isOpen="menuOpen"
      @toggle="menuOpen = !menuOpen"
      aria-label="Abrir menú"
    />
    <div class="flex items-center gap-2 md:gap-3">
      <SocialMedia />
      <LanguageSelector />
      <ThemeToggle />
    </div>
  </nav>
  <!-- Menú contextual lateral solo en mobile -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-50 md:hidden bg-black/60"
      @click.self="menuOpen = false"
    >
      <Transition
        appear
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="menuOpen"
          class="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white/75 dark:bg-slate-900/75 backdrop-blur-md shadow-lg p-4 flex flex-col"
        >
          <button
            class="self-end mb-6 text-2xl text-slate-900 dark:text-slate-100"
            aria-label="Cerrar menú"
            @click="menuOpen = false"
          >
            &times;
          </button>
          <ul class="flex flex-col gap-4">
            <li v-for="link in links" :key="link.to">
              <a
                :href="link.to"
                :class="[
                  'block text-base px-2 py-2 rounded transition-colors',
                  activeSection === link.to.slice(1)
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 font-medium'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800',
                ]"
                @click="menuOpen = false"
              >
                {{ $t(link.label) }}
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import ThemeToggle from "@/components/ui/ThemeToggle.vue";
import LanguageSelector from "@/components/ui/LanguageSelector.vue";
import SocialMedia from "@/components/ui/SocialMedia.vue";
import HamburgerIcon from "@/components/ui/HamburgerIcon.vue";
import BrandLogo from "../ui/BrandLogo.vue";

const menuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref<string>("");

let sectionObserver: IntersectionObserver | undefined;

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
  );

  ["hero", "about", ...links.map((l) => l.to.slice(1))].forEach((id) => {
    const el = document.getElementById(id);
    if (el) sectionObserver!.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  sectionObserver?.disconnect();
});

const links = [
  { to: "#skills", label: "skills" },
  { to: "#experience", label: "experience" },
  { to: "#projects", label: "projects" },
  { to: "#services", label: "services" },
  { to: "#contact", label: "contact" },
];
</script>
