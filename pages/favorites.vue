<template>
  <div class="my-card">
    <p class="mb-3">Favorites</p>

    <div class="p-6 border-1 border-white border-round-lg">
      <div class="flex flex-column row-gap-4">
        <div class="card-product p-3 border-1 border-round-lg flex gap-5">
          <img src="@/assets/card-product.svg" alt=""/>

          <div class="w-full flex flex-column row-gap-2">
            <div class="flex justify-content-between align-items-center">
              <p>Royalad</p>
              <img src="@/assets/icons/cart.svg" alt="" />
            </div>
            <p class="product-desc text-sm">
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

        <div class="card-product p-3 border-1 border-round-lg flex gap-5">
          <img src="@/assets/card-product.svg" alt=""/>

          <div class="w-full flex flex-column row-gap-2">
            <div class="flex justify-content-between align-items-center">
              <p>Royalad</p>
              <img src="@/assets/icons/cart.svg" alt="" />
            </div>
            <p class="product-desc text-sm">
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

      <div class="flex justify-content-between mt-3 align-items-end">
        <button
            class="clear-all-btn flex gap-2 border-1 border-white text-xs align-items-center w-15rem h-3rem py-2 border-round-lg justify-content-center font-normal">
          Clear all
          <img src="@/assets/icons/delete.svg" alt=""/>
        </button>

        <div class="flex flex-column row-gap-2">

          <div class="flex gap-3">
            <p>Delivery : 100$</p>
            <p>Order’s price: 100$</p>
          </div>

          <p class="total-price mt-0 text-center">Total price: 200$</p>

          <NuxtLink to="/checkout">
            <button class="add-to-card border-none border-round-lg py-3 text-base font-medium w-full">
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

<style>
.my-card {
  padding: 9% 14% 5%;
}

.card-product {
  border-color: var(--dark-orange);
}

.product-desc {
  width: 40rem;
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

.add-to-card {
  background-color: var(--orange);
  color: var(--brown);
}
</style>