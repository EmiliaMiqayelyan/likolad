<template>
  <div class="landing">
    <div class="flex justify-content-between">
      <div class="content relative flex flex-column">
        <div class="flex flex-column row-gap-5">
          <div class="content-heading">
            <p class="sm:text-5xl text-3xl font-medium line-height-2 m-0">
              Welcome to the
              <span class="about-text sm:text-5xl text-3xl font-medium">World of Likolad</span>
            </p>
          </div>
          <p class="w-full text-base font-normal">
            Experience Likolad: the ultimate chocolate delight brought to you by our passionate Master Chocolatier.
            Since 2021, our exquisite creations have provided moments of bliss for you to savour.
          </p>

          <button class="space-btn w-15rem border-round-md h-3rem font-bold text-base cursor-pointer">
            My space
          </button>

          <p class="mt-3 font-medium">
            The finer details make all the difference in chocolate making. The same
            is true in life։ small gestures of kindness make a big difference.
          </p>
        </div>

        <div class="small-img w-22rem flex-wrap justify-content-between row-gap-4 mt-5 cursor-pointer">
          <div v-for="(image, index) in smallImg">
            <img
                :src="image.src"
                alt=""
            />
          </div>
        </div>

        <button
            class="chocolate-btn border-1 border-round-lg w-16rem font-medium mt-5 text-base absolute cursor-pointer">
          Create my chocolate
        </button>
      </div>

      <LazySlidersSlider class="chocolate-slider w-full"/>
    </div>

    <div class="discover">
      <div class="discover-sweets flex justify-content-center align-items-center flex-column">
        <div>
          <span class="about-text sm:text-4xl text-2xl font-medium">We </span>
          <span class="sm:text-4xl text-2xl font-medium">are</span>
        </div>

        <div class="w-full mt-6">
          <div class="flex justify-content-between lg:flex-row flex-column-reverse row-gap-3">
            <div>
              <div>
                <span class="text-2xl">The advantage of </span>
                <span class="about-text text-2xl">Likolad</span>
              </div>

              <p class="we-are text-sm lg:mt-6 mt-3">
                A combination of the highest ingredients, unparalleled care
                and mastery that is reflected in the making
                of each chocolate, resulting in a smooth and shiny product. That's what makes us stand out, unique and
                in the center of attention.
              </p>
            </div>
            <div>
              <img class="w-full" src="@/assets/discover-img1.svg" alt=""/>
            </div>
          </div>

          <hr class="discover-hr my-6"/>

          <div class="flex justify-content-between lg:flex-row flex-column row-gap-3">
            <div class="lg:text-left text-right">
              <img class="w-full" src="@/assets/discover-img2.svg" alt=""/>
            </div>
            <div class="flex flex-column align-items-end">
              <div>
                <span class="about-text text-2xl">Royalads </span>
                <span class="text-2xl">chocolatier product</span>
              </div>

              <p class="we-are text-sm mt-6 text-right">
                Likolad's first product, which was obtained as a result of
                many experiments, evaluating the taste, beauty and aesthetics. It is made from high quality Belgian
                chocolate raw materials, selected ingredients and most importantly with great care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-us py-8 flex justify-content-center flex-column align-items-center">
      <div class="flex gap-3">
        <span class="sm:text-5xl text-2xl font-medium">What</span>
        <span class="about-text sm:text-5xl text-2xl font-medium">we do</span>
      </div>
      <div class="mt-6 flex xl:justify-content-between w-full flex-wrap justify-content-center gap-3">
        <div class="flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg p-5">
          <h2 class="font-bold">Gorgalad</h2>
          <img width="224" height="280" class="bg-cover" src="@/assets/about3.jpg" alt=""/>
          <p class="w-14rem text-center line-height-3">
            Experience the richness of pure chocolate, delicately adorned with a handcrafted marzipan pattern.
          </p>
        </div>

        <div class="flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg p-5">
          <h2 class="font-bold">Flowery</h2>
          <img width="224" height="280" class="bg-cover" src="@/assets/about2.jpg" alt=""/>
          <p class="w-14rem text-center line-height-3">
            A delightful blend of pure chocolate, almonds, and pumpkin seeds, completed by the sweet of cranberries.
          </p>
        </div>

        <div class="flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg p-5">
          <h2 class="font-bold">Chicolad</h2>
          <img width="224" height="280" class="bg-cover" src="@/assets/about1.jpg" alt=""/>
          <p class="w-14rem text-center line-height-3">
            Royal dates, cashew nuts, and rich bitter chocolate combine for a luxurious taste experience.
          </p>
        </div>
      </div>
    </div>

    <LazySlidersTestimonialSlider/>

    <div class="collections py-8 flex justify-content-center flex-column align-items-center">
      <p class="about-text sm:text-5xl text-2xl font-medium line-height-1 text-center">Our Chocolate <span
          class="sm:text-5xl text-2xl font-medium text-white">collections</span></p>

      <div class="flex lg:justify-content-between justify-content-center w-full mt-6 flex-wrap lg:gap-0 gap-4">
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
</script>

<style>
.landing {
  line-height: 24px;
}

.discover {
  padding: 4% 14%;
}

.content {
  padding-left: 14%;
  padding-top: 14rem;
}

.we-are {
  width: 73%;
}

.space-btn {
  background-color: var(--orange);
  color: var(--brown);
  border: 2px solid var(--orange);
}

.space-btn:hover {
  background-color: var(--black);
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

.about-text {
  color: var(--dark-orange);
}

.about-us, .testimonials, .collections {
  padding-left: 14%;
  padding-right: 14%;
}

.about-section, .discover-hr {
  border-color: #EEC574;
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
  .chocolate-slider {
    display: none;
  }

  .small-img {
    display: flex !important;
  }
}

@media only screen and (max-width: 1320px) {
  .discover, .about-us, .collections, .testimonials, .content {
    padding: 4% 6%;
  }

  .content {
    padding: 11rem 6%;
  }
}

@media only screen and (max-width: 500px) {
  .we-are {
    width: 100%;
  }

  .chocolate-btn {
    top: 53rem;
  }
}
</style>