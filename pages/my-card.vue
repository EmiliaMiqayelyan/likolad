<template>
  <div class="my-card">
    <p class="mb-3">{{ $t('myCard.myCard') }}</p>

    <div class="p-2 md:p-3">
      <div v-if="cartItems.length === 0">
        <p class="text-center">{{ $t('myCard.emptyCard') }}</p>
      </div>

      <div v-else>
        <div class="flex flex-column row-gap-4">
          <div v-for="product in cartItems" :key="product.id" class="card-product p-3 border-1 border-round-lg">
            <div class="flex sm:flex-row flex-column gap-5">
              <div v-if="product.media.length && product.media[0].path" class="productid-img-container">
                <img width="200" height="200"
                     class="productid-img border-round-lg"
                     :src="normalizePath(product.media[0].path)"
                     alt="Product image"
                />
              </div>
              <div class="w-full flex flex-column row-gap-2">
                <p>
                  {{ currentLanguage === 'en' ? product.title_en : product.title_am }}
                </p>
                <p class="card-product-desc text-sm m-0">
                  {{ currentLanguage === 'en' ? product.description_en : product.description_am }}
                </p>
                <span class="rating-price font-bold text-sm my-1">{{ product.price }} AMD</span>

                <div class="flex justify-content-between align-items-center">
                  <div class="flex gap-3 mt-2">
                    <button @click="updateQuantity(product.id, product.quantity - 1)"
                            class="count-btns w-2rem h-2rem p-0 border-circle border-none text-lg" :disabled="product.quantity <= 1">
                      -
                    </button>
                    <button class="count w-2rem h-2rem border-round-lg p-0 border-1">
                      {{ product.quantity }}
                    </button>
                    <button @click="updateQuantity(product.id, product.quantity + 1)"
                            class="count-btns w-2rem h-2rem p-0 border-circle border-none text-lg">
                      +
                    </button>
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
            class="flex justify-content-between mt-3 gap-2 sm:align-items-end align-items-center sm:flex-row flex-column-reverse row-gap-3">
          <button @click="clearCart"
                  class="clear-all-btn flex gap-2 border-1 text-sm align-items-center w-17rem h-3rem py-2 border-round-lg justify-content-center font-normal">
            {{ $t('myCard.clearAll') }}
            <img src="@/assets/icons/delete.svg" alt=""/>
          </button>

          <div class="flex flex-column row-gap-2 align-items-center">
            <p class="mb-2 text-center">{{ $t('myCard.totalPrice') }} {{ cartTotal }} AMD</p>

            <NuxtLink to="/checkout">
              <button class="add-to-my-card border-round-lg py-2 text-base font-medium w-17rem h-3rem">
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

const {updateQuantity, removeFromCart, clearCart} = cartStore;

const currentLanguage = computed(() => {
  const {locale} = useI18n();
  return locale.value;
})

const baseUrl = 'https://api.likolad.am/';
const normalizePath = (path) => {
  return `${baseUrl}${path.replace(/\\/g, '/')}`;
}
</script>

<style scoped>
.productid-img {
  object-fit: cover;
}

.my-card {
  padding: 11rem 14% 5%;
}

.card-product {
  border-color: var(--text-color);
}

.card-product-desc {
  width: 63%;
}

.rating-price {
  color: var(--text-color);
}

.count {
  background: none;
  color: var(--text-color);
  border-color: var(--text-color);
}

.clear-all-btn {
  background: none;
  color: var(--text-color);
  border-color: var(--text-color);
}

.count-btns {
  color: var(--text-color);
}

.add-to-my-card {
  background-color: var(--text-color);
  color: #fff;
  border: 2px solid var(--text-color);
}

.add-to-my-card:hover {
  background-color: var(--main-color);
  color: var(--text-color);
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