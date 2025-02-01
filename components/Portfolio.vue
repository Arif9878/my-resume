<template>
    <section class="container mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Proyek yang Pernah Dikerjakan</h2>
      <ul class="space-y-4">
        <li v-for="project in projects" :key="project.name" class="border-l-4 border-green-500 pl-4">
          <h3 class="font-bold">{{ project.name }} - {{ project.client }}</h3>
          <p class="text-sm text-gray-600">{{ project.duration }}</p>
          <p class="mt-2">{{ project.description }}</p>
        </li>
      </ul>
    </section>
</template>   


<script setup>
const projects = [
  {
    name: "Sistem Manajemen SOP",
    client: "Kejaksaan Agung RI",
    duration: "2018 - 2019",
    description: "Aplikasi web untuk pengelolaan dokumen SOP berbasis React.js."
  },
  {
    name: "Pikobar Pelaporan Covid-19",
    client: "Jawa Barat",
    duration: "2020 - 2021",
    description: "Sistem pelaporan Covid-19 berbasis Vue.js."
  }
];
</script>