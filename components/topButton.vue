<template>
  <div id="app" v-cloak>
    <transition name="fade">
      <div id="pagetop" class="top-btn fixed cursor-pointer border-round-sm" v-show="scY > 300" @click="toTop">
       <img src="@/assets/top-btn.svg" class="w-4rem h-4rem" alt="" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },

    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },
}
</script>

<style>
.top-btn{
  bottom: 3%;
  right: 2%;
}
</style>