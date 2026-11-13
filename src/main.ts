import "./assets/tailwind.css";
import { createApp } from "vue";
import App from "./App.vue";

// Importa la función para crear i18n y los archivos de mensajes de idioma
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const enableDark = savedTheme ? savedTheme === "dark" : prefersDark;
document.documentElement.classList.toggle("dark", enableDark);

// Crea la instancia de i18n con:
// - legacy: false (para usar Composition API de i18n)
// - locale: idioma inicial (de localStorage o 'es')
// - fallbackLocale: idioma de respaldo si falta una traducción
// - messages: los textos de cada idioma
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "es",
  fallbackLocale: "en",
  messages: {
    en,
    es,
  },
});

import { vReveal } from "./directives/reveal";

const app = createApp(App);
app.use(i18n);
app.directive("reveal", vReveal);

app.mount("#app");
