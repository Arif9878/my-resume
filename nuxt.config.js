export default defineNuxtConfig({
  target: 'static',
  modules: [
     '@nuxtjs/tailwindcss'
  ],
  compatibilityDate: "2025-01-30",
  runtimeConfig: {
    public: {
      cloudflareAnalyticsToken: process.env.NUXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN || '',
    },
  },
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
