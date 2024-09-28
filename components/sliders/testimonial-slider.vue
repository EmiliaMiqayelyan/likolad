<template>
  <div class="testimonials py-8 flex justify-content-center flex-column align-items-center">
    <h1 class="text-5xl font-medium">{{ $t('testimonials.testimonials') }}</h1>

    <div v-if="testimonials.length > 0" class="slider-container">
      <div class="slider mt-6" :style="sliderStyle">
        <div
            class="testimonial flex flex-column row-gap-4 align-items-center about-section border-1 border-round-lg md:p-7 p-4"
            v-for="(testimonial, index) in testimonials"
            :key="index"
        >
          <h2 class="font-bold">{{ $t('testimonials.testimonialsHeading') }}</h2>
          <p class="buyers-text text-center font-medium">
            {{ currentLanguage === 'en' ? testimonial.content_en : testimonial.content_am }}
          </p>
          <p class="buyers-name text-right font-medium">
            {{ currentLanguage === 'en' ? testimonial.author_en : testimonial.author_am }}
          </p>
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
    <p v-else>No testimonials available at the moment.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      testimonials: [],
      currentTestimonial: 0,
      interval: null,
    };
  },

  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentTestimonial * (100 / this.testimonials.length)}%)`,
        width: `${this.testimonials.length * 100}%`
      };
    },

    currentLanguage() {
      const {locale} = useI18n();
      return locale.value;
    }
  },

  async mounted() {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/testimonial');
      this.testimonials = response.data;
      if (this.testimonials.length > 0) {
        this.startSlider();
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
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
      setTimeout(() => {
        this.startSlider();
      }, 2000);
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
  width: 25%;
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

.buyers-text, .buyers-name {
  width: 40rem;
}

.buyers-name {
  color: var(--dark-orange);
}

@media only screen and (max-width: 900px) {
  .buyers-text {
    width: 100%;
  }
}
</style>
