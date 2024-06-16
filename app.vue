<template>
  <div>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script>
import 'primevue/resources/themes/aura-light-green/theme.css'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url("primevue/resources/themes/aura-light-green/theme.css");
@import 'primeflex/primeflex.scss';
@import "primeicons/primeicons.css";
@import "global.css";

body{
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
  font-weight: 400; /* Regular weight */
  font-style: normal;
}

/* Add more classes as needed */
.montserrat-bold {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700; /* Bold weight */
  font-style: normal;
}

</style>
