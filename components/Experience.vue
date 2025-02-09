<template>
    <section class="container mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Pengalaman Kerja</h2>
      <div class="relative border-l border-gray-300 ml-4">
        <div v-for="job in jobs" :key="job.company" class="mb-6 pl-6 relative">
          <div class="absolute left-[-10px] top-1 w-4 h-4 bg-blue-500 rounded-full"></div>
          <h3 class="text-lg font-semibold">{{ job.title }} - {{ job.company }}</h3>
          <p class="text-sm text-gray-600">{{ job.duration }}</p>
          <p class="mt-2 text-gray-700" v-for="task in job.tasks" :key="task">• {{ task }}</p>
        </div>
      </div>
    </section>
</template>

<script setup>
const jobs = [
  {
    company: "Stockbit",
    title: "Backend Developer",
    duration: "November 2021 - Sekarang",
    tasks: [
      "Conducting research on the latest technology for project development at Stockbit.",
      "Designing and developing backend systems for financial services."
    ]
  },
  {
    company: "Jabar Digital Service",
    title: "Frontend Developer",
    duration: "September 2019 - Oktober 2021",
    tasks: [
      "Research on the latest technology that can be applied to projects running",
      "Developing web interfaces for public services using Vue.js.",
      "Implementing API integration for digital reporting systems."
    ]
  },
  {
    company: "PT. Quantus Telematika Indonesia",
    title: "Software Engineer",
    duration: "May 2018 - September 2019",
    tasks: [
      "Research on the latest technology that can be applied to projects running by PT. Quantus Telematika Indonesia.",
      "Plan and design the system used in projects running by PT. Quantus Telematika Indonesia",
      "Develop system used in projects running by PT. Quantus Telematika Indonesia"
    ]
  },
  {
    company: "CV. ADISATYA IT CONSULTANT",
    title: "Software Engineer",
    duration: "June 2016 – May 2018",
    tasks: [
      "Research on the latest technology that can be applied to projects running by CV Adisatya IT Consultant.",
      "Plan and design the system used in projects running by CV Adisatya IT Consultant",
      "Develop system used in projects running by CV Adisatya IT Consultant"
    ]
  }
];
</script>