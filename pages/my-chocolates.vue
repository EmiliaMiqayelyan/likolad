<template>
  <div class="my-chocolates">
    <div class="flex flex-column justify-content-center w-full align-items-center">
      <p class="text-xl">My chocolate</p>
      <p class="chocolates-desc text-center text-sm mb-6 mt-4">Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.</p>
    </div>

    <div class="create-chocolates border-1 border-round-lg sm:p-5 p-3">
      <div class="flex gap-2 text-sm mb-2">
        <p>Please select the ingredients below to <span class="create-choc-text">create your chocolate</span></p>
      </div>

      <div class="flex flex-column row-gap-4">
        <div class="flex flex-column gap-3">
          <p class="choc-ingredients">1. Chocolate type</p>

          <div class="flex gap-4 flex-wrap">
            <div class="choc-type-section border-1 border-round-lg w-max p-2">
              <img src="@/assets/choc-type/choc-type1.svg" alt=""/>
              <p class="m-0 text-center">Dark</p>
            </div>

            <div class="choc-type-section border-1 border-round-lg w-max p-2">
              <img src="@/assets/choc-type/choc-type2.svg" alt=""/>
              <p class="m-0 text-center">Milk</p>
            </div>

            <div class="choc-type-section border-1 border-round-lg w-max p-2">
              <img src="@/assets/choc-type/choc-type3.svg" alt=""/>
              <p class="m-0 text-center">White</p>
            </div>

            <div class="choc-type-section border-1 border-round-lg w-max p-2">
              <img src="@/assets/choc-type/choc-type4.svg" alt=""/>
              <p class="m-0 text-center">Ruby</p>
            </div>

            <div class="choc-type-section border-1 border-round-lg w-max p-2">
              <img src="@/assets/choc-type/choc-type5.svg" alt=""/>
              <p class="m-0 text-center">Gold</p>
            </div>
          </div>
        </div>

        <div class="flex flex-column gap-3">
          <p class="choc-ingredients">2. Chocolate filling</p>

          <div class="flex gap-4 flex-wrap">
            <button class="filling-btn border-1 border-round-lg px-5 py-2 text-sm">Filling</button>
            <button class="filling-btn border-1 border-round-lg px-5 py-2 text-sm">Filling</button>
            <button class="filling-btn border-1 border-round-lg px-5 py-2 text-sm">Filling</button>
            <button class="filling-btn border-1 border-round-lg px-5 py-2 text-sm">Filling</button>
            <button class="filling-btn border-1 border-round-lg px-5 py-2 text-sm">Filling</button>
          </div>
        </div>

        <div class="flex flex-column gap-3">
          <p class="choc-ingredients">3. Gram size</p>

          <div class="flex gap-4 flex-wrap">
            <button class="filling-btn border-1 border-round-lg px-4 py-2 text-sm">100g</button>
            <button class="filling-btn border-1 border-round-lg px-4 py-2 text-sm">200g</button>
            <button class="filling-btn border-1 border-round-lg px-4 py-2 text-sm">400g</button>
            <button class="filling-btn border-1 border-round-lg px-4 py-2 text-sm">600g</button>
          </div>

          <div class="flex flex-column gap-3">
            <p class="text-xs">Other</p>

            <div class="flex gap-4">
              <button class="filling-btn border-1 border-round-lg px-5 py-3 text-sm"></button>
            </div>
          </div>
        </div>

        <div class="flex flex-column gap-3">
          <p class="choc-ingredients">4. Choose packaging</p>

          <div>
            <TabMenu v-model:activeIndex="active" :model="items"/>

            <div class="flex gap-4 mt-5 flex-wrap">
              <div class="choc-type-section border-1 border-round-lg w-max p-2">
                <img src="@/assets/choc-type/choc-type1.svg" alt=""/>
                <p class="m-0 text-center">20*20cm</p>
              </div>

              <div class="choc-type-section border-1 border-round-lg w-max p-2">
                <img src="@/assets/choc-type/choc-type2.svg" alt=""/>
                <p class="m-0 text-center">40*40cm</p>
              </div>

              <div class="choc-type-section border-1 border-round-lg w-max p-2">
                <img src="@/assets/choc-type/choc-type3.svg" alt=""/>
                <p class="m-0 text-center">60*60cm</p>
              </div>

              <div class="choc-type-section border-1 border-round-lg w-max p-2">
                <img src="@/assets/choc-type/choc-type4.svg" alt=""/>
                <p class="m-0 text-center">70*70cm</p>
              </div>

              <div class="choc-type-section border-1 border-round-lg w-max p-2">
                <img src="@/assets/choc-type/choc-type5.svg" alt=""/>
                <p class="m-0 text-center">80*80cm</p>
              </div>
            </div>
          </div>
        </div>

        <div class="add-message flex flex-column row-gap-3">
          <p>Add a Massage</p>

          <div class="message-text-section flex flex-column row-gap-2">
            <div class="add-message-text border-1 border-round-lg p-3">
              <p class="m-0 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
              </p>
            </div>
            <p class="text-right text-xs">0/150</p>
          </div>
        </div>

        <div class="w-full flex flex-column justify-content-end align-items-end">
          <div class="flex flex-column row-gap-3 w-15rem">
            <p class="text-center">Order’s price: 100$</p>
            <NuxtLink to="/my-card">
              <button class="add-card mt-1 border-round-lg py-3 text-base font-medium w-full">
                Add to card
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const active = ref(0);

const items = ref([
  {label: 'Box'},
  {label: 'Bag'}
]);
</script>

<style>
.my-chocolates {
  padding: 8rem 14% 5%;
}

.chocolates-desc {
  width: 33rem
}

.create-chocolates, .choc-type-section, .filling-btn, .add-message-text {
  border-color: var(--dark-orange);
}

.create-choc-text, .choc-ingredients {
  color: var(--dark-orange);
}

.filling-btn {
  background: none;
  color: var(--white);
}

.p-tabmenu .p-tabmenu-nav, .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link, .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
  background: none !important;
  width: max-content;
  color: var(--dark-orange);
}

.p-tabmenu .p-tabmenu-ink-bar {
  background-color: var(--dark-orange);
}

.message-text-section {
  width: 39rem;
}

.p-tabmenu .p-tabmenu-nav {
  display: flex;
  width: 17%;
  gap: 17px;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
  width: 60%;
  margin-left: 20px;
}

.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
  border: 0;
}

.add-card {
  background-color: var(--orange);
  color: var(--brown);
  border: 2px solid var(--orange);
}

.add-card:hover {
  background-color: var(--black);
  color: var(--orange);
  transition: 0.5s;
}

.p-tabmenu-nav .p-menuitem-text {
  margin-bottom: 10px;
}

@media only screen and (max-width: 1320px) {
  .my-chocolates {
    padding: 7rem 6% 5%;
  }
}

@media only screen and (max-width: 840px) {
  .message-text-section {
    width: 100%;
  }
}

@media only screen and (max-width: 555px) {
  .chocolates-desc {
    width: 100%;
  }
}
</style>