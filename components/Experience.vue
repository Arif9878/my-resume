<template>
  <section id="experience" class="container mx-auto mt-6 px-4">
    <div class="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Experience</p>
          <h2 class="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Professional journey</h2>
        </div>
        <p class="text-sm text-slate-500">Delivering software since 2016</p>
      </div>

      <div class="relative mt-8 space-y-6 border-l border-slate-200 pl-6 sm:pl-8">
        <article
          v-for="job in jobs"
          :key="`${job.company}-${job.title}`"
          class="relative rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
          <div class="absolute -left-[34px] top-6 h-4 w-4 rounded-full border-4 border-white bg-sky-500 sm:-left-[42px]"></div>
          <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 class="text-lg font-semibold text-slate-900">{{ job.title }}</h3>
              <p class="text-sm font-medium text-sky-700">{{ job.company }}</p>
            </div>
            <p class="text-sm text-slate-500">{{ job.duration }}</p>
          </div>

          <ul class="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li v-for="task in job.tasks" :key="task" class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500"></span>
              <span>{{ task }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    company: "Stockbit",
    title: "Backend Developer",
    duration: "November 2021 - Present",
    tasks: [
      "Researching and adopting technology choices that support product scalability and reliability.",
      "Designing and building backend systems for financial services products."
    ]
  },
  {
    company: "Jabar Digital Service",
    title: "Frontend Developer",
    duration: "September 2019 - October 2021",
    tasks: [
      "Developed web interfaces for public service products using Vue.js.",
      "Integrated frontend applications with APIs for reporting and public information systems.",
      "Evaluated and introduced practical frontend technologies for active projects."
    ]
  },
  {
    company: "PT. Quantus Telematika Indonesia",
    title: "Software Engineer",
    duration: "May 2018 - September 2019",
    tasks: [
      "Planned and designed systems for multiple active client projects.",
      "Delivered application features from requirement analysis through implementation.",
      "Researched technology options to improve project quality and maintainability."
    ]
  },
  {
    company: "CV. ADISATYA IT CONSULTANT",
    title: "Software Engineer",
    duration: "June 2016 - May 2018",
    tasks: [
      "Developed business applications and information systems for client needs.",
      "Contributed to system planning, technical design, and implementation.",
      "Supported product delivery by aligning technical work with project requirements."
    ]
  }
];
</script>
