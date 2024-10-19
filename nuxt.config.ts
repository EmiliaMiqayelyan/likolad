// nuxt.config.ts
export default defineNuxtConfig({
    // Set to 'universal' or 'spa' depending on the app mode
    ssr: false, // since your project is client-side only
  
    // Global page headers
    app: {
      head: {
        title: 'Nuxt App',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Nuxt app description' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      }
    },
  
    // CSS configuration
    css: [
      'primeflex/primeflex.css',
      'primeicons/primeicons.css',
      'primevue/resources/themes/saga-blue/theme.css',
      'primevue/resources/primevue.min.css',
      '@/global.css', // Custom global SCSS if needed
    ],
  
    // Build modules
    modules: [
      '@nuxtjs/i18n', 
      '@pinia/nuxt', 
      'nuxt-primevue',
      '@pinia-plugin-persistedstate/nuxt'
    ],
  
    // i18n configuration
    i18n: {
        locales: ['en', 'am'],
        defaultLocale: 'en'
    },
  
    // Build configuration
    build: {
      transpile: ['primevue'],
    },
  
    // Vite build options (optional)
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/assets/scss/_variables.scss";` // Your SCSS variables
          }
        }
      }
    },
  
    // Build and development settings
    devtools: { enabled: true },
  })