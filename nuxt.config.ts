// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/ui'],
  css: ['@/assets/css/font.css', '@/assets/css/tailwind.css'],
  image: {
    format: ['webp']
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio/'
    },
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
        remarkPlugins: {
          'remark-math': {}
        },
        rehypePlugins: {
          'rehype-katex': {
            anchorLinks: false
          },
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
    },
  },
  compatibilityDate: '2024-08-08'
})