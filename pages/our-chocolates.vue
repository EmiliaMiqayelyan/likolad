<template>
  <div class="pt-8 pb-8">
    <div class="chocolates">
      <div class="pt-8 w-full flex justify-content-center align-items-center flex-column row-gap-5">
        <p class="text-center md:w-30rem w-full mt-4 font-normal">Lorem Ipsum is simply dummy text of the printing and
          typesetting
          industry.</p>
        <NuxtLink to="/my-chocolates">
          <button
              class="space-btn sm:w-19rem w-15rem border-none border-round-md h-3rem font-bold text-base cursor-pointer">
            Create my chocolate
          </button>
        </NuxtLink>
      </div>

      <div class="w-full flex justify-content-space-between pt-6">
        <div class="flex gap-6 w-full">
          <p>All</p>
          <p>Our brands</p>
          <p>Chocolate types</p>
          <p>Collections</p>
        </div>
        <img src="@/assets/icons/filter-icon.svg" alt=""/>
      </div>

      <hr class="discover-hr mt-2 mb-0"/>

      <div class="card">
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
      </div>
    </div>

    <div class="chocolates-section">
      <div class="product border-round-xl">
        <NuxtLink to="/productId"><img class="chocolates-images" src="@/assets/chocolates.svg" alt=""/></NuxtLink>

        <div class="flex gap-1 mt-1 align-items-baseline">
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <span class="rating-text font-medium ml-1">5.0</span>
        </div>

        <div class="price flex justify-content-between align-items-center">
          <span class="font-medium text-sm">Name</span>
          <span class="font-bold text-sm">2000 AMD</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="price-cart font-bold text-sm">More</span>
          <img src="@/assets/icons/cart-icon.svg" alt=""/>
        </div>
      </div>

      <div class="product border-round-xl">
        <img class="chocolates-images" src="@/assets/chocolates.svg" alt=""/>

        <div class="flex gap-1 mt-1 align-items-baseline">
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <span class="rating-text font-medium ml-1">5.0</span>
        </div>

        <div class="price flex justify-content-between align-items-center">
          <span class="font-medium text-sm">Name</span>
          <span class="font-bold text-sm">2000 AMD</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="price-cart font-bold text-sm">More</span>
          <img src="@/assets/icons/cart-icon.svg" alt=""/>
        </div>
      </div>

      <div class="product border-round-xl">
        <img class="chocolates-images" src="@/assets/chocolates.svg" alt=""/>

        <div class="flex gap-1 mt-1 align-items-baseline">
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <span class="rating-text font-medium ml-1">5.0</span>
        </div>

        <div class="price flex justify-content-between align-items-center">
          <span class="font-medium text-sm">Name</span>
          <span class="font-bold text-sm">2000 AMD</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="price-cart font-bold text-sm">More</span>
          <img src="@/assets/icons/cart-icon.svg" alt=""/>
        </div>
      </div>

      <div class="product border-round-xl">
        <img class="chocolates-images" src="@/assets/chocolates.svg" alt=""/>

        <div class="flex gap-1 mt-1 align-items-baseline">
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <span class="rating-text font-medium ml-1">5.0</span>
        </div>

        <div class="price flex justify-content-between align-items-center">
          <span class="font-medium text-sm">Name</span>
          <span class="font-bold text-sm">2000 AMD</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="price-cart font-bold text-sm">More</span>
          <img src="@/assets/icons/cart-icon.svg" alt=""/>
        </div>
      </div>

      <div class="product border-round-xl">
        <img class="chocolates-images" src="@/assets/chocolates.svg" alt=""/>

        <div class="flex gap-1 mt-1 align-items-baseline">
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <span class="rating-text font-medium ml-1">5.0</span>
        </div>

        <div class="price flex justify-content-between align-items-center">
          <span class="font-medium text-sm">Name</span>
          <span class="font-bold text-sm">2000 AMD</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="price-cart font-bold text-sm">More</span>
          <img src="@/assets/icons/cart-icon.svg" alt=""/>
        </div>
      </div>

      <div class="product border-round-xl">
        <img class="chocolates-images" src="@/assets/chocolates.svg" alt=""/>

        <div class="flex gap-1 mt-1 align-items-baseline">
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <span class="rating-text font-medium ml-1">5.0</span>
        </div>

        <div class="price flex justify-content-between align-items-center">
          <span class="font-medium text-sm">Name</span>
          <span class="font-bold text-sm">2000 AMD</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="price-cart font-bold text-sm">More</span>
          <img src="@/assets/icons/cart-icon.svg" alt=""/>
        </div>
      </div>

      <div class="product border-round-xl">
        <img class="chocolates-images" src="@/assets/chocolates.svg" alt=""/>

        <div class="flex gap-1 mt-1 align-items-baseline">
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <span class="rating-text font-medium ml-1">5.0</span>
        </div>

        <div class="price flex justify-content-between align-items-center">
          <span class="font-medium text-sm">Name</span>
          <span class="font-bold text-sm">2000 AMD</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="price-cart font-bold text-sm">More</span>
          <img src="@/assets/icons/cart-icon.svg" alt=""/>
        </div>
      </div>

      <div class="product border-round-xl">
        <img class="chocolates-images" src="@/assets/chocolates.svg" alt=""/>

        <div class="flex gap-1 mt-1 align-items-baseline">
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <span class="rating-text font-medium ml-1">5.0</span>
        </div>

        <div class="price flex justify-content-between align-items-center">
          <span class="font-medium text-sm">Name</span>
          <span class="font-bold text-sm">2000 AMD</span>
        </div>

        <div class="price flex justify-content-between align-items-center mt-2">
          <span class="price-cart font-bold text-sm">More</span>
          <img src="@/assets/icons/cart-icon.svg" alt=""/>
        </div>
      </div>
    </div>

    <div class="flex justify-content-center align-items-center">
      <button class="load-more border-1 py-3 px-6 border-round-xl text-base cursor-pointer">Load more</button>
    </div>
  </div>
</template>

<script setup>

const items = ref([
  {
    label: 'All',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
  {
    label: 'Our brands',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
  {
    label: 'Chocolate types',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  },
  {
    label: 'Collections',
    items: [
      {
        label: 'Vue.js',
      },
    ]
  }
]);
</script>

<style scoped>
.chocolates-section, .chocolates {
  padding-left: 14%;
  padding-right: 14%;
  line-height: 24px;
}

.chocolates-section {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  padding-top: 3%;
  row-gap: 5rem;
  padding-bottom: 3rem;
}

.space-btn {
  background-color: var(--dark-orange);
  color: var(--dark-brown);
}

a {
  color: var(--white);
}

.card {
  background-color: white;
  color: black;
  width: 100%;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
}

.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link {
  color: black !important;
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

.rating, .rating-text, .price-cart {
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

@media only screen and (max-width: 1320px) {
  .chocolates-section, .chocolates {
    padding-left: 6%;
    padding-right: 6%;
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