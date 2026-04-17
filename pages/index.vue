<template>
  <div class="min-h-screen bg-slate-100 text-slate-900">
    <Header />

    <main class="pb-10">
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <Skills />
    </main>

    <Contact />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Arif Wicaksono | Software Engineer',
  description:
    'Software engineer resume highlighting backend engineering, modern web development, and selected projects on GitHub.',
});

import Header from '~/components/Header.vue';
import About from '~/components/About.vue';
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';
import Skills from '~/components/Skills.vue';
import Portfolio from '~/components/Portfolio.vue';
import Contact from '~/components/Contact.vue';
</script>
