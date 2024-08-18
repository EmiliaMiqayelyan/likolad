export default defineNuxtConfig({
  modules: [
      'nuxt-primevue'
  ],

  primevue: {
      cssLayerOrder: 'reset, primevue'
  },

  css: [
      'primeicons/primeicons.css',
      'primeflex/primeflex.css',
  ],
})