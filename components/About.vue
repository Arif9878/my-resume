<template>
  <section id="about" class="container mx-auto mt-6 px-4">
    <div class="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8">
      <div class="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Profile</p>
          <h2 class="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">Building dependable products with clean execution</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">
            I build software that balances product needs, engineering quality, and delivery speed. My background spans
            backend services, cloud-based systems, data-driven applications, and modern web interfaces for both internal
            teams and end users.
          </p>
          <p class="mt-4 text-base leading-7 text-slate-600">
            I am comfortable moving from architecture and API design into implementation, collaboration, and production
            support. Most of my work focuses on creating systems that are scalable, maintainable, and easy for users to
            work with every day.
          </p>
        </div>

        <div class="rounded-2xl bg-slate-50 p-6">
          <h3 class="text-lg font-semibold text-slate-900">Highlights</h3>
          <ul class="mt-4 space-y-3">
            <li
              v-for="item in highlights"
              :key="item"
              class="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"
            >
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  'Experienced in fintech, public service, and operational platform development.',
  'Strong in backend design, API integration, and modern JavaScript application delivery.',
  'Comfortable working across product planning, implementation, and iterative improvement.',
];
</script>
