export default defineNuxtConfig({
    modules: [
        'nuxt-primevue',
        '@nuxtjs/i18n',
        ['@pinia/nuxt', {disableVuex: false}]
    ],

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

    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**'],
    },

    app: {
        head: {
            title: 'Likolad',
            meta: [
                // other meta tags...
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'http://localhost:3000/_nuxt/assets/likolad-logo.svg' },
            ],
        },
    },
})