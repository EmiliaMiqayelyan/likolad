<template>
  <div class="favorites">
    <p class="mb-3">Favorites</p>

    <div class="p-3 md:p-6 border-1 border-white border-round-lg">
      <div class="flex flex-column row-gap-4">
        <div class="card-product p-3 border-1 border-round-lg flex sm:flex-row flex-column gap-5">
          <img class="cursor-pointer" src="@/assets/card-product.svg" alt=""/>

          <div class="w-full flex flex-column row-gap-2">
            <div class="flex justify-content-between align-items-center">
              <p>Royalad</p>
              <img class="cursor-pointer" src="@/assets/icons/cart.svg" alt=""/>
            </div>
            <p class="favorite-product-desc text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <span class="rating-price font-bold text-sm my-1">2000 AMD</span>

            <div class="flex justify-content-between align-items-center">
              <div class="flex gap-3 mt-2">
                <button class="count-minus-btn w-2rem h-2rem border-circle border-1 border-white text-lg">
                  <span>-</span>
                </button>
                <button class="count w-2rem h-2rem border-round-lg border-1">
                  <span>1</span>
                </button>
                <button class="count-plus-btn w-2rem h-2rem border-circle border-1 border-white text-lg">
                  <span>+</span>
                </button>
              </div>

              <div>
                <img class="cursor-pointer" src="@/assets/icons/delete.svg" alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="card-product p-3 border-1 border-round-lg flex sm:flex-row flex-column gap-5">
          <img src="@/assets/card-product.svg" alt=""/>

          <div class="w-full flex flex-column row-gap-2">
            <div class="flex justify-content-between align-items-center">
              <p>Royalad</p>
              <img class="cursor-pointer" src="@/assets/icons/cart.svg" alt=""/>
            </div>
            <p class="favorite-product-desc text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <span class="rating-price font-bold text-sm my-1">2000 AMD</span>

            <div class="flex justify-content-between align-items-center">
              <div class="flex gap-3 mt-2">
                <button class="count-minus-btn w-2rem h-2rem border-circle border-1 border-white text-lg">-</button>
                <button class="count w-2rem h-2rem border-round-lg border-1">1</button>
                <button class="count-plus-btn w-2rem h-2rem border-circle border-1 border-white text-lg">+</button>
              </div>

              <div>
                <img class="cursor-pointer" src="@/assets/icons/delete.svg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
          class="flex justify-content-between mt-3 md:align-items-end align-items-center md:flex-row flex-column-reverse row-gap-3">
        <button
            class="clear-all-btn flex gap-2 border-1 border-white text-sm align-items-center w-17rem h-3rem py-2 border-round-lg justify-content-center font-normal">
          Clear all
          <img src="@/assets/icons/delete.svg" alt=""/>
        </button>

        <div class="flex flex-column row-gap-2">

          <div class="flex gap-3 flex-row">
            <p>Delivery : 100$</p>
            <p>Order’s price: 100$</p>
          </div>

          <p class="total-price mt-0 text-center">Total price: 200$</p>

          <NuxtLink to="/checkout">
            <button class="add-to-card border-round-lg py-3 text-base font-medium w-17rem">
              Checkout all
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.favorites {
  padding: 11rem 14% 5%;
}

.card-product {
  border-color: var(--dark-orange);
}

.favorite-product-desc {
  width: 73%;
}

.rating-price, .total-price {
  color: var(--dark-orange);
}

.count {
  background: none;
  color: var(--dark-orange);
  border-color: var(--dark-orange);
}

.count:hover {
  background-color: var(--dark-orange);
  color: var(--main-color);
  transition: 0.5s;
}

.clear-all-btn {
  background: none;
  color: var(--text-color);
}

.clear-all-btn:hover {
  color: var(--main-color);
  background-color: var(--text-color);
  transition: 0.5s;
}

.clear-all-btn:hover img {
  filter: brightness(0) saturate(100%) invert(1%) sepia(7%) saturate(4880%) hue-rotate(186deg) brightness(90%) contrast(88%);
}

.add-to-card {
  background-color: var(--orange);
  color: var(--brown);
  border: 2px solid var(--orange);
}

.add-to-card:hover {
  background-color: var(--main-color);
  color: var(--orange);
  transition: 0.5s;
}

.count-minus-btn:hover, .count-plus-btn:hover {
  background-color: var(--main-color);
  color: var(--text-color);
  transition: 0.5s;
}

@media only screen and (max-width: 1320px) {
  .favorites {
    padding: 9rem 6% 5%;
  }
}

@media only screen and (max-width: 1000px) {
  .favorite-product-desc {
    width: 100%;
  }
}
</style>