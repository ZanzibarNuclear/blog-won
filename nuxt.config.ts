// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/ui'],
  image: {
    format: ['webp']
  },
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex'],
      anchorLinks: false
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