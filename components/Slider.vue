<template>
  <div>
    <div class="container">
      <div class="wrapper">
        <div
            v-for="(image, index) in images"
            :key="index"
            :class="['item', { active: index === currentIndex }]"
        >
          <img :src="image.src" alt="Chocolate Image" />
        </div>
        <svg viewBox="0 0 300 300">
          <circle id="holder" class="st0" cx="151" cy="151" r="150"/>
        </svg>
      </div>
    </div>
    <div class="container" style="text-align: center;">
      <button @click="prevSlide">Prev</button>
      <button @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import image1 from '../assets/likolad-img1.svg';
import image2 from '../assets/likolad-img2.svg';
import image3 from '../assets/likolad-img3.svg';
import image4 from '../assets/likolad-img1.svg';
import image5 from '../assets/likolad-img2.svg';
import image6 from '../assets/likolad-img3.svg';

gsap.registerPlugin(MotionPathPlugin);

export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: image1 },
        { src: image2 },
        { src: image3 },
        { src: image4 },
        { src: image5 },
        { src: image6 }
      ],
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

      let items = gsap.utils.toArray(".item"),
          numItems = items.length,
          itemStep = 1 / numItems,
          wrapProgress = gsap.utils.wrap(0, 1),
          snap = gsap.utils.snap(itemStep),
          wrapTracker = gsap.utils.wrap(0, numItems),
          tracker = this.tracker;

      gsap.set(items, {
        motionPath: {
          path: circlePath,
          align: circlePath,
          alignOrigin: [0.5, 0.5],
          end: i => i / items.length
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
          item: value => wrapTracker(numItems - Math.round(value))
        }
      }, 0);

      items.forEach((el, i) => {
        el.addEventListener("click", () => {
          const current = tracker.item,
              activeItem = i;

          if (i === current) return;

          document.querySelector('.item.active').classList.remove('active');
          items[activeItem].classList.add('active');

          const diff = current - i;

          if (Math.abs(diff) < numItems / 2) {
            this.moveWheel(diff * itemStep, tl, wrapProgress, snap, items, tracker);
          } else {
            const amt = numItems - Math.abs(diff);

            if (current > i) {
              this.moveWheel(amt * -itemStep, tl, wrapProgress, snap, items, tracker);
            } else {
              this.moveWheel(amt * itemStep, tl, wrapProgress, snap, items, tracker);
            }
          }
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
    prevSlide() {
      this.moveWheel(1 / this.items.length, this.tl, gsap.utils.wrap(0, 1), gsap.utils.snap(1 / this.items.length), this.items, this.tracker);
    },
    nextSlide() {
      this.moveWheel(-1 / this.items.length, this.tl, gsap.utils.wrap(0, 1), gsap.utils.snap(1 / this.items.length), this.items, this.tracker);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  position: relative;
}

.container {
  position: relative;
  right: 0;
  overflow: hidden;
}

.wrapper {
  position: relative;
  width: 500px;
  left: 78%;
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
  width: 800px;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.st0 {
  fill: none;
  stroke: #DBA957;
  stroke-width: 1;
  stroke-miterlimit: 1;
}
</style>
