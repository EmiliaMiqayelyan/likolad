<template>
  <div class="testimonials py-8 flex justify-content-center flex-column align-items-center">
    <h1 class="text-5xl font-medium">Testimonials</h1>

    <div class="slider-container">
      <div class="slider mt-6" :style="sliderStyle">
        <div
            class="testimonial flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg p-7">
          <h2 class="font-bold">What our buyers say</h2>
          <p class="buyers-text text-center font-medium">{{ testimonials[currentTestimonial] }}</p>
        </div>
        <div
            class="testimonial flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg p-7">
          <h2 class="font-bold">What our buyers say</h2>
          <p class="buyers-text text-center font-medium">{{ testimonials[(currentTestimonial + 1) % testimonials.length] }}</p>
        </div>
        <div
            class="testimonial flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg p-7">
          <h2 class="font-bold">What our buyers say</h2>
          <p class="buyers-text text-center font-medium">{{ testimonials[(currentTestimonial + 2) % testimonials.length] }}</p>
        </div>
      </div>
    </div>

    <div class="dots">
      <span
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :class="{ active: currentTestimonial === index }"
          @click="setTestimonial(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ],
      currentTestimonial: 0,
      interval: null
    };
  },

  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentTestimonial * (100 / 3)}%)`,
        width: `${this.testimonials.length * 100}%`
      };
    }
  },

  mounted() {
    this.startSlider();
  },

  beforeDestroy() {
    this.stopSlider();
  },

  methods: {
    startSlider() {
      this.interval = setInterval(() => {
        this.nextTestimonial();
      }, 5000);
    },

    stopSlider() {
      clearInterval(this.interval);
    },

    nextTestimonial() {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    },

    setTestimonial(index) {
      this.currentTestimonial = index;
      this.stopSlider();
      this.startSlider();
    }
  }
};
</script>

<style scoped>
.slider-container {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.slider {
  display: flex;
  transition: transform 1s ease-in-out;
}

.testimonial {
  flex: 0 0 33.33%;
  box-sizing: border-box;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.dots span {
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.6s ease;
}

.dots span.active {
  background-color: var(--dark-orange);
}

.buyers-text{
  width: 40rem;
}
</style>
