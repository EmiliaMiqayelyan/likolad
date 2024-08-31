<template>
  <div class="pt-8 pb-8">
    <div class="chocolates">
      <div class="pt-8 w-full flex justify-content-center align-items-center flex-column row-gap-5">
        <p class="text-center md:w-30rem w-full mt-4 font-normal">
          {{ $t('ourChocolates.ourChocolatesText') }}
        </p>

        <button
            class="space-btn sm:w-19rem w-15rem border-round-md h-3rem font-bold text-base cursor-pointer">
          {{ $t('ourChocolates.createChocolate') }}
        </button>
      </div>

      <div class="card">
        <MegaMenu :model="items"/>
        <img src="@/assets/icons/filter-icon.svg" alt="" class="mr-4"/>
      </div>
      <hr class="card-menu-items"/>
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
            <Rating v-model="chocolate.rating" :cancel="false">
              <template #item="{ index }">
                <i class="pi pi-star-fill" :class="{'pi-star-fill': index < chocolate.rating}"></i>
              </template>
            </Rating>

            <span class="rating-text">{{ chocolate.ratingText }}</span>
          </div>

          <template>
            <i :class="chocolate.favoriteIcon"/>
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
      <button v-if="chocolatesList.length > 12"
              class="load-more border-1 py-3 px-6 border-round-xl text-base cursor-pointer">Load more
      </button>
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
    label: 'Furniture',
    icon: 'pi pi-box',
    items: [
      [
        {
          label: 'Living Room',
          items: [{label: 'Accessories'}, {label: 'Armchair'}, {label: 'Coffee Table'}, {label: 'Couch'}, {label: 'TV Stand'}]
        }
      ],
      [
        {
          label: 'Kitchen',
          items: [{label: 'Bar stool'}, {label: 'Chair'}, {label: 'Table'}]
        },
        {
          label: 'Bathroom',
          items: [{label: 'Accessories'}]
        }
      ],
      [
        {
          label: 'Bedroom',
          items: [{label: 'Bed'}, {label: 'Chaise lounge'}, {label: 'Cupboard'}, {label: 'Dresser'}, {label: 'Wardrobe'}]
        }
      ],
      [
        {
          label: 'Office',
          items: [{label: 'Bookcase'}, {label: 'Cabinet'}, {label: 'Chair'}, {label: 'Desk'}, {label: 'Executive Chair'}]
        }
      ]
    ]
  },
  {
    label: 'Electronics',
    icon: 'pi pi-mobile',
    items: [
      [
        {
          label: 'Computer',
          items: [{label: 'Monitor'}, {label: 'Mouse'}, {label: 'Notebook'}, {label: 'Keyboard'}, {label: 'Printer'}, {label: 'Storage'}]
        }
      ],
      [
        {
          label: 'Home Theather',
          items: [{label: 'Projector'}, {label: 'Speakers'}, {label: 'TVs'}]
        }
      ],
      [
        {
          label: 'Gaming',
          items: [{label: 'Accessories'}, {label: 'Console'}, {label: 'PC'}, {label: 'Video Games'}]
        }
      ],
      [
        {
          label: 'Appliances',
          items: [{label: 'Coffee Machine'}, {label: 'Fridge'}, {label: 'Oven'}, {label: 'Vaccum Cleaner'}, {label: 'Washing Machine'}]
        }
      ]
    ]
  },
  {
    label: 'Sports',
    icon: 'pi pi-clock',
    items: [
      [
        {
          label: 'Football',
          items: [{label: 'Kits'}, {label: 'Shoes'}, {label: 'Shorts'}, {label: 'Training'}]
        }
      ],
      [
        {
          label: 'Running',
          items: [{label: 'Accessories'}, {label: 'Shoes'}, {label: 'T-Shirts'}, {label: 'Shorts'}]
        }
      ],
      [
        {
          label: 'Swimming',
          items: [{label: 'Kickboard'}, {label: 'Nose Clip'}, {label: 'Swimsuits'}, {label: 'Paddles'}]
        }
      ],
      [
        {
          label: 'Tennis',
          items: [{label: 'Balls'}, {label: 'Rackets'}, {label: 'Shoes'}, {label: 'Training'}]
        }
      ]
    ]
  }
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
    productPrice: "6500 AMD",
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
    productPrice: "5800 AMD",
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
    productPrice: "5400 AMD",
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

.card {
  display: flex;
  justify-content: space-between;
}

:deep(.p-megamenu) {
  background: none !important;
  border: none !important;
}

:deep(.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text) {
  color: white !important;
}

:deep(.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon) {
  color: white !important;
}

:deep(.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon) {
  color: white !important;
}

:deep(.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover) {
  background: none !important;
}

:deep(.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover) {
  background: #e9ecef;
}

:deep(.p-megamenu .p-menuitem.p-highlight > .p-menuitem-content) {
  background: none !important;
}

:deep(.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel) {
  margin-top: 18px;
}

:deep(.p-megamenu .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content) {
  color: black !important;
  background: none !important;
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
}

@media only screen and (max-width: 960px) {
  :deep(.p-menubar .p-submenu-list) {
    margin-top: 0;
  }

  :deep(.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text) {
    color: black !important;
  }

  :deep(.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-icon) {
    color: black !important;
  }

  :deep(.p-megamenu.p-megamenu-horizontal .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-submenu-icon) {
    color: black !important;
  }

  :deep(.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel) {
    margin-top: 0;
  }

  :deep(.p-megamenu.p-megamenu-mobile .p-megamenu-button) {
    color: white !important;
  }
}

@media only screen and (max-width: 545px) {
  .chocolates-section {
    gap: 2rem;
  }

  .product, .chocolates-images {
    width: 100%;
  }
}
</style>