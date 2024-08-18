<template>
  <div class="testimonials py-8 flex justify-content-center flex-column align-items-center">
    <h1 class="text-5xl font-medium">Testimonials</h1>

    <div class="slider-container">
      <div class="slider mt-6" :style="sliderStyle">
        <div
            class="testimonial flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg md:p-7 p-4">
          <h2 class="font-bold">What our buyers say</h2>
          <p class="buyers-text text-center font-medium">{{ testimonials[currentTestimonial] }}</p>
        </div>
        <div
            class="testimonial flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg md:p-7 p-4">
          <h2 class="font-bold">What our buyers say</h2>
          <p class="buyers-text text-center font-medium">{{ testimonials[(currentTestimonial + 1) % testimonials.length] }}</p>
        </div>
        <div
            class="testimonial flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg md:p-7 p-4">
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
        "I was blown away by the rich, velvety taste of Likolad chocolates. Whether it’s a treat for myself or a gift for someone special, Likolad always impresses. Their attention to detail and commitment to quality is evident in every piece.",
        "Likolad chocolates are simply divine! From the first taste, you can tell these chocolates are crafted with passion and care. I love how Likolad brings a touch of luxury to my day. It’s my go-to for a truly exceptional chocolate experience.",
        "Every bite of Likolad chocolates feels like a little piece of heaven. The quality and care that go into making each chocolate is evident. Likolad has quickly become my favorite indulgence, and I highly recommend it to anyone who appreciates fine chocolate!"
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

@media only screen and (max-width: 900px) {
  .buyers-text{
    width: 100%;
  }
}
</style>
