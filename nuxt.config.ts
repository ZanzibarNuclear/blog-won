// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    contentHead: true,
    documentDriven: true,
  },
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2024-08-08'
})