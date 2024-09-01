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

      <div class="card mt-5">
        <MegaMenu :model="items"/>
        <img src="@/assets/icons/filter-icon.svg" alt="" class="mr-4"/>
      </div>
      <hr class="card-menu-items"/>
    </div>

    <div class="chocolates-section flex flex-wrap">
      <div class="product border-round-xl"
      >
        <NuxtLink to="/productId">
          <img class="chocolates-images" src="@/assets/chocolates1.svg" alt=""/>
        </NuxtLink>

        <div class="flex justify-content-between align-items-center pb-2">
          <div class="flex align-items-center gap-1">
            <Rating v-model="value" :cancel="false"/>

            <span class="rating-text">4.0</span>
          </div>
        </div>

        <div class="price flex justify-content-between align-items-center">
          <span class="font-medium text-sm">asasa</span>
          <span class="font-bold text-sm">2323232</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="price-cart font-bold text-sm">asasasasasas</span>
          <img src="@/assets/icons/cart-icon.svg" alt="Cart Icon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const value = ref(4);

const categories = ref([]);

const fetchCategories = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/category');
    categories.value = response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

const items = ref([
  {
    label: 'All',
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
    ]
  },
  {
    label: 'Brands',
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
    ]
  },
  {
    label: 'Categories',
    items: computed(() => [
      [
        {
          label: 'Categories',
          items: categories.value.map(category => ({ label: category.title_en }))
        }
      ]
    ])
  },
  {
    label: 'Collections',
    items: [
      [
        {
          label: 'Football',
          items: [{label: 'Kits'}, {label: 'Shoes'}, {label: 'Shorts'}, {label: 'Training'}]
        }
      ],
    ]
  },
]);

onMounted(() => {
  fetchCategories();
});
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

:deep(.p-megamenu) {
  width: 100% !important;
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