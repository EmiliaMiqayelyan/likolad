<template>
  <div class="pt-8">
    <div class="container relative">
      <div>
        <h1 class="slider-name">
          {{ chocolatesName[currentIndex].name }}
        </h1>
      </div>
      <div class="wrapper">
        <div v-for="(image, index) in images"
             :key="index"
             :class="['item', { active: index === currentIndex }]">
          <div>
            <img :src="image.src" class="cursor-pointer" alt="Chocolate Image"/>
          </div>
        </div>

        <svg viewBox="0 0 300 300">
          <circle id="holder" class="st0" cx="151" cy="151" r="150"/>
        </svg>
      </div>
    </div>

    <div class="nav-buttons">
      <img src="@/assets/icons/arrow-top.svg" @click="nextSlide" class="arrow-top cursor-pointer" alt=""/>
      <img src="@/assets/icons/arrow-bottom.svg" @click="prevSlide" class="arrow-bottom cursor-pointer" alt=""/>
    </div>

    <div class="small-images w-24rem flex flex-wrap justify-content-between row-gap-4 mt-5 absolute cursor-pointer">
      <div v-for="(image, index) in smallImages" :key="'small-' + index">
        <img
            :src="image.src"
            :class="{ active: index === currentIndex }"
            alt=""
            @click="setActiveSlide(index)"
        />
        <hr v-if="index === currentIndex" class="small-image-hr">
      </div>
    </div>
  </div>
</template>

<script>
import {gsap} from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import image1 from "@/assets/likolad-img1.svg";
import image2 from "@/assets/likolad-img2.svg";
import image3 from "@/assets/likolad-img3.svg";
import image4 from "@/assets/likolad-img4.svg";
import image5 from "@/assets/likolad-img5.svg";
import image6 from "@/assets/likolad-img6.svg";
import image7 from "@/assets/likolad-img7.svg";
import image8 from "@/assets/likolad-img8.svg";

import smallImg1 from "@/assets/small/likolad-img-small1.svg";
import smallImg2 from "@/assets/small/likolad-img-small2.svg";
import smallImg3 from "@/assets/small/likolad-img-small3.svg";
import smallImg4 from "@/assets/small/likolad-img-small4.svg";
import smallImg5 from "@/assets/small/likolad-img-small5.svg";
import smallImg6 from "@/assets/small/likolad-img-small6.svg";
import smallImg7 from "@/assets/small/likolad-img-small7.svg";
import smallImg8 from "@/assets/small/likolad-img-small8.svg";

gsap.registerPlugin(MotionPathPlugin);

export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: image6 },
        { src: image8 },
        { src: image2 },
        { src: image7 },
        { src: image4 },
        { src: image1 },
        { src: image5 },
        { src: image3 }
      ],

      smallImages: [
        {src: smallImg1},
        {src: smallImg5},
        {src: smallImg3},
        {src: smallImg6},
        {src: smallImg8},
        {src: smallImg2},
        {src: smallImg7},
        {src: smallImg4}
      ],

      chocolatesName: [
        {name: "Morfet"},
        {name: "Loralad"},
        {name: "Peaches"},
        {name: "Flowery"},
        {name: "Rose chocolates"},
        {name: "Triolads"},
        {name: "Chicolad"},
        {name: "True feelings"}
      ],

      tl: null,
      items: [],
      tracker: {item: 0}
    };
  },

  mounted() {
    this.initAnimation();
  },

  methods: {
    initAnimation() {
      const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
      circlePath.id = "circlePath";
      document.querySelector("svg").prepend(circlePath);

      const items = gsap.utils.toArray(".item");
      const numItems = items.length;
      const itemStep = 1 / numItems;
      const wrapProgress = gsap.utils.wrap(0, 1);
      const snap = gsap.utils.snap(itemStep);
      const wrapTracker = gsap.utils.wrap(0, numItems);
      const tracker = this.tracker;

      gsap.set(items, {
        motionPath: {
          path: circlePath,
          align: circlePath,
          alignOrigin: [0.5, 0.5],
          end: (i) => i / items.length
        },
        scale: 0.9
      });

      const tl = gsap.timeline({paused: true, reversed: true});

      tl.to('.wrapper', {
        rotation: 360,
        transformOrigin: 'center',
        duration: 1,
        ease: 'none'
      });

      tl.to(items, {
        rotation: "-=360",
        transformOrigin: 'center center',
        duration: 1,
        ease: 'none'
      }, 0);

      tl.to(tracker, {
        item: numItems,
        duration: 1,
        ease: 'none',
        modifiers: {
          item: (value) => wrapTracker(numItems - Math.round(value))
        }
      }, 0);

      items.forEach((el, i) => {
        el.addEventListener("click", () => {
          const current = tracker.item;
          const activeItem = i;

          if (i === current) return;

          document.querySelector('.item.active').classList.remove('active');
          items[activeItem].classList.add('active');

          const diff = current - i;
          const amt = numItems - Math.abs(diff);

          this.moveWheel((diff < 0 ? amt : -amt) * itemStep, tl, wrapProgress, snap, items, tracker);
          this.setActiveSlide(activeItem);
        });
      });

      this.tl = tl;
      this.items = items;
    },

    moveWheel(amount, tl, wrapProgress, snap, items, tracker) {
      const progress = tl.progress();
      tl.progress(wrapProgress(snap(tl.progress() + amount)));
      const next = tracker.item;
      tl.progress(progress);

      document.querySelector('.item.active').classList.remove('active');
      items[next].classList.add('active');

      gsap.to(tl, {
        progress: snap(tl.progress() + amount),
        modifiers: {
          progress: wrapProgress
        }
      });
    },

    setActiveSlide(index) {
      this.currentIndex = index;

      const tl = this.tl;
      const items = this.items;
      const itemStep = 1 / items.length;
      const wrapProgress = gsap.utils.wrap(0, 1);
      const snap = gsap.utils.snap(itemStep);
      const tracker = this.tracker;

      const current = tracker.item;
      const diff = current - index;
      const amt = items.length - Math.abs(diff);

      this.moveWheel((diff < 0 ? amt : -amt) * itemStep, tl, wrapProgress, snap, items, tracker);

      this.updateChocolateName();
    },

    prevSlide() {
      const numItems = this.items.length;
      const itemStep = 1 / numItems;
      const wrapProgress = gsap.utils.wrap(0, 1);
      const snap = gsap.utils.snap(itemStep);

      this.moveWheel(1 / numItems, this.tl, wrapProgress, snap, this.items, this.tracker);

      this.currentIndex = (this.currentIndex - 1 + numItems) % numItems;

      this.updateChocolateName();
    },

    nextSlide() {
      const numItems = this.items.length;
      const itemStep = 1 / numItems;
      const wrapProgress = gsap.utils.wrap(0, 1);
      const snap = gsap.utils.snap(itemStep);

      this.moveWheel(-1 / numItems, this.tl, wrapProgress, snap, this.items, this.tracker);

      this.currentIndex = (this.currentIndex + 1) % numItems;

      this.updateChocolateName();
    },

    updateChocolateName() {
      document.querySelector('.slider-name').innerText = this.chocolatesName[this.currentIndex].name;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  position: relative;
}

.small-images {
  left: 14%;
  top: 555px;
}

.container {
  position: relative;
  overflow: hidden;
  height: 810px;
  width: 100%;
}

.wrapper {
  position: relative;
  width: 28rem;
  left: 90%;
  top: -25%;
  transform: translateX(-70%);
}

.item {
  width: 220px;
  height: 220px;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  border-radius: 100%;
  z-index: 1;
  overflow: hidden;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

svg {
  height: 800px;
  overflow: visible;
  width: 815px;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.st0 {
  fill: #241F1C;
  stroke: var(--dark-orange);
  stroke-width: 1;
  stroke-miterlimit: 1;
}

.nav-buttons {
  height: auto;
}

.arrow-top {
  position: absolute;
  top: 7%;
  right: 2%;
}

.arrow-bottom {
  position: absolute;
  top: 21%;
  right: 45rem;
}

.slider-name {
  position: absolute;
  bottom: 15%;
  right: 10%;
  z-index: 1;
  color: var(--dark-orange);
}

.small-images img.active + hr {
  display: block;
  margin-top: 10px;
  border-color: var(--dark-orange);
}

@media only screen and (max-width: 1600px) {
  .small-images {
    left: 6%;
  }
}
</style>
