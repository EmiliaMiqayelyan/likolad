<template>
  <div>
    <div v-if="loading && !isAdminPage" class="w-full text-center">
      <ProgressSpinner class="custom-spinner"/>
    </div>

    <div :class="!isAdminPage ? 'flex flex-column justify-content-between h-screen' : ''">
      <Header v-if="!isAdminPage"/>

      <admin v-else-if="isAdminPage"/>
      <NuxtPage/>

      <Footer v-if="!isAdminPage"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Admin from "~/pages/admin-dashboard/index.vue";

useSeoMeta({
  title: 'Likolad',
  ogTitle: 'Likolad',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
})

const loading = ref(true);
const route = useRoute();

const updateBodyBackground = (path: string) => {
  if (path.startsWith('/admin-dashboard')) {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  } else {
    document.body.style.backgroundColor = '#F8F8F8';
    document.body.style.color = '#5A4F45';
  }
};

const isAdminPage = computed(() => {
  return route.path.startsWith('/admin-dashboard');
});

onMounted(() => {
  nextTick(() => {
    loading.value = false;
  });

  updateBodyBackground(route.path);

  watch(() => route.path, (newPath) => {
    updateBodyBackground(newPath);
  });
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Heebo:wght@100..900&display=swap');

body {
  color: var(--text-color);
  font-family: Heebo, sans-serif;
  margin: 0 !important;
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
