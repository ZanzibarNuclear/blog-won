// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/tailwindcss'],
  image: {
    format: ['webp']
  },
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex'],
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
        default: 'night-owl',
        dark: 'aurora-x',
        sepia: 'monokai'
      }
    },
  },
  compatibilityDate: '2024-08-08'
})
