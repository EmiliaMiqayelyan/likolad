<template>
  <div class="my-card">
    <p class="mb-3">{{ $t('myCard.myCard') }}</p>

    <div class="p-3 md:p-6 border-1 border-white border-round-lg">
      <div v-if="cartItems.length === 0">
        <p class="text-center">{{ $t('myCard.emptyCard') }}</p>
      </div>

      <div v-else>
        <div class="flex flex-column row-gap-4">
          <div v-for="product in cartItems" :key="product.id" class="card-product p-3 border-1 border-round-lg">
            <div class="flex sm:flex-row flex-column gap-5">
              <img src="@/assets/card-product.svg" alt=""/>

              <div class="w-full flex flex-column row-gap-2">
                <p>
                  {{ currentLanguage === 'en' ? product.title_en : product.title_am }}
                </p>
                <p class="card-product-desc text-sm">
                  {{ currentLanguage === 'en' ? product.description_en : product.description_am }}
                </p>
                <span class="rating-price font-bold text-sm my-1">{{ product.price }} AMD</span>

                <div class="flex justify-content-between align-items-center">
                  <div class="flex gap-3 mt-2">
                    <button @click="updateQuantity(product.id, product.quantity - 1)" class="w-2rem h-2rem border-circle border-none text-lg" :disabled="product.quantity <= 1">-</button>
                    <button class="count w-2rem h-2rem border-round-lg border-1">{{ product.quantity }}</button>
                    <button @click="updateQuantity(product.id, product.quantity + 1)" class="w-2rem h-2rem border-circle border-none text-lg">+</button>
                  </div>

                  <div>
                    <img @click="removeFromCart(product.id)" class="cursor-pointer" src="@/assets/icons/delete.svg"
                         alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
            class="flex justify-content-between mt-3 md:align-items-end align-items-center md:flex-row flex-column-reverse row-gap-3">
          <button @click="clearCart"
              class="clear-all-btn flex gap-2 border-1 border-white text-xs align-items-center w-17rem h-3rem py-2 border-round-lg justify-content-center font-normal">
            {{ $t('myCard.clearAll') }}
            <img src="@/assets/icons/delete.svg" alt=""/>
          </button>

          <div class="flex flex-column row-gap-2 align-items-center">
            <p class="mb-0 text-center text-white">{{ $t('myCard.totalPrice') }} {{ cartTotal }} AMD</p>

            <NuxtLink to="/checkout">
              <button class="add-to-my-card border-round-lg py-3 text-base font-medium w-17rem">
                {{ $t('myCard.checkout') }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCartStore} from '~/store/cart';

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.cartItems);
const cartTotal = computed(() => cartStore.cartTotal);

const { updateQuantity, removeFromCart, clearCart } = cartStore;

const currentLanguage = computed(() => {
  const {locale} = useI18n();
  return locale.value;
})
</script>

<style scoped>
.my-card {
  padding: 11rem 14% 5%;
}

.card-product {
  border-color: var(--dark-orange);
}

.card-product-desc {
  width: 63%;
}

.rating-price {
  color: var(--dark-orange);
}

.count {
  background: none;
  color: var(--dark-orange);
  border-color: var(--dark-orange);
}

.clear-all-btn {
  background: none;
  color: var(--white);
}

.add-to-my-card {
  background-color: var(--orange);
  color: var(--brown);
  border: 2px solid var(--orange);
}

.add-to-my-card:hover {
  background-color: var(--black);
  color: var(--orange);
  transition: 0.5s;
}

@media only screen and (max-width: 1320px) {
  .my-card {
    padding: 9rem 6% 5%;
  }
}

@media only screen and (max-width: 1000px) {
  .card-product-desc {
    width: 100%;
  }
}
</style>