<template>
  <section id="skills" class="container mx-auto mt-6 px-4">
    <div class="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Skills</p>
      <h2 class="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Tools and technologies</h2>

      <div class="mt-6 grid gap-4 md:grid-cols-3">
        <article
          v-for="group in skillGroups"
          :key="group.title"
          class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
          <h3 class="text-lg font-semibold text-slate-900">{{ group.title }}</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="skill in group.items"
              :key="skill"
              class="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-600 ring-1 ring-slate-200"
            >
              {{ skill }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    title: 'Backend & APIs',
    items: ['Golang', 'Python', 'REST API', 'Microservices']
  },
  {
    title: 'Frontend',
    items: ['JavaScript', 'Vue.js', 'Nuxt.js', 'React.js', 'Tailwind CSS']
  },
  {
    title: 'Data & Infrastructure',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker']
  }
];
</script>
  
