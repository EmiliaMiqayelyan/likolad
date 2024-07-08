import Aura from '@primevue/themes/aura';


export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        options: {
            unstyled: false
        }
    },
    css: ['primevue/resources/themes/aura-light-green/theme.css']
})