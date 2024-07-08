<template>
  <div class="header top-0 py-3 border-bottom-1 flex gap-5 align-items-center justify-content-between fixed w-full z-1">
    <a href="/"><img src="@/assets/likolad-logo.svg" class="w-4rem h-4rem" alt=""/></a>

    <div class="nav-items  gap-7 xl:flex hidden">
      <NuxtLink to="/our-chocolates" class="no-underline" exact-active-class="active">Our Chocolates</NuxtLink>
      <NuxtLink to="/history" class="no-underline" exact-active-class="active">History</NuxtLink>
    </div>

    <div class="xl:flex hidden gap-6 align-items-center">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-search text-lg font-semibold"></i>
        </InputGroupAddon>
        <InputText placeholder="Search"/>
      </InputGroup>

      <div class="gap-4 xl:flex hidden">
        <NuxtLink to="/favorites"><img src="@/assets/icons/favorites.svg" width="24" height="24" alt=""
                                       class="cursor-pointer"/></NuxtLink>
        <NuxtLink to="/account"><img src="@/assets/icons/account.svg" width="24" height="24" alt=""
                                     class="cursor-pointer"/></NuxtLink>
        <img @click="openPosition('right')" src="@/assets/icons/cart.svg" width="24" height="24" alt=""
             class="cursor-pointer"/>
      </div>

      <Dialog v-model:visible="visible" header="My card" :style="{ width: '17rem', marginLeft: '2rem', position: 'absolute', right: '16rem', top: '5rem' }" :position="position"
              :modal="true" :draggable="false"
              :pt="{ header: { class: 'flex  justify-content-space-between pb-4 font-normal'}}">
        <div>
          <div class="flex gap-3">
            <img src="@/assets/my-card-modal-img.svg" alt=""/>
            <div>
              <p class="text-black font-medium my-1">Royalad</p>
              <p style="color: var(--dark-orange)" class="font-medium my-1">2000 AMD</p>
              <div class="flex gap-2">
                <button class="count-btn border-none text-lg">-</button>
                <button class="count w-2rem h-2rem border-round-xl border-1">1</button>
                <button class="count-btn border-none text-lg">+</button>
              </div>
            </div>
          </div>

          <hr class="card-hr border-1" />

          <div class="flex gap-3">
            <img src="@/assets/my-card-modal-img.svg" alt=""/>
            <div>
              <p class="text-black font-medium my-1">Royalad</p>
              <p style="color: var(--dark-orange)" class="font-medium my-1">2000 AMD</p>
              <div class="flex gap-2">
                <button class="count-btn border-none text-lg">-</button>
                <button class="count w-2rem h-2rem border-round-xl border-1">1</button>
                <button class="count-btn border-none text-lg">+</button>
              </div>
            </div>
          </div>

          <hr class="card-hr border-1" />

          <div class="flex gap-3">
            <img src="@/assets/my-card-modal-img.svg" alt=""/>
            <div>
              <p class="text-black font-medium my-1">Royalad</p>
              <p style="color: var(--dark-orange)" class="font-medium my-1">2000 AMD</p>
              <div class="flex gap-2">
                <button class="count-btn border-none text-lg">-</button>
                <button class="count w-2rem h-2rem border-round-xl border-1">1</button>
                <button class="count-btn border-none text-lg">+</button>
              </div>
            </div>
          </div>

          <hr class="card-hr border-1" />

          <p class="total_price text-center">Total price: 200$</p>

          <NuxtLink to="/checkout">
            <button class="add-to-card border-none border-round-lg py-3 text-base font-medium w-full">
              Checkout
            </button>
          </NuxtLink>
        </div>
      </Dialog>
    </div>

    <div class="block xl:hidden">
      <i class="pi pi-align-right text-xl menu-hamburger" @click="visibleRight = true"></i>

      <Sidebar v-model:visible="visibleRight" header="Right Sidebar" position="right">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
      </Sidebar>
    </div>
  </div>
</template>

<script setup>
const position = ref('right');
const visible = ref(false);
const visibleRight = ref(false);

const openPosition = (pos) => {
  position.value = pos;
  visible.value = true;
}
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

.p-inputgroup input:last-child {
  padding: 8px !important;
}

.p-inputgroup {
  width: 400px !important;
}

.p-inputgroup-addon {
  color: var(--brown);
  border: 2px solid var(--brown);
  border-right: 0;
}

.p-inputgroup input:last-child {
  border: 2px solid var(--brown);
  border-left: 0;
}

::placeholder {
  color: var(--brown) !important;
  font-weight: 500;
}

.p-inputgroup-addon:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.p-inputgroup input:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

:deep(.p-component-overlay) {
  background-color: transparent !important;
}

.count-btn{
  background: none;
}

.card-hr{
  border-color: var(--dark-orange);
}

@media only screen and (max-width: 1320px) {
  .header {
    padding-left: 6%;
    padding-right: 6%;
  }
}
</style>
