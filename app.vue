<template>
  <div>
    <div v-if="loading" class="w-full text-center">
      <ProgressSpinner class="custom-spinner"/>
    </div>
    <div v-else>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/themes/saga-blue/theme.css'

useSeoMeta({
  title: 'Likolad',
  ogTitle: 'Likolad',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const loading = ref(true);
const route = useRoute();

onMounted(() => {
  nextTick(() => {
    loading.value = false;
  });

  updateBodyBackground(route.path);

  watch(() => route.path, (newPath) => {
    updateBodyBackground(newPath);
  });
});

function updateBodyBackground(path: string) {
  if (path === '/admin-dashboard') {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = '#080403';
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import 'primeflex/primeflex.scss';
@import "primeicons/primeicons.css";
@import "global.css";

body {
  color: var(--white);
  font-family: Montserrat, sans-serif;
  margin: 0;
}

@font-face {
  font-family: 'Montserrat', sans-serif;
  src: url('@/static/Montserrat-Black.ttf') format('truetype');
}

.montserrat-regular {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-style: normal;
}

.montserrat-bold {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-style: normal;
}

button {
  cursor: pointer;
}

.p-progress-spinner-svg {
  width: 4rem !important;
  height: 4rem !important;
  transform: none !important;
}

.custom-spinner {
  stroke: #ff0000 !important;
}
</style>
