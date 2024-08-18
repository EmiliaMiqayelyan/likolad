<template>
  <div class="my-card">
    <p class="mb-3">My card</p>

    <div class="p-3 md:p-6 border-1 border-white border-round-lg">
      <div class="flex flex-column row-gap-4">
        <div class="card-product p-3 border-1 border-round-lg flex sm:flex-row flex-column gap-5">
          <img src="@/assets/card-product.svg" alt=""/>

          <div class="w-full flex flex-column row-gap-2">
            <p>Royalad</p>
            <p class="card-product-desc text-sm">
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
                <img src="@/assets/icons/delete.svg" alt=""/>
              </div>
            </div>

          </div>
        </div>

        <div class="card-product p-3 border-1 border-round-lg flex sm:flex-row flex-column gap-5">
          <img src="@/assets/card-product.svg" alt=""/>

          <div class="w-full flex flex-column row-gap-2">
            <p>Royalad</p>
            <p class="card-product-desc text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
            <span class="rating-price font-bold text-sm my-1">2000 AMD</span>

            <div class="flex justify-content-between align-items-center">
              <div class="flex gap-3 mt-2">
                <button class="w-2rem h-2rem border-circle border-none text-lg">-</button>
                <button class="count w-2rem h-2rem border-round-lg border-1">1</button>
                <button class="w-2rem h-2rem border-circle border-none text-lg">+</button>
              </div>

              <div>
                <img src="@/assets/icons/delete.svg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-content-between mt-3 md:align-items-end align-items-center md:flex-row flex-column-reverse row-gap-3">
        <button
            class="clear-all-btn flex gap-2 border-1 border-white text-xs align-items-center w-17rem h-3rem py-2 border-round-lg justify-content-center font-normal">
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
            <button class="add-to-my-card border-round-lg py-3 text-base font-medium w-17rem">
              Checkout
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.my-card {
  padding: 11rem 14% 5%;
}

.card-product {
  border-color: var(--dark-orange);
}

.card-product-desc {
  width: 63%;
}

.rating-price, .total-price {
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