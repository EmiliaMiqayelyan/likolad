<template>
  <div>
    <div>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'primevue/resources/themes/aura-light-green/theme.css'

useSeoMeta({
  title: 'Likolad',
  ogTitle: 'Likolad',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url("primevue/resources/themes/aura-light-green/theme.css");
@import 'primeflex/primeflex.scss';
@import "primeicons/primeicons.css";
@import "global.css";

body {
  background-color: var(--black);
  color: var(--white);
  font-family: Montserrat, sans-serif;
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

</style>
