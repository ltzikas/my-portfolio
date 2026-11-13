<template>
  <div
    :class="[
      'min-h-screen font-sans flex flex-col',
      'bg-background-light dark:bg-background-dark'
    ]"
  >
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FooterBar from '@/components/layout/FooterBar.vue'
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500&display=swap");

body {
  font-family: "Segoe UI", Arial, sans-serif;
}
</style>
