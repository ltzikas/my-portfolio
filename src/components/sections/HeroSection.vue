<template>
  <section
    ref="sectionRef"
    id="hero"
    :class="[backgrounds.hero, 'relative overflow-hidden']"
    :style="heroSectionStyle"
  >
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 top-[-10%] h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.08)_0%,_rgba(56,189,248,0)_60%)] dark:bg-[radial-gradient(circle,_rgba(56,189,248,0.12)_0%,_rgba(56,189,248,0)_60%)]"
      ></div>
    </div>
    <div
      aria-hidden="true"
      class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-blob dark:bg-cyan-500/20"
    ></div>
    <div
      aria-hidden="true"
      class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl animate-blob animation-delay-2000 dark:bg-indigo-500/20"
    ></div>

    <!-- ═══ MOBILE LAYOUT (sticky scroll reveal, unchanged behavior) ═══ -->
    <div
      class="md:hidden sticky top-0 h-[100dvh] overflow-hidden flex flex-col"
    >
      <div :style="animStyle" class="flex flex-col will-change-transform">
        <div class="relative flex flex-col w-full overflow-hidden">
          <div class="flex flex-col">
            <div
              :style="photoContainerStyle"
              class="order-1 relative shrink-0 overflow-hidden"
            >
              <div class="relative block w-full">
                <img
                  :src="mobilePhotoUrl"
                  :alt="$t('hero.photoAlt')"
                  :style="imageStyle"
                  class="w-full object-top max-w-none opacity-60"
                />
                <div
                  aria-hidden="true"
                  class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none"
                ></div>
              </div>
            </div>
            <div class="order-2 text-center px-5 py-4">
              <div
                class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
              >
                <span
                  class="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
                ></span>
                {{ $t("hero.available") }}
              </div>

              <h1
                class="text-4xl sm:text-5xl font-extrabold leading-[1.05] sm:leading-tight tracking-tight"
              >
                <span
                  class="mt-2 block text-slate-400 text-sm sm:text-lg font-semibold uppercase tracking-[0.2em] dark:text-slate-300"
                  >{{ $t("hero.eyebrow") }}</span
                >
                <span class="block">
                  <span
                    class="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent"
                  >
                    {{ $t("hero.titleStrong") }}
                  </span>
                  <br class="sm:block" />
                  <span
                    class="px-1 text-2xl sm:text-3xl text-slate-900 dark:text-slate-100"
                  >
                    {{ $t("hero.titleRest") }}
                  </span>
                </span>
              </h1>

              <p
                class="mt-1 mb-1 inline-block min-h-[2rem] px-1 py-0.5 rounded-lg bg-cyan-50/60 dark:bg-cyan-900/30 border border-cyan-100 dark:border-cyan-800 font-mono text-sm text-cyan-700 dark:text-cyan-200 tracking-wide shadow"
              >
                <span>{{ typedText }}</span
                ><span
                  class="border-r-2 border-cyan-400 dark:border-cyan-300 ml-1 animate-caret"
                ></span>
              </p>

              <p
                class="mt-1 text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto"
              >
                {{ $t("hero.description") }}
              </p>

              <div
                class="mt-2 flex flex-wrap items-center justify-center gap-3"
              >
                <a
                  href="#projects"
                  @click.prevent="scrollToAnchor('projects')"
                  class="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-white hover:bg-cyan-400 transition-colors dark:bg-cyan-400 dark:text-slate-900 dark:hover:bg-cyan-300"
                >
                  {{ $t("hero.ctaPrimary") }}
                  <svg
                    class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  @click.prevent="scrollToAnchor('contact')"
                  class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-50 transition-colors dark:border-white/15 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/20"
                >
                  {{ $t("hero.ctaSecondary") }}
                  <svg
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Mobile stats: below fold, revealed by scroll -->
          <dl ref="statsRef" class="px-5 pt-3 pb-1 grid grid-cols-3 gap-1.5">
            <div
              class="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-center dark:border-white/10 dark:bg-white/5"
            >
              <dd
                class="text-lg font-semibold text-slate-900 dark:text-slate-100"
              >
                +15
              </dd>
              <dt class="mt-1 text-[10px] text-slate-400 dark:text-slate-300">
                {{ $t("hero.stats.years") }}
              </dt>
            </div>
            <div
              class="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-center dark:border-white/10 dark:bg-white/5"
            >
              <dd
                class="text-lg font-semibold text-slate-900 dark:text-slate-100"
              >
                +20
              </dd>
              <dt class="mt-1 text-[10px] text-slate-400 dark:text-slate-300">
                {{ $t("hero.stats.projects") }}
              </dt>
            </div>
            <div
              class="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-center dark:border-white/10 dark:bg-white/5"
            >
              <dd
                class="text-lg font-semibold text-slate-900 dark:text-slate-100"
              >
                +5
              </dd>
              <dt class="mt-1 text-[10px] text-slate-400 dark:text-slate-300">
                {{ $t("hero.stats.clients") }}
              </dt>
            </div>
          </dl>
        </div>

        <div
          aria-hidden="true"
          class="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
          :style="scrollCueStyle"
        >
          <svg
            class="w-8 h-8 text-slate-400 dark:text-slate-500 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- /MOBILE LAYOUT -->

    <!-- ═══ DESKTOP LAYOUT (single centered fullbleed panel) ═══ -->
    <div class="hidden md:block pt-16 pb-8 lg:pt-24 lg:pb-12">
      <div class="mx-auto w-full max-w-[1800px] px-4 lg:px-6">
        <div class="relative grid w-full grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/75 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.55)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/40">
        <div
          aria-hidden="true"
          class="absolute inset-y-0 left-[40%] w-[22%] bg-gradient-to-r from-transparent via-white/28 to-transparent dark:via-slate-900/20"
        ></div>
          <div
            aria-hidden="true"
            class="absolute inset-y-0 left-[36%] w-[28%] bg-gradient-to-r from-transparent via-white/24 to-transparent dark:via-slate-900/20"
          ></div>

        <!-- Left: text column -->
        <div class="relative z-10 flex flex-col justify-center px-4 lg:px-6 xl:px-8 py-10 lg:py-12">
        <div
          class="inline-flex self-start items-center gap-2 rounded-full border px-3 py-1 text-xs border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
        >
          <span
            class="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
          ></span>
          {{ $t("hero.available") }}
        </div>

        <h1
          class="mt-6 font-extrabold leading-[1.04] tracking-tight"
          style="font-size: clamp(2.45rem, 1.6rem + 2.25vw, 5.5rem)"
        >
          <span
            class="block text-slate-400 text-sm lg:text-base font-semibold uppercase tracking-[0.2em] dark:text-slate-300 mb-3"
          >
            {{ $t("hero.eyebrow") }}
          </span>
          <span
            class="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-indigo-400"
          >
            {{ $t("hero.titleStrong") }}
          </span>
          <br />
          <span
            class="text-slate-900 dark:text-slate-100"
            style="font-size: clamp(1.65rem, 1.1rem + 1.25vw, 3.2rem)"
          >
            {{ $t("hero.titleRest") }}
          </span>
        </h1>

        <p
          class="mt-4 inline-flex self-start min-h-[2rem] px-2 py-1 rounded-lg bg-cyan-50/60 dark:bg-cyan-900/30 border border-cyan-100 dark:border-cyan-800 font-mono text-sm lg:text-base text-cyan-700 dark:text-cyan-200 tracking-wide shadow"
        >
          <span>{{ typedText }}</span
          ><span
            class="border-r-2 border-cyan-400 dark:border-cyan-300 ml-1 animate-caret"
          ></span>
        </p>

        <p
          class="mt-4 text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-md leading-relaxed"
        >
          {{ $t("hero.description") }}
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            @click.prevent="scrollToAnchor('projects')"
            class="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-medium text-white hover:bg-cyan-400 transition-colors dark:bg-cyan-400 dark:text-slate-900 dark:hover:bg-cyan-300"
          >
            {{ $t("hero.ctaPrimary") }}
            <svg
              class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#contact"
            @click.prevent="scrollToAnchor('contact')"
            class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-50 transition-colors dark:border-white/15 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/20"
          >
            {{ $t("hero.ctaSecondary") }}
            <svg
              class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <dl class="mt-8 grid grid-cols-3 gap-3 max-w-lg">
          <div class="rounded-xl border border-slate-200 bg-white/80 p-4 text-center backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/60">
            <dd class="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-indigo-400">+15</dd>
            <dt class="mt-2 text-xs text-slate-400 dark:text-slate-300">{{ $t("hero.stats.years") }}</dt>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white/80 p-4 text-center backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/60">
            <dd class="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-indigo-400">+20</dd>
            <dt class="mt-2 text-xs text-slate-400 dark:text-slate-300">{{ $t("hero.stats.projects") }}</dt>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white/80 p-4 text-center backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/60">
            <dd class="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-indigo-400">+5</dd>
            <dt class="mt-2 text-xs text-slate-400 dark:text-slate-300">{{ $t("hero.stats.clients") }}</dt>
          </div>
        </dl>
      </div>

      <div class="relative min-h-[520px] lg:min-h-[560px] xl:min-h-[620px]">
        <img
          :src="desktopPhotoUrl"
          :alt="$t('hero.photoAlt')"
            class="absolute inset-0 h-full w-full object-cover object-[80%_center] lg:translate-x-12 lg:transform"
        />
        <div
          aria-hidden="true"
          class="absolute inset-y-0 left-0 w-[20%] lg:w-[18%] bg-gradient-to-r from-white/65 via-white/25 to-transparent dark:from-slate-900/70 dark:via-slate-900/36"
        ></div>
          <div
            aria-hidden="true"
            class="absolute inset-y-0 left-0 w-[16%] lg:w-[14%] bg-gradient-to-r from-white/55 via-white/18 to-transparent dark:from-slate-900/60 dark:via-slate-900/30"
          ></div>
        <div
          aria-hidden="true"
          class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-900/35 to-transparent"
        ></div>
      </div>
    </div>
    </div>
    </div>
    <!-- /DESKTOP LAYOUT (single centered fullbleed panel) -->

    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useSectionBackground } from "@/composables/useSectionBackground";

const { backgrounds } = useSectionBackground();

const sectionRef = ref<HTMLElement | null>(null);
const statsRef = ref<HTMLElement | null>(null);
const innerOffset = ref(0);
const scrollProg = ref(0);
const isMobile = ref(false);
const isDark = ref(false);

const statsHeight = ref(0);

const mobilePhotoUrl = computed(() =>
  isDark.value
    ? new URL("@/assets/Lucio1-1Dark.png", import.meta.url).href
    : new URL("@/assets/Lucio1-1Light.png", import.meta.url).href,
);

const desktopPhotoUrl = computed(() =>
  isDark.value
    ? new URL("@/assets/Lucio16-9Dark.png", import.meta.url).href
    : new URL("@/assets/Lucio16-9Light.png", import.meta.url).href,
);
const photoStartPx = ref(0);
const photoEndPx = ref(0);

const MOBILE_BREAKPOINT = 768;
const PHOTO_START_VH = 0.46;
const PHOTO_END_VH = 0.2;
const HERO_SHRINK_GAIN = 1.4;
const HERO_MIN_HEIGHT_RATIO = 0.15;
const MOBILE_ANCHOR_EXTRA_OFFSET = 12;
const DESKTOP_ANCHOR_EXTRA_OFFSET = 16;

let resizeObserver: ResizeObserver | undefined;
let debouncedResizeHandler: ((...a: any[]) => void) | undefined;
let themeObserver: MutationObserver | undefined;

const getViewportHeight = () => window.innerHeight;
const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));

function computeHeroHeight(viewportHeight: number, hiddenPhoto: number) {
  const minHeight = viewportHeight * HERO_MIN_HEIGHT_RATIO;
  return Math.max(
    minHeight,
    Math.round(
      viewportHeight + statsHeight.value - hiddenPhoto * HERO_SHRINK_GAIN,
    ),
  );
}

function getCurrentPhotoHeight() {
  const vh = getViewportHeight();
  const start = photoStartPx.value;
  const end = photoEndPx.value || Math.round(vh * PHOTO_END_VH);
  return Math.round(start - (start - end) * scrollProg.value);
}

const heroSectionStyle = computed(() => {
  if (!isMobile.value) return {};
  const vh = getViewportHeight();
  const hiddenPhoto = Math.max(0, photoStartPx.value - currentPhotoPx.value);
  const height = computeHeroHeight(vh, hiddenPhoto);
  return { height: `${height}px` };
});

const currentPhotoPx = computed(() => {
  if (!isMobile.value || photoStartPx.value === 0) return 0;
  return getCurrentPhotoHeight();
});

const photoContainerStyle = computed(() => {
  if (!isMobile.value || photoStartPx.value === 0) return {};
  return {
    height: `${currentPhotoPx.value}px`,
    overflow: "hidden",
    transition: "height 220ms cubic-bezier(0.22,1,0.36,1)",
  };
});

const imageStyle = computed((): Record<string, string> => {
  if (!isMobile.value || photoStartPx.value === 0) return {};
  return {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    transformOrigin: "top",
    transition: "transform 220ms cubic-bezier(0.22,1,0.36,1)",
  };
});

const animStyle = computed(() => ({
  transform: `translateY(-${innerOffset.value}px)`,
}));

const scrollCueStyle = computed(() => ({
  opacity: Math.max(0, 1 - scrollProg.value * 6),
  transition: "opacity 200ms ease",
}));

function getCollapsedHeroHeight() {
  if (!isMobile.value) return sectionRef.value?.offsetHeight ?? 0;
  const vh = getViewportHeight();
  const totalPhotoShrink = Math.max(0, photoStartPx.value - photoEndPx.value);
  return computeHeroHeight(vh, totalPhotoShrink);
}

function scrollToAnchor(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const nav = document.querySelector("nav");
  const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0;
  const extraOffset =
    window.innerWidth < MOBILE_BREAKPOINT
      ? MOBILE_ANCHOR_EXTRA_OFFSET
      : DESKTOP_ANCHOR_EXTRA_OFFSET;

  const currentHeroHeight = sectionRef.value?.offsetHeight ?? 0;
  const collapsedHeroHeight = getCollapsedHeroHeight();
  const pendingCollapse = Math.max(0, currentHeroHeight - collapsedHeroHeight);

  const top = Math.max(
    0,
    Math.round(
      target.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        extraOffset -
        pendingCollapse,
    ),
  );

  window.scrollTo({ top, behavior: "smooth" });
}

function measureStats() {
  statsHeight.value = statsRef.value?.offsetHeight ?? 0;
  // compute photo px values based on current viewport
  const vh = getViewportHeight();
  photoStartPx.value = Math.round(vh * PHOTO_START_VH);
  photoEndPx.value = Math.round(vh * PHOTO_END_VH);
}

function updateMobile() {
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
}

function handleScroll() {
  if (!sectionRef.value || window.innerWidth >= MOBILE_BREAKPOINT) {
    innerOffset.value = 0;
    scrollProg.value = 0;
    return;
  }
  const scrolledPast = Math.max(
    0,
    -sectionRef.value.getBoundingClientRect().top,
  );
  const maxOffset = statsHeight.value;
  const clamped = clamp(scrolledPast, 0, maxOffset);
  innerOffset.value = Math.round(clamped);
  scrollProg.value = maxOffset > 0 ? clamped / maxOffset : 0;
}

const { tm, locale } = useI18n();
const typedText = ref("");
let typingTimer: number | undefined;

function phrases() {
  const arr = tm("hero.typed") as unknown as string[];
  return arr;
}

function startTyping() {
  stopTyping();
  const lines = phrases();
  let i = 0;
  let deleting = false;
  let text = "";

  const tick = () => {
    const target = lines[i % lines.length];
    const step = deleting ? -1 : 1;
    text = target.slice(0, text.length + step);
    typedText.value = text;

    const base = deleting ? 25 : 45;
    const pauseEnd = 900;
    const pauseStart = 350;
    if (!deleting && text === target) {
      deleting = true;
      typingTimer = window.setTimeout(tick, pauseEnd);
    } else if (deleting && text === "") {
      deleting = false;
      i++;
      typingTimer = window.setTimeout(tick, pauseStart);
    } else {
      typingTimer = window.setTimeout(tick, base + Math.random() * 60);
    }
  };

  tick();
}

function stopTyping() {
  if (typingTimer) {
    clearTimeout(typingTimer);
    typingTimer = undefined;
  }
}

function debounce<T extends (...a: any[]) => void>(fn: T, wait = 150) {
  let t: number | undefined;
  return (...args: Parameters<T>) => {
    if (t !== undefined) window.clearTimeout(t);
    t = window.setTimeout(() => fn(...args), wait) as unknown as number;
  };
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains("dark");
  themeObserver = new MutationObserver(() => {
    isDark.value = document.documentElement.classList.contains("dark");
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  startTyping();
  updateMobile();
  measureStats();
  resizeObserver = new ResizeObserver(() => {
    updateMobile();
    measureStats();
    handleScroll();
  });
  resizeObserver.observe(document.documentElement);
  if (sectionRef.value) resizeObserver.observe(sectionRef.value);
  if (statsRef.value) resizeObserver.observe(statsRef.value);
  window.addEventListener("scroll", handleScroll, { passive: true });
  debouncedResizeHandler = debounce(() => {
    updateMobile();
    measureStats();
    handleScroll();
  }, 150);
  window.addEventListener("resize", debouncedResizeHandler);
});

onBeforeUnmount(() => {
  stopTyping();
  themeObserver?.disconnect();
  window.removeEventListener("scroll", handleScroll);
  if (debouncedResizeHandler) {
    window.removeEventListener("resize", debouncedResizeHandler);
  }
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
watch(locale, () => startTyping());
</script>

<style scoped>
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(10px, -10px) scale(1.05);
  }
}
.animate-blob {
  animation: blob 12s ease-in-out infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes caret {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
}
.animate-caret {
  animation: caret 1s step-end infinite;
}
</style>
