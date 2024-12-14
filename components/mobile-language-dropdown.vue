<template>
  <div class="flex flex-column align-items-center relative mt-3">
    <div @click="toggle" class="flex gap-1">
      <img
          width="24"
          height="24"
          :src="currentFlag"
          :alt="`${currentLanguageName} Flag`"
          class="cursor-pointer"
      />
      <p class="m-0">{{ currentLanguageName }}</p>
    </div>

    <div v-if="menu" ref="menu" class="flex flex-column row-gap-2 ml-6 mt-5 p-2 border-round-xs absolute">
      <div @click="selectLocale('en')" class="flex gap-1">
        <img
            width="24"
            height="24"
            src="@/assets/united-kingdom.png"
            alt="UK Flag"
            class="cursor-pointer"
        />
        <p class="language-text m-0">English</p>
      </div>

      <div @click="selectLocale('am')" class="flex gap-1">
        <img
            width="24"
            height="24"
            src="@/assets/armenia.png"
            alt="Armenia Flag"
            class="cursor-pointer"
        />
        <p class="m-0">Armenian</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ukFlag from '@/assets/united-kingdom.png';
import amFlag from '@/assets/armenia.png';

const menu = ref(false);
const { locale, setLocale } = useI18n();

const toggle = () => {
  menu.value = !menu.value;
};

const selectLocale = (locale) => {
  setLocale(locale);
  menu.value = false;
};

const currentLanguageName = computed(() => {
  return locale.value === 'en' ? 'English' : 'Armenian';
});

const currentFlag = computed(() => {
  return locale.value === 'en' ? ukFlag : amFlag;
});
</script>

<style scoped>
.language-text {
  color: var(--text-color);
}
</style>
