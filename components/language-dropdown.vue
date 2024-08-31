<template>
  <div class="flex flex-column align-items-center relative">
    <i
        class="pi pi-globe cursor-pointer text-2xl"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
    />
    <div v-if="menu" ref="menu" class="flex flex-column row-gap-2 mt-5 bg-white p-2 border-round-xs absolute">
      <img
          @click="selectLocale('en')"
          width="24"
          height="24"
          src="@/assets/united-kingdom.png"
          alt="UK Flag"
          class="cursor-pointer"
      />
      <img
          @click="selectLocale('am')"
          width="24"
          height="24"
          src="@/assets/armenia.png"
          alt="Armenia Flag"
          class="cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup>
const menu = ref(false);
const {setLocale} = useI18n();

const toggle = () => {
  menu.value = !menu.value;
};

const selectLocale = (locale) => {
  setLocale(locale);
  menu.value = false;
};
</script>
