<template>
  <div class="productId">
    <NuxtLink to="/our-chocolates" class="no-underline">
      <div class="flex align-items-center gap-2">
        <i class="pi pi-angle-double-left left-arrow text-2xl"></i>
        <span class="our-chocolates">Our chocolates</span>
      </div>
    </NuxtLink>

    <div class="product-info w-full py-5 px-4 border-1 mt-5 border-round-xl flex gap-7">
      <div>
        <img src="@/assets/product1.svg" alt=""/>
      </div>

      <div class="flex flex-column row-gap-2 w-full">
        <p class="text-xl">Royalad</p>
        <div class="flex gap-1 mt-1 align-items-baseline">
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <i class="pi pi-star-fill rating"></i>
          <span class="rating-text font-medium ml-1">5.0</span>
        </div>
        <p class="product-desc text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s.
        </p>
        <span class="rating-price font-bold text-sm my-1">2000 AMD</span>
        <p class="text-xs my-1">Choose the chocolate type</p>
        <div class="flex gap-4 chocolate-type">
          <button class="border-1 border-round-xl py-3 px-5 cursor-pointer">Dark</button>
          <button class="border-1 border-round-xl py-3 px-5 cursor-pointer">Milk</button>
          <button class="border-1 border-round-xl py-3 px-5 cursor-pointer">Ruby</button>
          <button class="border-1 border-round-xl py-3 px-5 cursor-pointer">White</button>
        </div>
        <div class="mt-3 flex justify-content-between">
          <div class="flex gap-3">
            <button class="w-2rem h-2rem border-circle border-none text-lg">-</button>
            <button class="count w-2rem h-2rem border-round-lg border-1">1</button>
            <button class="w-2rem h-2rem border-circle border-none text-lg">+</button>
          </div>

          <div>
            <button class="add-card flex align-items-center border-round-xl gap-3 px-8 font-semibold border-none py-3">Add to card <img src="@/assets/icons/cart-icon.svg" alt="" /></button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <p class="text-xl">You may also like</p>

      <div class="mt-4">
        <SlidersProductSlider />
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.productId {
  padding: 8% 14% 3%;
}

.our-chocolates, .left-arrow {
  color: var(--dark-orange);
  text-decoration: none !important;
}

.product-info {
  border-color: var(--dark-orange);
}

.rating, .rating-price, .rating-text {
  color: var(--dark-orange);
}

.product-desc{
  width: 40rem;
}

.chocolate-type > button, .count{
  background: none;
  color: var(--dark-orange);
  border-color: var(--dark-orange);
}

.chocolate-type > button:focus{
  background-color: var(--dark-orange);
  color: var(--white);
}

.add-card{
  margin-top: -25px;
}
</style>