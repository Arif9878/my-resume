<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <Header />
    <About />
    <Experience />
    <Education />
		<Portfolio />
    <Skills />
    <Contact />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import About from '~/components/About.vue';
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';
import Skills from '~/components/Skills.vue';
import Portfolio from '~/components/Portfolio.vue';
import Contact from '~/components/Contact.vue';
</script>
