<template>
  <div class="testimonials py-5 flex justify-content-center flex-column align-items-center">
    <h1 class="testimonial-heading sm:text-5xl text-2xl font-medium">{{ $t('testimonials.testimonials') }}</h1>

    <div v-if="testimonials.length > 0" class="testimonial-wrapper">
<!--      <button class="nav-button prev" @click="moveSlide(-1)">&#10094;</button>-->

      <div class="testimonial-container px-4 sm:px-6 py-2" ref="slides">
        <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card pb-2"
        >
          <div class="testimonial-content">
            <p class="buyers-text text-center font-medium m-0">
              "{{ currentLanguage === 'en' ? testimonial.content_en : testimonial.content_am }}"
            </p>
            <p class="buyers-name font-bold m-0 font-italic">
              - {{ currentLanguage === 'en' ? testimonial.author_en : testimonial.author_am }}
            </p>
          </div>
        </div>
      </div>

<!--      <button class="nav-button next" @click="moveSlide(1)">&#10095;</button>-->
    </div>

    <p v-else class="mt-5">No testimonials available at the moment.</p>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export default {
  data() {
    return {
      testimonials: [],
      currentIndex: 0,
    };
  },

  computed: {
    currentLanguage() {
      const {locale} = useI18n();
      return locale.value;
    },
  },

  async mounted() {
    try {
      const response = await axios.get(`${API_URL}/testimonial`);
      this.testimonials = response.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  },

  methods: {
    moveSlide(direction) {
      const slideCount = this.testimonials.length;
      const visibleSlides = 3;
      this.currentIndex = (this.currentIndex + direction + slideCount) % slideCount;

      const offset = -(this.currentIndex * (100 / visibleSlides));

      this.$refs.slides.style.transform = `translateX(${offset}%)`;
    },
  },
};
</script>

<style scoped>
.testimonial-container {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.testimonial-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.testimonial-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.testimonial-card {
  flex: 0 0 calc(100% / 3);
  box-sizing: border-box;
}

.testimonial-card {
  background: #fff;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 1000;
  font-size: 1.5rem;
  border-radius: 50%;
}

.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}

.testimonial-content {
  margin-top: 10px;
}

.buyers-text {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 10px;
}

.buyers-name {
  font-size: 1rem;
  color: #333;
}

.buyers-role {
  font-size: 0.8rem;
  color: #777;
}

.testimonial-heading {
  font-family: "Abril Fatface", cursive;
}

@media only screen and (max-width: 900px) {
  .testimonial-card {
    width: 100%;
  }

  .testimonial-container {
    flex-direction: column;
  }
}

@media only screen and (max-width: 600px) {
  .testimonial-heading {
    font-size: 2rem;
  }
}
</style>