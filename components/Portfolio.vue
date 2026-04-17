<template>
  <section id="projects" class="container mx-auto mt-6 px-4">
    <div class="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Projects</p>
          <h2 class="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Selected work and latest GitHub apps</h2>
        </div>
        <a
          href="https://github.com/Arif9878?tab=repositories"
          target="_blank"
          rel="noreferrer"
          class="text-sm font-medium text-sky-700 hover:text-sky-800"
        >
          View all repositories
        </a>
      </div>

      <div class="mt-8">
        <div class="flex items-center justify-between gap-4">
          <h3 class="text-lg font-semibold text-slate-900">Latest GitHub Projects</h3>
          <span class="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">Updated portfolio</span>
        </div>

        <div class="mt-4 grid gap-4 lg:grid-cols-2">
          <article
            v-for="project in githubProjects"
            :key="project.name"
            class="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <div class="flex flex-wrap items-center gap-2">
              <span class="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                {{ project.year }}
              </span>
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="project.isLive ? 'bg-sky-100 text-sky-700' : 'bg-emerald-100 text-emerald-700'"
              >
                {{ project.isLive ? 'Live app' : 'Public repo' }}
              </span>
            </div>

            <h4 class="mt-4 text-xl font-semibold text-slate-900">{{ project.name }}</h4>
            <p class="mt-3 flex-1 text-sm leading-6 text-slate-600">{{ project.description }}</p>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="stack in project.stacks"
                :key="stack"
                class="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
              >
                {{ stack }}
              </span>
            </div>

            <div class="mt-5 flex flex-wrap gap-3">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
              >
                Live Demo
              </a>
              <a
                v-if="project.repoUrl"
                :href="project.repoUrl"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Open on GitHub
              </a>
            </div>
          </article>
        </div>
      </div>

      <div class="mt-10">
        <h3 class="text-lg font-semibold text-slate-900">Selected Professional Projects</h3>
        <div class="mt-4 grid gap-4 lg:grid-cols-2">
          <article
            v-for="project in clientProjects"
            :key="project.name"
            class="rounded-2xl border border-slate-200 p-5"
          >
            <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h4 class="text-lg font-semibold text-slate-900">{{ project.name }}</h4>
                <p class="text-sm font-medium text-sky-700">{{ project.client }}</p>
              </div>
              <p class="text-sm text-slate-500">{{ project.duration }}</p>
            </div>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ project.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const githubProjects = [
  {
    name: "Poultry Farm Management",
    year: "2026",
    description:
      "A production-ready poultry operations app for dashboard reporting, daily egg logs, feed management, KPI monitoring, and mobile-friendly farm workflows.",
    stacks: ["Vue 3", "TypeScript", "Tailwind", "Supabase", "PWA"],
    liveUrl: "https://poultry.arifboyz16.workers.dev/dashboard",
    repoUrl: "https://github.com/Arif9878/poultry",
    isLive: true
  },
  {
    name: "Kusuma Agro Farm",
    year: "2026",
    description:
      "A modern agriculture-focused web app that presents farm services and business information with a clean interface and responsive browsing experience.",
    stacks: ["Vue", "Tailwind", "Responsive UI"],
    liveUrl: "https://kusuma-agro-farm.arifboyz16.workers.dev/",
    repoUrl: "https://github.com/Arif9878/kusuma-agro-farm",
    isLive: true
  }
];

const clientProjects = [
  {
    name: "Digiteam",
    client: "Jawa Barat",
    duration: "2020 - 2021",
    description: "Employee attendance and operational reporting application that helped teams manage permits and monthly reporting workflows."
  },
  {
    name: "Pikobar Pelaporan Covid-19",
    client: "Jawa Barat",
    duration: "2020 - 2021",
    description: "Web platform that supported reporting and monitoring workflows related to Covid-19 case handling."
  },
  {
    name: "Sapawarga",
    client: "Jawa Barat",
    duration: "2019 - 2020",
    description: "Citizen service application that helped residents access information, submit aspirations, and reach public services more easily."
  },
  {
    name: "Sistem Manajemen SOP",
    client: "Kejaksaan Agung RI",
    duration: "2018 - 2019",
    description: "SOP management platform with document workflows, approvals, flow visualization, and end-to-end tracking from drafting to production."
  },
  {
    name: "Sistem Informasi Manajemen Pelayanan Terpadu Satu Pintu Kabupaten Kediri",
    client: "Kabupaten Kediri",
    duration: "2017 - 2017",
    description: "Online licensing and permit management system built to streamline submissions and administrative processing."
  },
];
</script>
