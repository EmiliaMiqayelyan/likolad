<template>
  <div class="pt-8 pb-8">
    <div class="chocolates">
      <div class="pt-8 w-full flex justify-content-center align-items-center flex-column row-gap-5">
        <p class="text-center md:w-30rem w-full mt-4 font-normal">
          {{ $t('ourChocolates.ourChocolatesText') }}
        </p>

        <!--        <button-->
        <!--            class="space-btn sm:w-19rem w-15rem border-round-md h-3rem font-bold text-base cursor-pointer">-->
        <!--          {{ $t('ourChocolates.createChocolate') }}-->
        <!--        </button>-->
      </div>

      <div class="card mt-5">
        <MegaMenu :model="items"/>

        <div class="flex gap-3 align-items-center">
          <InputGroup v-if="isSearchVisible">
            <InputGroupAddon>
              <i class="pi pi-search"></i>
            </InputGroupAddon>
            <InputText
                v-model="searchTerm"
                @input="fetchFilteredProducts"
                placeholder="Search..."/>
          </InputGroup>

          <div class="flex gap-3 align-items-center">
            <i
                v-if="!isSearchVisible"
                class="pi pi-search cursor-pointer"
                @click="toggleSearch"
            ></i>
            <img width="25" src="@/assets/icons/filter-icon.svg" alt="Filter" class="mr-4 cursor-pointer"
                 @click="toggleSortOrder"/>
          </div>
        </div>
      </div>

      <hr class="card-menu-items"/>
    </div>

    <div class="chocolates-section flex flex-wrap">
      <div class="product border-round-xl"
           v-for="(product, index) in filteredProducts" :key="index">
        <NuxtLink :to="`/product/${product.id}`">
          <img
              v-if="product.media[0]"
              class="chocolates-images"
              :src="normalizePath(product.media[0].path)"
              alt=""/>
        </NuxtLink>

        <div class="price flex justify-content-between align-items-center">
        <span class="w-5rem font-medium text-sm white-space-nowrap overflow-hidden text-overflow-ellipsis">
          {{ currentLanguage === 'en' ? product.title_en : product.title_am }}
        </span>
          <span class="font-bold text-sm">{{ product.price }} AMD</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="w-9rem price-cart font-bold text-sm white-space-nowrap overflow-hidden text-overflow-ellipsis">
            {{ currentLanguage === 'en' ? product.description_en : product.description_am }}
          </span>
          <img class="cursor-pointer" @click="addToCart(product)" src="@/assets/icons/cart-icon.svg" alt="Cart Icon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {useCartStore} from '~/store/cart';

const categories = ref([]);
const cartStore = useCartStore();
const router = useRouter();
const filteredProducts = ref([]);

const searchTerm = ref('');
const isSearchVisible = ref(false);

const categoryId = ref(null);
const sortBy = ref('price');
const sortOrder = ref('ASC');

const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
};

const fetchCategories = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/category');
    categories.value = response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

const fetchFilteredProducts = async () => {
  try {
    let url = `http://localhost:3001/api/v1/product?`;

    if (searchTerm.value) {
      url += `searchTerm=${searchTerm.value}&`;
    }

    if (categoryId.value) {
      url += `categoryId=${categoryId.value}&`;
    }

    url += `sortBy=${sortBy.value}&sortOrder=${sortOrder.value}`;

    const response = await axios.get(url);
    filteredProducts.value = response.data;
  } catch (error) {
    console.error('Error fetching filtered products:', error);
  }
};

const filterByCategory = (id) => {
  categoryId.value = id;
  fetchFilteredProducts();
};

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'ASC' ? 'DESC' : 'ASC';
  fetchFilteredProducts();
};

const baseUrl = 'http://localhost:3001/';
const normalizePath = (path) => {
  return `${baseUrl}${path.replace(/\\/g, '/')}`;
}

const items = ref([
  {
    label: 'Categories',
    items: computed(() => [
      [
        {
          label: 'Categories',
          items: categories.value.map(category => ({
            label: category.title_en,
            command: () => filterByCategory(category.id)
          }))
        }
      ]
    ])
  }
]);

const addToCart = (product) => {
  cartStore.addToCart(product);
  router.push('/my-card');
};

const currentLanguage = computed(() => {
  const {locale} = useI18n();
  return locale.value;
})

onMounted(() => {
  fetchCategories();
  fetchFilteredProducts();
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

:deep(.p-inputgroup input:last-child) {
  background: none !important;
}

:deep(.p-inputgroup input:last-child::placeholder) {
  color: white !important;
}

:deep(.p-inputgroup-addon:first-child) {
  background: none !important;
}

:deep(.p-inputgroup-addon:first-child) {
  color: white !important;
}

:deep(.p-inputgroup) {
  width: 14rem;
  height: 2.5rem;
}

:deep(.p-icon-field-left > .p-inputtext::placeholder) {
  color: white !important;
}

:deep(.p-inputtext:enabled:focus) {
  box-shadow: none;
  border-color: #ced4da;
}

:deep(.p-inputtext:enabled:hover) {
  border-color: #ced4da;
}

:deep(.p-icon-field > .pi) {
  color: white !important;
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

.chocolates-images {
  width: 180px;
  height: 180px;
  border-radius: 10px;
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