<template>
  <div class="header top-0 py-3 border-bottom-1 flex gap-5 align-items-center justify-content-between fixed w-full z-2">

    <div class="nav-items flex gap-8 align-items-center">
      <NuxtLink to="/">
        <img src="@/assets/likolad-logo.svg" class="w-4rem h-4rem" alt=""/>
      </NuxtLink>

      <div class="xl:flex hidden align-items-center gap-5">
        <NuxtLink to="/our-chocolates" class="no-underline" exact-active-class="active">{{
            $t('header.ourChocolates')
          }}
        </NuxtLink>
        <NuxtLink to="/history" class="no-underline" exact-active-class="active">{{ $t('header.history') }}</NuxtLink>
      </div>
    </div>

    <div class="xl:flex hidden gap-6 align-items-center">
      <div class="header-icons gap-4 xl:flex hidden">
        <img @click="openPosition('right')" src="@/assets/icons/cart.svg" width="24" height="24" alt=""
             class="cursor-pointer"/>
        <language-dropdown/>
      </div>

      <Dialog v-model:visible="visible" :header="$t('myCard.myCard')"
              :style="{ width: '18rem', marginLeft: '2rem', position: 'absolute', right: '16rem', top: '5rem' }"
              :position="position"
              :modal="true" :draggable="false"
              :pt="{ header: { class: 'flex  justify-content-space-between pb-4 font-normal'}}">
        <div>
          <div v-for="product in cartItems" :key="product.id" class="flex gap-3">
            <img src="@/assets/my-card-modal-img.svg" alt=""/>

            <div class="w-8rem">
              <p class="text-black font-medium my-1">
                {{ currentLanguage === 'en' ? product.title_en : product.title_am }}
              </p>
              <p style="color: var(--dark-orange)" class="font-medium my-1">{{ product.price }} AMD</p>
              <div class="flex gap-2">
                <button @click="updateQuantity(product.id, product.quantity - 1)"
                        class="count-btn border-none text-lg">
                  -
                </button>
                <button class="count w-2rem h-2rem border-round-xl border-1">
                  {{ product.quantity }}</button>
                <button @click="updateQuantity(product.id, product.quantity + 1)"
                        class="count-btn border-none text-lg">
                  +
                </button>
              </div>
            </div>
            <hr class="card-hr border-1"/>
          </div>

          <p class="total_price text-center">{{ $t('myCard.productOrderPrice') }} {{ productPrice }} AMD</p>

          <NuxtLink to="/checkout">
            <button class="add-to-card border-none border-round-lg py-3 text-base font-medium w-full">
              {{ $t('myCard.checkout') }}
            </button>
          </NuxtLink>
        </div>
      </Dialog>
    </div>

    <div class="block xl:hidden">
      <i class="pi pi-align-right text-xl menu-hamburger" @click="visibleRight = true"></i>

      <Sidebar v-model:visible="visibleRight" position="right" :pt="{ content: { style: 'color: white; background-color:  #080403; border-left: 2px solid #DBA957' },
      header: { style: 'color: white; background-color: #080403; border-left: 2px solid #DBA957; display: flex; justify-content: end' }, }">
        <div class="nav-items flex gap-3 align-items-start flex-column mt-4 ml-3">
          <NuxtLink @click="closeSidebar" to="/our-chocolates" class="no-underline" exact-active-class="active">Our Chocolates</NuxtLink>
          <NuxtLink @click="closeSidebar" to="/history" class="no-underline" exact-active-class="active">History</NuxtLink>
          <NuxtLink @click="closeSidebar" to="/my-card" class="no-underline" exact-active-class="active">My Card</NuxtLink>
          <mobile-language-dropdown />
        </div>
      </Sidebar>
    </div>
  </div>
</template>

<script setup>
import {useCartStore} from '~/store/cart';

const position = ref('right');
const visible = ref(false);

const visibleRight = ref(false);
const cartStore = useCartStore();

const openPosition = (pos) => {
  position.value = pos;
  visible.value = true;
}

const closeSidebar = () => {
  visibleRight.value = false;
};

const cartItems = computed(() => cartStore.cartItems);
const productPrice = computed(() => cartStore.productPrice);

const {updateQuantity} = cartStore;

const currentLanguage = computed(() => {
  const {locale} = useI18n();
  return locale.value;
})
</script>

<style scoped>
.header {
  background-color: var(--black);
  border-color: var(--dark-orange);
  padding-left: 14%;
  padding-right: 14%;
}

.nav-items a {
  color: var(--white);
  font-size: 15px;
}

.nav-items a:focus, .nav-items a.active, .menu-hamburger, .total_price {
  color: var(--dark-orange);
}

.count-btn {
  background: none;
}

.card-hr {
  border-color: var(--dark-orange);
}

.header-icons img:hover {
  filter: brightness(0) saturate(87%) invert(85%) sepia(12%) saturate(2342%) hue-rotate(328deg) brightness(100%) contrast(100%);
}

.add-to-card {
  background-color: var(--dark-orange);
}

@media only screen and (max-width: 1320px) {
  .header {
    padding-left: 6%;
    padding-right: 6%;
  }
}
</style>
