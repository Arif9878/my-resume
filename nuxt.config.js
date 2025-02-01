export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  modules: [
     '@nuxtjs/tailwindcss'
  ],
  compatibilityDate: "2025-01-30",
  css: [
    '~/assets/css/tailwind.css',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
})