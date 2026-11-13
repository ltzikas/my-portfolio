<template>
  <section id="contact" :class="[backgrounds.contact, sectionClasses]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-12 xl:grid-cols-[0.9fr_1.1fr]">
        <!-- Columna izquierda -->
        <div class="xl:pr-8" v-reveal>
          <div
            aria-hidden="true"
            class="mb-4 w-8 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
          ></div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-400"
          >
            {{ $t("contactSection.area") }}
          </p>

          <h2 class="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span
              class="bg-gradient-to-r from-slate-900 via-slate-700 to-cyan-600 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-300 dark:to-cyan-300"
            >
              {{ $t("contactSection.title") }}
            </span>
          </h2>

          <p
            class="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            {{ $t("contactSection.lead") }}
          </p>

          <p
            class="mt-8 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300"
          >
            {{ $t("contactSection.leadDetail") }}
          </p>

          <div class="mt-6 flex flex-col gap-4 sm:max-w-md">
            <a
              v-for="item in $tm('contactSection.actions')"
              :key="item.id"
              :href="item.href"
              target="_blank"
              rel="noreferrer"
              class="group inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-medium text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300"
            >
              <div class="flex items-center gap-4">
                <span
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors duration-300 group-hover:bg-slate-200 group-hover:text-slate-700 dark:bg-white/10 dark:text-slate-300 dark:group-hover:bg-white/5 dark:group-hover:text-cyan-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="h-6 w-6 fill-current"
                    aria-hidden="true"
                  >
                    <path :d="getIconPath(item.icon)" />
                  </svg>
                </span>

                <span class="text-slate-800 dark:text-slate-100">{{
                  item.label
                }}</span>
              </div>

              <span
                class="text-slate-400 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <!-- Columna derecha: formulario -->
        <div
          class="rounded-[2rem] border border-slate-200 border-t-2 border-t-cyan-300 bg-white p-8 shadow-sm md:p-10 dark:border-white/10 dark:border-t-cyan-700 dark:bg-white/5"
          v-reveal="100"
        >
          <form class="space-y-6" @submit.prevent="onSubmit" novalidate>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="mb-2 flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  <span>{{ $t("contactSection.form.name.label") }}</span>
                  <span class="text-rose-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  v-model="form.name"
                  @input="markTouched('name')"
                  :placeholder="$t('contactSection.form.name.placeholder')"
                  :class="[
                    'w-full rounded-2xl border px-4 py-3.5 text-base outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-300',
                    errors.name
                      ? 'border-rose-500 bg-rose-50 text-rose-700 dark:border-rose-600 dark:bg-rose-900 dark:text-rose-300'
                      : 'border-slate-200 bg-slate-50 text-slate-800 dark:border-white/10 dark:bg-slate-800 dark:text-slate-100',
                    'dark:placeholder:text-slate-500 dark:focus:bg-slate-800',
                  ]"
                />
                <p
                  v-if="errors.name"
                  class="mt-2 text-sm text-rose-600 dark:text-rose-400"
                >
                  {{ $t(errors.name) }}
                </p>
              </div>

              <div>
                <label
                  for="email"
                  class="mb-2 flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  <span>{{ $t("contactSection.form.email.label") }}</span>
                  <span class="text-rose-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  v-model="form.email"
                  @input="markTouched('email')"
                  :placeholder="$t('contactSection.form.email.placeholder')"
                  :class="[
                    'w-full rounded-2xl border px-4 py-3.5 text-base outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-300',
                    errors.email
                      ? 'border-rose-500 bg-rose-50 text-rose-700 dark:border-rose-600 dark:bg-rose-900 dark:text-rose-300'
                      : 'border-slate-200 bg-slate-50 text-slate-800 dark:border-white/10 dark:bg-slate-800 dark:text-slate-100',
                    'dark:placeholder:text-slate-500 dark:focus:bg-slate-800',
                  ]"
                />
                <p
                  v-if="errors.email"
                  class="mt-2 text-sm text-rose-600 dark:text-rose-400"
                >
                  {{ $t(errors.email) }}
                </p>
              </div>
            </div>

            <div>
              <label
                for="company"
                class="mb-2 flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                <span>{{ $t("contactSection.form.company.label") }}</span>
                <span class="text-rose-600">*</span>
              </label>
              <input
                id="company"
                type="text"
                v-model="form.company"
                @input="markTouched('company')"
                :placeholder="$t('contactSection.form.company.placeholder')"
                :class="[
                  'w-full rounded-2xl border px-4 py-3.5 text-base outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-300',
                  'border-slate-200 bg-slate-50 text-slate-800 dark:border-white/10 dark:bg-slate-800 dark:text-slate-100',
                  'dark:placeholder:text-slate-500 dark:focus:bg-slate-800',
                ]"
              />
            </div>

            <div>
              <label
                for="message"
                class="mb-2 flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                <span>{{ $t("contactSection.form.message.label") }}</span>
                <span class="text-rose-600">*</span>
              </label>
              <textarea
                id="message"
                rows="7"
                v-model="form.message"
                @input="markTouched('message')"
                :placeholder="$t('contactSection.form.message.placeholder')"
                :class="[
                  'w-full resize-none rounded-2xl border px-4 py-3.5 text-base leading-7 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-300',
                  errors.message
                    ? 'border-rose-500 bg-rose-50 text-rose-700 dark:border-rose-600 dark:bg-rose-900 dark:text-rose-300'
                    : 'border-slate-200 bg-slate-50 text-slate-800 dark:border-white/10 dark:bg-slate-800 dark:text-slate-100',
                  'dark:placeholder:text-slate-500 dark:focus:bg-slate-800',
                ]"
              />
              <p
                v-if="errors.message"
                class="mt-2 text-sm text-rose-600 dark:text-rose-400"
              >
                {{ $t(errors.message) }}
              </p>
              <div class="text-xs text-slate-500 dark:text-slate-400">
                {{ $t("contactSection.allRequired") }}
              </div>
            </div>

            <div class="pt-2">
              <button
                type="submit"
                :disabled="!isValid || sending"
                :class="[
                  'inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-300',
                  !isValid || sending
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed dark:bg-slate-700 dark:text-slate-400'
                    : 'bg-slate-950 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-cyan-400',
                ]"
              >
                <span v-if="sending" class="animate-pulse">{{
                  $t("contactSection.form.sending")
                }}</span>
                <span v-else>{{ $t("contactSection.form.submit") }}</span>
                <span>→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal: success / error -->
    <Transition name="fade">
      <div
        v-if="modal.open"
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div
          class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900 dark:border dark:border-white/5"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1 flex gap-4">
              <!-- icon + text -->
              <div class="flex-shrink-0">
                <div
                  :class="[
                    'flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-inset',
                    modal.type === 'success'
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-900 dark:text-emerald-300 dark:ring-emerald-800'
                      : modal.type === 'error'
                        ? 'bg-rose-50 text-rose-700 ring-rose-100 dark:bg-rose-900 dark:text-rose-300 dark:ring-rose-800'
                        : 'bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-300',
                  ]"
                  aria-hidden="true"
                >
                  <svg
                    v-if="modal.type === 'success'"
                    class="h-7 w-7 stroke-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="2"
                  >
                    <path
                      class="checkmark"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <svg
                    v-else-if="modal.type === 'error'"
                    class="h-7 w-7 stroke-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="2"
                  >
                    <path
                      class="xmark"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 6l12 12M18 6L6 18"
                    />
                  </svg>

                  <svg
                    v-else
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  </svg>
                </div>
              </div>

              <div>
                <h3
                  class="text-lg font-semibold text-slate-900 dark:text-slate-100"
                >
                  {{ modal.title }}
                </h3>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {{ modal.message }}
                </p>
              </div>
            </div>

            <button
              type="button"
              class="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
              @click="closeModal"
              :aria-label="$t('contactSection.modal.close')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useSectionBackground } from "@/composables/useSectionBackground";

const { backgrounds, sectionClasses } = useSectionBackground();

const { t } = useI18n();

function getIconPath(icon: string) {
  switch (icon) {
    case "mail":
      return "M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.75-.25a.25.25 0 0 0-.25.25v.18l7.5 5.36 7.5-5.36v-.18a.25.25 0 0 0-.25-.25H4.75Zm14.75 2.28-6.9 4.94a1 1 0 0 1-1.16 0l-6.9-4.94v8.47c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25V8.78Z";
    case "linkedin":
      return "M6.94 8.5H4.56V19h2.38V8.5Zm.16-3.24A1.54 1.54 0 1 0 4.03 5.26a1.54 1.54 0 0 0 3.07 0ZM19 12.44c0-2.8-1.5-4.1-3.5-4.1-1.62 0-2.34.89-2.74 1.52V8.5h-2.38V19h2.38v-5.52c0-.3.02-.6.11-.81.24-.6.79-1.23 1.71-1.23 1.2 0 1.69.92 1.69 2.27V19H19v-6.56Z";
    case "whatsapp":
      return "M12.04 3C7.08 3 3.06 6.98 3.06 11.9c0 1.73.5 3.34 1.37 4.7L3 21l4.54-1.4a9.1 9.1 0 0 0 4.5 1.2h.01c4.95 0 8.97-3.98 8.97-8.9C21.02 6.98 17 3 12.04 3Zm0 16.28h-.01a7.48 7.48 0 0 1-3.81-1.04l-.27-.16-2.7.83.88-2.61-.18-.27a7.32 7.32 0 0 1-1.15-3.93c0-4.08 3.35-7.4 7.47-7.4 2 0 3.88.78 5.29 2.17a7.3 7.3 0 0 1 2.19 5.23c0 4.08-3.35 7.4-7.47 7.4Zm4.1-5.55c-.23-.11-1.35-.66-1.56-.73-.21-.08-.36-.11-.51.11-.15.22-.59.73-.72.88-.13.15-.27.17-.5.06-.23-.11-.98-.36-1.86-1.14-.69-.61-1.16-1.36-1.29-1.59-.13-.22-.01-.35.1-.46.1-.1.23-.27.34-.41.11-.13.15-.22.23-.37.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.7-1.68-.18-.43-.37-.37-.51-.38h-.43c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.82s.79 2.1.9 2.24c.11.15 1.55 2.35 3.75 3.3.52.22.93.36 1.25.46.53.17 1.02.15 1.4.09.43-.06 1.35-.55 1.54-1.08.19-.53.19-.98.13-1.08-.05-.09-.2-.14-.43-.25Z";
    default:
      return "";
  }
}

// Form state and validation
const form = reactive({
  name: "",
  email: "",
  company: "",
  message: "",
});

const touched = reactive<{
  name: boolean;
  email: boolean;
  company: boolean;
  message: boolean;
}>({
  name: false,
  email: false,
  company: false,
  message: false,
});

const errors = reactive<{ name?: string; email?: string; message?: string }>(
  {},
);
const sending = ref(false);

// modal state (store translated strings here)
const modal = reactive({
  open: false,
  title: "",
  message: "",
  type: "" as "" | "success" | "error",
});

// Azure Function endpoint
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string

// email regex
function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// validate single field (stores translation keys for template to resolve)
function validateField(field: "name" | "email" | "message") {
  if (field === "name") {
    errors.name = touched.name
      ? form.name.trim()
        ? ""
        : "contactSection.form.errors.required"
      : "";
  } else if (field === "email") {
    errors.email = touched.email
      ? validateEmail(form.email)
        ? ""
        : "contactSection.form.errors.invalidEmail"
      : "";
  } else if (field === "message") {
    errors.message = touched.message
      ? form.message.trim()
        ? ""
        : "contactSection.form.errors.required"
      : "";
  }
}

// validate all and mark touched (used on submit)
function validateAll() {
  touched.name = touched.email = touched.company = touched.message = true;
  validateField("name");
  validateField("email");
  validateField("message");
  return !errors.name && !errors.email && !errors.message;
}

// run validation as user types
watch(
  () => [form.name, form.email, form.message],
  () => {
    if (touched.name) validateField("name");
    if (touched.email) validateField("email");
    if (touched.message) validateField("message");
  },
);

function markTouched(field: keyof typeof touched) {
  if (!touched[field]) touched[field] = true;
}

const isValid = computed(() => {
  return (
    form.name.trim().length > 0 &&
    validateEmail(form.email) &&
    form.message.trim().length > 0
  );
});

function closeModal() {
  modal.open = false;
  modal.title = "";
  modal.message = "";
  modal.type = "";
}

async function onSubmit() {
  closeModal();

  // use validateAll so same logic used here and the function is not unused
  if (!validateAll()) {
    modal.open = true;
    modal.type = "error";
    modal.title = t("contactSection.modal.formIncomplete.title");
    modal.message = t("contactSection.modal.formIncomplete.message");
    return;
  }

  sending.value = true;
  try {
    const resp = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message,
      }),
    });

    if (resp.ok) {
      modal.open = true;
      modal.type = "success";
      modal.title = t("contactSection.modal.sent.title");
      modal.message = t("contactSection.modal.sent.message");
      form.name = form.email = form.company = form.message = "";
      touched.name = touched.email = touched.company = touched.message = false;
      errors.name = errors.email = errors.message = "";
    } else {
      modal.open = true;
      modal.type = "error";
      modal.title = t("contactSection.modal.sendFailed.title");
      modal.message = t("contactSection.modal.sendFailed.message");
      fallbackMailTo();
    }
  } catch (e) {
    modal.open = true;
    modal.type = "error";
    modal.title = t("contactSection.modal.networkError.title");
    modal.message = t("contactSection.modal.networkError.message");
    fallbackMailTo();
  } finally {
    sending.value = false;
  }
}

function fallbackMailTo() {
  const subject = encodeURIComponent(t("contactSection.mail.subject"));
  const body = encodeURIComponent(
    `${t("contactSection.mail.bodyIntro")}\n\n${t("contactSection.mail.payloadIntro")}\n\nNombre: ${form.name}\nEmail: ${form.email}\nEmpresa: ${form.company}\n\n${form.message}`,
  );
  window.location.href = `mailto:info@luciotzikas.com?subject=${subject}&body=${body}`;
}
</script>
<style scoped>
/* checkmark stroke animation */
.checkmark {
  stroke-dasharray: 22;
  stroke-dashoffset: 22;
  animation:
    draw 0.45s ease-out forwards,
    pop 0.45s ease-out;
}

/* xmark stroke animation */
.xmark {
  stroke-dasharray: 28;
  stroke-dashoffset: 28;
  animation:
    draw 0.35s ease-out forwards,
    shake 0.5s ease-out 0.05s;
}

/* draw path */
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

/* subtle pop on appear */
@keyframes pop {
  0% {
    transform: scale(0.85);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* error shake */
@keyframes shake {
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-3px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(3px);
  }
  0%,
  100% {
    transform: translateX(0);
  }
}
</style>
