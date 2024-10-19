export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        console.error(error);
        
      // handle error, e.g. report to a service
    }
  
    // Also possible
    nuxtApp.hook('vue:error', (error, instance, info) => {
        console.error   (error);
        
      // handle error, e.g. report to a service
    })
  })
  