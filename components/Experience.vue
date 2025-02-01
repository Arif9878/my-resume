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
      "Riset teknologi terbaru untuk pengembangan proyek di Stockbit.",
      "Merancang & mengembangkan sistem backend untuk layanan keuangan."
    ]
  },
  {
    company: "Jabar Digital Service",
    title: "Frontend Developer",
    duration: "September 2019 - Oktober 2021",
    tasks: [
      "Mengembangkan antarmuka web untuk layanan publik berbasis Vue.js.",
      "Menerapkan integrasi API untuk sistem pelaporan digital."
    ]
  }
];
</script>