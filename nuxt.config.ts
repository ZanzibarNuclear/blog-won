// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/ui'],
  css: ['@/assets/css/font.css', '@/assets/css/tailwind.css', '@/assets/css/katex.0.16.8.min.css'],
  image: {
    format: ['webp'],
    provider: 'ipx'
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
          'remark-math': {},
        },
        rehypePlugins: {
          'rehype-katex': {
          },
        },
        highlight: {
          langs: [
            'javascript',
            'js',
            'json',
            'kotlin',
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
            default: 'catppuccin-latte',
            dark: 'catppuccin-macchiato',
            sepia: 'monokai'
          }
        },
      },
    },
  },
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      autoSubfolderIndex: false,
      routes: ['/']
    }
  },
  experimental: {
    appManifest: true,
  },
  compatibilityDate: '2025-01-23'
})