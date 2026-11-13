<template>
  <button
    class="hamburger md:hidden"
    :class="{open: isOpen }"
    @click="$emit('toggle')"
  >
    <span class="bg-slate-900 dark:bg-white" ></span>
    <span class="bg-slate-900 dark:bg-white" ></span>
    <span class="bg-slate-900 dark:bg-white" ></span>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>
@media (max-width: 767px) {
  button.hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
    gap: 6px;
    padding: 0;
  }
}

.hamburger span {
  display: block;
  height: 4px;
  width: 100%;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s;
}

.hamburger.dark span {
  background: #fff;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}
</style>
