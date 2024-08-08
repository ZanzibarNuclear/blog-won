// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    contentHead: true,
    documentDriven: {
      layoutFallbacks: ['theme']
    },
    highlight: {
      langs: [
        'javascript',
        'js',
        'json',
        'md',
        'python',
        'shell',
        'sql',
        'ts',
        'typescript',
        'vue',
        'yaml',
      ],
      theme: {
        default: 'catppuccin-macchiato',
        dark: 'aurora-x'
      }
    }
  },
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2024-08-08'
})
