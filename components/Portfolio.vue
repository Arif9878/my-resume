<template>
    <section class="container mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Projects Undertaken</h2>
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
    name: "Digiteam",
    client: "Jawa Barat",
    duration: "2020 - 2021",
    description: "The project goal is to create a web application that aims to facilitate employee attendance, making monthly reports and submitting permits."
  },
  {
    name: "Pikobar Pelaporan Covid-19",
    client: "Jawa Barat",
    duration: "2020 - 2021",
    description: "The aim of the project is to create a web application that aims to facilitate reporting and tracking of Covid-19 patients."
  },
  {
    name: "Sapawarga",
    client: "Jawa Barat",
    duration: "2019 - 2020",
    description: "The project objective is to create web application to aims to facilitate citizens in conveying their aspirations, getting information, and getting public services through a gadget that has been facilitated."
  },
  {
    name: "Sistem Manajemen SOP",
    client: "Kejaksaan Agung RI",
    duration: "2018 - 2019",
    description: "The project objective is to create web application to manage SOP document for Kejaksaan Agung RI. The application should help user to provide SOP Flow, Document Approval Flow, Flow Chart Diagram, and tracking document from creation to production."
  },
  {
    name: "Sistem Informasi Manajemen Pelayanan Terpadu Satu Pintu Kabupaten Kediri",
    client: "Kabupaten Kediri",
    duration: "2017 - 2017",
    description: "Sistem Informasi Manajemen Pelayanan Terpadu Satu Pintu Kabupaten Kediri, is a system designed to apply for permits online and manage licensing data."
  },
  {
    name: "Sistem Informasi Perhubungan Kabupaten Kediri",
    client: "Kabupaten Kediri",
    duration: "2017 - 2017",
    description: "Sistem Informasi Perhubungan Kabupaten Kediri, is a system designed to collect data on transportation services."
  },
];
</script>