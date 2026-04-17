<template>
  <header class="relative overflow-hidden bg-slate-950 text-white">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.28),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.24),_transparent_32%)]"
    ></div>
    <div class="relative container mx-auto px-4 py-16 sm:py-20">
      <div class="grid items-center gap-8 lg:grid-cols-[auto,1fr]">
        <img
          src="https://avatars.githubusercontent.com/u/20775950?s=400&u=d35035b56c45aed0c9419b49c30f63e1e55f7715&v=4"
          alt="Arif Wicaksono profile photo"
          class="h-32 w-32 rounded-3xl border border-white/20 object-cover shadow-2xl shadow-sky-950/40 ring-4 ring-white/10 sm:h-40 sm:w-40"
        />

        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300"
          >
            Resume Profile
          </p>
          <h1 class="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Arif Wicaksono
          </h1>
          <p class="mt-3 text-lg text-slate-200 sm:text-xl">
            Software Engineer
          </p>
          <p class="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Software engineer focused on backend systems, fintech platforms, and
            modern web applications. Experienced in building reliable services,
            internal tools, and user-facing products from system design through
            production delivery.
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:arifboyz16@gmail.com"
              class="rounded-full bg-white px-5 py-2.5 font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Email Me
            </a>
            <a
              href="https://github.com/Arif9878"
              target="_blank"
              rel="noreferrer"
              class="rounded-full border border-white/20 px-5 py-2.5 font-medium text-white transition hover:border-sky-300 hover:text-sky-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/arif-wicaksono-3b0a7815a"
              target="_blank"
              rel="noreferrer"
              class="rounded-full border border-white/20 px-5 py-2.5 font-medium text-white transition hover:border-sky-300 hover:text-sky-200"
            >
              LinkedIn
            </a>
            <a
              href="/CurriculumVitae.pdf"
              class="rounded-full bg-emerald-500 px-5 py-2.5 font-medium text-white transition hover:bg-emerald-400"
            >
              Download CV
            </a>
          </div>

          <nav class="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
            <a
              v-for="link in navLinks"
              :key="link.label"
              :href="link.href"
              class="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-sky-300 hover:text-sky-200"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <article
          v-for="item in highlights"
          :key="item.label"
          class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
        >
          <p class="text-sm text-slate-300">{{ item.label }}</p>
          <p class="mt-2 text-lg font-semibold">{{ item.value }}</p>
        </article>
      </div>
    </div>
  </header>
</template>

<script setup>
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  // { label: 'Experience', value: '8+ years building software products' },
  {
    label: "Core focus",
    value: "Backend engineering, APIs, and product delivery",
  },
  {
    label: "Preferred stack",
    value: "Go, Python, Vue/Nuxt, PostgreSQL, Docker",
  },
];
</script>
