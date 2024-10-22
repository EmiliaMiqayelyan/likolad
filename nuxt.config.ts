// nuxt.config.ts
export default defineNuxtConfig({
    ssr: false,
  
    app: {
      head: {
        title: 'Nuxt App',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Nuxt app description' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
      }
    },
  
    css: [
      'primeflex/primeflex.css',
      'primeicons/primeicons.css',
      'primevue/resources/themes/saga-blue/theme.css',
      'primevue/resources/primevue.min.css',
      '@/global.css',
    ],
  
    modules: [
      '@nuxtjs/i18n', 
      '@pinia/nuxt', 
      'nuxt-primevue',
      '@pinia-plugin-persistedstate/nuxt'
    ],
  
    i18n: {
        locales: ['en', 'am'],
        defaultLocale: 'en'
    },
  
    build: {
      transpile: ['primevue'],
    },
  
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/assets/scss/_variables.scss";`
          }
        }
      }
    },
  
    devtools: { enabled: true },
  })