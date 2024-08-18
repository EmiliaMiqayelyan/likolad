<template>
  <div class="pt-8 pb-8">
    <div class="chocolates">
      <div class="pt-8 w-full flex justify-content-center align-items-center flex-column row-gap-5">
        <p class="text-center md:w-30rem w-full mt-4 font-normal">Lorem Ipsum is simply dummy text of the printing and
          typesetting
          industry.</p>
        <NuxtLink to="/my-chocolates">
          <button
              class="space-btn sm:w-19rem w-15rem border-round-md h-3rem font-bold text-base cursor-pointer">
            Create my chocolate
          </button>
        </NuxtLink>
      </div>

      <div class="w-full flex justify-content-space-between pt-6">
        <div class="chocolates-menu-items flex sm:gap-6 gap-3 w-full">
          <p class="cursor-pointer">All</p>
          <p class="cursor-pointer" @click="toggleMenutab('brands')">Our brands</p>
          <p class="cursor-pointer">Chocolate types</p>
          <p class="cursor-pointer">Collections</p>
        </div>
        <img src="@/assets/icons/filter-icon.svg" alt=""/>
      </div>

      <hr class="discover-hr mt-2 mb-0"/>

      <div class="card" v-show="menutab">
        <Menubar :model="items" class="text-black">
          <template #item="{ item, props, hasSubmenu }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a class="menu-items flex gap-7" v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </router-link>

            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
              <span class="ml-2">{{ item.label }}</span>
              <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2"/>
            </a>
          </template>
        </Menubar>
        <hr class="card-menu-items"/>
      </div>
    </div>

    <div class="chocolates-section flex flex-wrap">
      <div
          v-for="chocolate in chocolatesList"
          :key="chocolate.id"
          class="product border-round-xl"
      >
        <NuxtLink to="/productId">
          <img class="chocolates-images" :src="chocolate.src" :alt="chocolate.productName"/>
        </NuxtLink>

        <div class="flex justify-content-between align-items-center pb-2">
          <div class="flex align-items-center gap-1">
            <Rating v-model="chocolate.rating" :cancel="false"/>
            <span class="rating-text">{{ chocolate.ratingText }}</span>
          </div>

            <template>
              <img :src="chocolate.favoriteIcon" alt="" />
            </template>
        </div>

        <div class="price flex justify-content-between align-items-center">
          <span class="font-medium text-sm">{{ chocolate.productName }}</span>
          <span class="font-bold text-sm">{{ chocolate.productPrice }}</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="price-cart font-bold text-sm">{{ chocolate.productCartText }}</span>
          <img :src="chocolate.productCartIcon" alt="Cart Icon"/>
        </div>
      </div>
    </div>

    <div class="flex justify-content-center align-items-center">
      <button v-if="chocolatesList.length > 12" class="load-more border-1 py-3 px-6 border-round-xl text-base cursor-pointer">Load more</button>
    </div>
  </div>
</template>

<script setup>

import chocolatesImage1 from '@/assets/chocolates1.svg';
import chocolatesImage2 from '@/assets/chocolates2.svg';
import chocolatesImage3 from '@/assets/chocolates3.svg';
import chocolatesImage4 from '@/assets/chocolates4.svg';
import chocolatesImage5 from '@/assets/chocolates5.svg';
import chocolatesImage6 from '@/assets/chocolates6.svg';
import favoritesIcon from '@/assets/icons/favorites-fill.svg';
import cartIcon from '@/assets/icons/cart-icon.svg';

const menutab = ref(false)

const toggleMenutab = (section) => {
  if (section === 'brands') {
    menutab.value = !menutab.value;
  } else {
    menutab.value = false;
  }
};

const items = ref([
  {
    label: 'Royalads',
    items: [
      {
        label: 'Darkolads',
      },
      {
        label: 'Milkylads',
      },
      {
        label: 'Rubylads',
      },
      {
        label: 'Caramelads',
      },
      {
        label: 'Lilylads',
      },
    ]
  },
  {
    label: 'Ballads',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
  {
    label: 'Loralads',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
  {
    label: 'Brainlads',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
  {
    label: 'Pumpkin Seeds',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
  {
    label: 'Trimolads',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
  {
    label: 'Nutsolads',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
  {
    label: 'Limolads',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
  {
    label: 'Chikolads',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
]);

const chocolatesList = ref([
  {
    id: 1,
    src: chocolatesImage1,
    rating: 5,
    ratingText: "5.0",
    favoriteIcon: favoritesIcon,
    productName: "Loralad",
    productPrice: "7600 AMD",
    productCartText: "More",
    productCartIcon: cartIcon
  },
  {
    id: 2,
    src: chocolatesImage2,
    rating: 5.0,
    ratingText: "5.0",
    favoriteIcon: favoritesIcon,
    productName: "Triolads",
    productPrice: "5600 AMD",
    productCartText: "More",
    productCartIcon: cartIcon
  },
  {
    id: 3,
    src: chocolatesImage3,
    rating: 4.5,
    ratingText: "4.5",
    favoriteIcon: favoritesIcon,
    productName: "Flowery",
    productPrice: "4850 AMD",
    productCartText: "More",
    productCartIcon: cartIcon
  },
  {
    id: 4,
    src: chocolatesImage4,
    rating: 4.7,
    ratingText: "4.7",
    favoriteIcon: favoritesIcon,
    productName: "Morfet",
    productPrice: "3500 AMD",
    productCartText: "More",
    productCartIcon: cartIcon
  },
  {
    id: 5,
    src: chocolatesImage5,
    rating: 4.3,
    ratingText: "4.3",
    favoriteIcon: favoritesIcon,
    productName: "Strawberry",
    productPrice: "5750 AMD",
    productCartText: "More",
    productCartIcon: cartIcon
  },
  {
    id: 6,
    src: chocolatesImage6,
    rating: 4.5,
    ratingText: "4.9",
    favoriteIcon: favoritesIcon,
    productName: "Peaches",
    productPrice: "6500 AMD",
    productCartText: "More",
    productCartIcon: cartIcon
  },
]);
</script>

<style scoped>
.chocolates-section, .chocolates {
  padding-left: 14%;
  padding-right: 14%;
  line-height: 24px;
}

.chocolates-section {
  gap: 4rem;
  padding-top: 3%;
  row-gap: 5rem;
  padding-bottom: 3rem;
}

.space-btn {
  background-color: var(--dark-orange);
  color: var(--dark-brown);
  border: 2px solid var(--dark-orange);
}

.space-btn:hover {
  background-color: #080403;
  color: var(--dark-orange);
  transition: 0.5s;
}

:deep(.p-rating) {
  gap: 5px;
}

:deep(.p-rating .p-rating-item.p-rating-item-active .p-rating-icon) {
  color: var(--dark-orange);
  border-color: var(--dark-orange);
}

a {
  color: var(--white);
}

.chocolates-menu-items > p:active {
  color: var(--dark-orange);
}

.card {
  background-color: white;
  color: black;
  width: 71.4%;
  position: absolute;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  height: 350px;
}

:deep(.p-menuitem-link) {
  color: black !important;
}

:deep(.p-menubar .p-submenu-list) {
  margin-top: 2rem;
  border: none;
  box-shadow: unset !important;
  color: black;
  z-index: 0;
}

:deep(.p-menubar .p-menuitem.p-highlight > .p-menuitem-content) {
  background: none;
}

:deep(.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover) {
  background: none;
}

:deep(.pi-fw) {
  color: var(--dark-orange);
}

.p-menubar {
  background: none;
  border: none;
}

.product {
  background-color: var(--white);
  width: max-content;
  padding: 10px;
}

.rating-text, .price-cart {
  color: var(--dark-orange);
}

.price {
  color: var(--black);
}

.load-more {
  border-color: var(--dark-orange);
  background: none;
  color: var(--dark-orange);
}

.load-more:hover {
  background-color: var(--dark-orange);
  color: var(--brown);
  font-weight: 600 !important;
  transition: 0.5s;
}

.card-menu-items {
  border-color: var(--dark-orange);
}

:deep(.p-menubar.p-menubar-mobile .p-menubar-root-list) {
  z-index: 0 !important;
}

@media only screen and (max-width: 1730px) {
  :deep(.p-menubar .p-submenu-list) {
    margin-top: 4rem;
  }
}

@media only screen and (max-width: 1320px) {
  .chocolates-section, .chocolates {
    padding-left: 6%;
    padding-right: 6%;
  }

  .card {
    width: 86.6%;
  }
}

@media only screen and (max-width: 960px) {
  :deep(.p-menubar .p-submenu-list) {
    margin-top: 0;
  }
}

@media only screen and (max-width: 545px) {
  .chocolates-section {
    gap: 2rem;
  }

  .product, .chocolates-images {
    width: 100%;
  }

  .card {
    width: 85.2%;
  }
}
</style>