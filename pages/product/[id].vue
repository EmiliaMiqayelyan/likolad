<template>
  <div class="productId">
    <NuxtLink to="/our-chocolates" class="no-underline">
      <div class="flex align-items-center gap-2">
        <i class="pi pi-angle-double-left left-arrow text-2xl"></i>
        <span class="our-chocolates">
          {{ $t('productId.ourChocolatesHeading') }}
        </span>
      </div>
    </NuxtLink>

    <div
        class="product-info w-full py-5 px-4 mt-5 flex lg:flex-row flex-column lg:gap-7 gap-3">
      <div v-if="product.media.length && product.media[0].path" class="productid-img-container">
        <img width="276" height="276"
            class="productid-img border-round-lg"
            :src="normalizePath(product.media[0].path)"
            alt="Product image"
        />
      </div>

      <div class="flex flex-column justify-content-evenly w-full">
        <p class="text-xl">
          {{ currentLanguage === 'en' ? product.title_en : product.title_am }}
        </p>

        <p class="productid-desc text-sm">
          {{ currentLanguage === 'en' ? product.description_en : product.description_am }}
        </p>
        <span class="rating-price font-bold text-sm my-1">{{ product.price }} AMD</span>
        <!--        <p class="text-xs my-1">{{ $t('productId.chocolateType') }}</p>-->

        <!--        <div class="flex gap-4 chocolate-type flex-wrap">-->
        <!--          <button class="border-1 border-round-xl py-3 px-5 cursor-pointer">Dark</button>-->
        <!--          <button class="border-1 border-round-xl py-3 px-5 cursor-pointer">Milk</button>-->
        <!--          <button class="border-1 border-round-xl py-3 px-5 cursor-pointer">Ruby</button>-->
        <!--          <button class="border-1 border-round-xl py-3 px-5 cursor-pointer">White</button>-->
        <!--        </div>-->

        <div class="flex justify-content-between align-items-center flex-wrap">
          <div class="flex gap-3 mt-2">
            <button
                @click="changeQuantity(-1)"
                class="count-btns w-2rem h-2rem p-0 border-circle border-none text-lg"
                :disabled="quantity <= 1">
              -
            </button>

            <button class="count w-2rem h-2rem p-0 border-round-lg border-1">{{ quantity }}</button>

            <button
                @click="changeQuantity(1)"
                class="count-btns w-2rem h-2rem p-0 border-circle border-none text-lg">
              +
            </button>
          </div>

          <NuxtLink to="/my-card" class="my-card-link">
            <button @click="addToCart"
                    class="add-product-card flex align-items-center border-round-xl gap-3 sm:px-7 px-6 font-semibold py-2">
              {{ $t('productId.addCard') }}
              <img src="@/assets/icons/cart-icon.svg" alt=""/>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="product-slider mt-8 hidden flex-column sm:flex">
      <h3>{{ $t('productId.alsoLike') }}</h3>
      <product-slider />
    </div>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {useCartStore} from '~/store/cart';
import axios from 'axios';
import ProductSlider from "~/components/sliders/product-slider.vue";

const API_URL = import.meta.env.VITE_API_URL;

const route = useRoute();
const productId = route.params.id;

const product = ref({});
const quantity = ref(1);

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cartItems);

const currentLanguage = computed(() => {
  const {locale} = useI18n();
  return locale.value;
})

const baseUrl = 'https://api.likolad.am/';
const normalizePath = (path) => {
  return `${baseUrl}${path.replace(/\\/g, '/')}`;
}

const fetchProduct = async () => {
  try {
   const response =  await axios.get(`${API_URL}/product/${productId}`);

   return response.data
  } catch (err) {
    console.error('Error fetching product:', err.response ? err.response.data : err.message);
  }
};

const changeQuantity = (amount) => {
  const newQuantity = quantity.value + amount;
  if (newQuantity >= 1) {
    quantity.value = newQuantity;
  }
};

const addToCart = () => {
  const cartProduct = {...product.value, quantity: quantity.value};
  cartStore.addToCart(cartProduct);
};

const {data} = await useAsyncData(() => fetchProduct())
product.value = data.value;

const cartProduct = cartItems.value.find(item => item.id === product.value.id);
if (cartProduct) {
  quantity.value = cartProduct.quantity;
}
</script>

<style scoped>
.productId {
  padding: 11rem 14% 3%;
}

.our-chocolates, .left-arrow {
  color: var(--text-color);
  text-decoration: none !important;
}

.my-card-link {
  text-decoration: none !important;
}

.rating-price {
  color: var(--text-color);
}

.productid-desc {
  width: 70%;
}

.chocolate-type > button, .count {
  background: none;
  color: var(--text-color);
  border-color: var(--text-color);
}

.chocolate-type > button:focus {
  background-color: #7F6B3C;
  color: var(--text-color);
}

.count-btns {
  color: var(--text-color);
}

.add-product-card {
  border: 2px solid var(--text-color);
  transition: 0.5s;
  color: var(--text-color);
}

.add-product-card:hover {
  background-color: var(--main-color);
  color: #7F6B3C;
}

.productid-img {
  object-fit: cover;
}

:deep(.p-carousel .p-carousel-indicators) {
  display: none !important;
}

:deep(.p-tag){
  display: none !important;
}

@media only screen and (max-width: 1320px) {
  .productId {
    padding: 9rem 7% 3%;
  }

  .productid-desc {
    width: 100%;
  }
}

@media only screen and (max-width: 545px) {
  .add-product-card {
    margin-top: 1rem;
  }

  .productid-img {
    width: 100%;
  }
}
</style>