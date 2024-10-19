<template>
  <div class="card">
    <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <div class="slider-product border-1 border-round-xl m-2 p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
              <Tag :value="slotProps.data.inventoryStatus" class="absolute" style="left: 5px; top: 5px" />
            </div>
          </div>

          <div class="flex flex-column row-gap-2">
            <div class="price flex justify-content-between align-items-center">
              <span class="product-name font-medium text-sm">{{ slotProps.data.name }}</span>
              <span class="product-price font-bold text-sm">{{ slotProps.data.price }}</span>
            </div>

            <div class="price flex justify-content-between align-items-center mt-2">
              <span class="learn-more font-bold text-sm">{{ $t('productId.more') }}</span>
              <img src="@/assets/icons/cart-icon.svg" alt=""/>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ProductService } from '@/service/ProductService';

const products = ref([]);
const rating = ref(5);
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

onMounted(() => {
  ProductService.getProductsSmall().then((data) => {
    products.value = data;
  });
});
</script>

<style scoped>
.rating, .product-name, .product-price, .rating-text, .learn-more {
  color: var(--dark-orange);
}

.slider-product{
  border-color: var(--dark-orange);
}

.p-carousel .p-carousel-content .p-carousel-prev:enabled:hover, .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
  background: var(--dark-orange);
}

.p-carousel .p-carousel-indicators{
  display: none !important;
}

.p-carousel .p-carousel-content .p-carousel-prev, .p-carousel .p-carousel-content .p-carousel-next{
  background: var(--dark-orange);
}
</style>