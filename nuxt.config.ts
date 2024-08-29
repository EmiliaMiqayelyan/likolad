export default defineNuxtConfig({
  modules: ['nuxt-primevue', '@nuxtjs/i18n'],

  primevue: {
      cssLayerOrder: 'reset, primevue'
  },

  i18n: {
          locales: ['en', 'am'],
         defaultLocale: 'en'
  },

  css: [
      'primeicons/primeicons.css',
      'primeflex/primeflex.css',
  ],
})