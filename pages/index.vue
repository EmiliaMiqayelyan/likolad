<template>
  <div class="landing">
    <div class="flex justify-content-between">
      <div class="content relative flex flex-column">
        <div class="flex flex-column row-gap-5">
          <p class="content-heading sm:text-5xl text-3xl font-medium line-height-2 m-0">
            {{ $t('welcome.welcome1') }}
          </p>

          <p class="w-full text-base font-normal">
            {{ $t('welcome.welcomeText') }}
          </p>

          <!--          <button class="space-btn w-15rem border-round-md h-3rem font-bold text-base cursor-pointer">-->
          <!--            {{ $t('welcome.mySpace') }}-->
          <!--          </button>-->

          <p class="mt-0 font-medium">
            {{ $t('welcome.finalDetails') }}
          </p>
        </div>

        <div class="small-img w-full sm:w-21rem flex-wrap justify-content-between row-gap-4 mt-5 cursor-pointer">
          <div v-for="image in smallImg">
            <img class="w-4rem sm:w-5rem h-4rem sm:h-5rem"
                :src="image.src"
                alt=""
            />
          </div>
        </div>

        <!--        <button-->
        <!--            class="chocolate-btn border-1 border-round-lg w-16rem font-medium mt-5 text-base absolute cursor-pointer">-->
        <!--          {{ $t('welcome.createChocolate') }}-->
        <!--        </button>-->
      </div>

      <LazySlidersSlider v-if="isDesktop" class="chocolate-slider w-full"/>
    </div>

    <div class="discover">
      <div class="discover-sweets flex justify-content-center align-items-center flex-column">
        <span class="we-are-heading sm:text-5xl text-2xl font-medium">{{ $t('weAre.weAre1') }} </span>

        <div class="w-full mt-6">
          <div class="flex justify-content-between lg:flex-row flex-column-reverse row-gap-3">
            <div>
              <span class="text-2xl">{{ $t('weAre.weAreHeading1') }} </span>

              <p class="we-are text-sm lg:mt-6 mt-3">
                {{ $t('weAre.weAreText1') }}
              </p>
            </div>
            <div>
              <img class="w-full sm:w-20rem h-20rem sm:h-12rem" style="object-fit: cover;" src="@/assets/discover-img1.jpg" alt=""/>
            </div>
          </div>

          <div class="flex justify-content-between lg:flex-row flex-column row-gap-3 mt-4 sm:mt-7">
            <div class="lg:text-left text-right">
              <img class="w-full sm:w-20rem h-20rem sm:h-12rem" style="object-fit: cover;" src="@/assets/discover-img2.jpg" alt=""/>
            </div>
            <div class="flex flex-column align-items-end">
              <span class="text-2xl">{{ $t('weAre.weAreHeading2') }}</span>

              <p class="we-are text-sm mt-6 text-right">
                {{ $t('weAre.weAreText2') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-us py-8 flex justify-content-center flex-column align-items-center">
      <span class="we-do-heading sm:text-5xl text-2xl font-medium">{{ $t('whatWeDo.whatWeDo') }}</span>

      <div class="mt-5 sm:mt-8 flex xl:justify-content-between w-full flex-wrap justify-content-center gap-3 row-gap-5">
        <div class="about-section flex flex-column w-full sm:w-auto align-items-center">
          <img height="280" class="about-img w-full sm:w-20rem border-round-sm" src="@/assets/about3.jpg" alt=""/>
          <h2 class="font-bold">{{ $t('whatWeDo.whatWeDoHeading1') }}</h2>
          <p class="w-full sm:w-20rem text-center m-0 line-height-3">
            {{ $t('whatWeDo.whatWeDoText1') }}
          </p>
        </div>

        <div class="about-section flex flex-column w-full sm:w-auto align-items-center">
          <img height="280" class="about-img w-full sm:w-20rem border-round-sm" src="@/assets/about2.jpg" alt=""/>
          <h2 class="font-bold">{{ $t('whatWeDo.whatWeDoHeading2') }}</h2>
          <p class="w-full sm:w-20rem text-center m-0 line-height-3">
            {{ $t('whatWeDo.whatWeDoText2') }}
          </p>
        </div>

        <div class="about-section flex flex-column w-full sm:w-auto align-items-center">
          <img height="280" class="about-img w-full sm:w-20rem border-round-sm" src="@/assets/about1.jpg" alt=""/>
          <h2 class="font-bold">{{ $t('whatWeDo.whatWeDoHeading3') }}</h2>
          <p class="w-full sm:w-20rem text-center m-0 line-height-3">
            {{ $t('whatWeDo.whatWeDoText3') }}
          </p>
        </div>
      </div>
    </div>

    <LazySlidersTestimonialSlider/>

    <div class="collections py-6 flex justify-content-center flex-column align-items-center">
      <p class="collections-heading sm:text-5xl text-2xl font-medium line-height-1 text-center">
        {{ $t('collections.ourCollectionHeading') }}</p>

      <div class="flex lg:justify-content-between justify-content-center w-full mt-5 sm:mt-6 flex-wrap lg:gap-0 gap-4">
        <img class="sm:w-18rem h-17rem border-round-lg w-full" src="@/assets/collections2.jpg" alt=""/>
        <img class="sm:w-18rem h-17rem border-round-lg w-full" src="@/assets/collections3.jpg" alt=""/>
        <img class="sm:w-18rem h-17rem border-round-lg w-full" src="@/assets/collections1.jpg" alt=""/>
      </div>
    </div>
  </div>
</template>

<script setup>
import smallImg1 from "assets/small/likolad-img-small1.svg";
import smallImg2 from "assets/small/likolad-img-small2.svg";
import smallImg3 from "assets/small/likolad-img-small3.svg";
import smallImg4 from "assets/small/likolad-img-small4.svg";
import smallImg5 from "assets/small/likolad-img-small5.svg";
import smallImg6 from "assets/small/likolad-img-small6.svg";
import smallImg7 from "assets/small/likolad-img-small7.svg";
import smallImg8 from "assets/small/likolad-img-small8.svg";

const smallImg = [
  {src: smallImg1},
  {src: smallImg2},
  {src: smallImg3},
  {src: smallImg4},
  {src: smallImg5},
  {src: smallImg6},
  {src: smallImg7},
  {src: smallImg8}
]

const isDesktop = ref(false)

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 1024
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.landing {
  line-height: 24px;
}

.discover {
  padding: 4% 14%;
}

.content {
  padding-left: 14%;
  padding-top: 11rem;
}

.content-heading, .we-are-heading, .we-do-heading, .collections-heading {
  font-family: "Abril Fatface", cursive;
}

.we-are {
  width: 73%;
}

.about-img {
  object-fit: cover;
}

.space-btn {
  background-color: var(--orange);
  color: var(--brown);
  border: 2px solid var(--orange);
}

.space-btn:hover {
  background-color: var(--main-color);
  color: var(--dark-orange);
  transition: 0.5s;
}

.chocolate-btn {
  border-color: var(--dark-orange);
  background: none;
  color: var(--dark-orange);
  height: 40px;
  bottom: 0;
  top: 49rem;
}

.chocolate-btn:hover {
  background-color: var(--dark-orange);
  color: var(--brown);
  transition: 0.5s;
  font-weight: 600 !important;
}

.about-us, .collections {
  padding-left: 14%;
  padding-right: 14%;
}

.about-section {
  border-color: var(--text-color);
}

.small-img {
  display: none !important;
}

@media only screen and (max-width: 1600px) {
  .content {
    padding-left: 6%;
  }
}

@media only screen and (max-width: 1400px) {
  .small-img {
    display: flex !important;
  }
}

@media only screen and (max-width: 1320px) {
  .discover, .about-us, .collections, .content {
    padding: 4% 6%;
  }

  .content {
    padding: 11rem 6% 2rem 6%;
  }
}

@media only screen and (max-width: 500px) {
  .we-are {
    width: 100%;
  }
}
</style>