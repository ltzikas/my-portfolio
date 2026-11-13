import type { Directive } from "vue";

export const vReveal: Directive<HTMLElement, number | string | undefined> = {
  mounted(el, { value }) {
    el.classList.add("reveal");
    if (value != null) {
      el.style.transitionDelay =
        typeof value === "number" ? `${value}ms` : value;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
  },
};
