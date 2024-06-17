<template>
  <div class="my-chocolates">
    <div class="flex flex-column justify-content-center w-full align-items-center">
      <p class="text-xl">My chocolate</p>
      <p class="text-center text-sm mb-6" style="width: 33rem">Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.</p>
    </div>

    <div class="create-chocolates border-1 border-round-lg p-5">
      <div class="flex gap-2 text-sm">
        <p>Please select the ingredients below to</p>
        <p class="create-choc-text">create your chocolate</p>
      </div>

      <div class="flex flex-column row-gap-3">
        <div>
          <p class="choc-ingredients">1. Chocolate type</p>

          <div class="flex gap-4">
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

        <div>
          <p class="choc-ingredients">2. Chocolate filling</p>

          <div class="flex gap-4">
            <button class="filling-btn border-1 border-round-lg px-5 py-2 text-sm">Filling</button>
            <button class="filling-btn border-1 border-round-lg px-5 py-2 text-sm">Filling</button>
            <button class="filling-btn border-1 border-round-lg px-5 py-2 text-sm">Filling</button>
            <button class="filling-btn border-1 border-round-lg px-5 py-2 text-sm">Filling</button>
            <button class="filling-btn border-1 border-round-lg px-5 py-2 text-sm">Filling</button>
          </div>
        </div>

        <div>
          <p class="choc-ingredients">3. Gram size</p>

          <div class="flex gap-4">
            <button class="filling-btn border-1 border-round-lg px-4 py-2 text-sm">100g</button>
            <button class="filling-btn border-1 border-round-lg px-4 py-2 text-sm">200g</button>
            <button class="filling-btn border-1 border-round-lg px-4 py-2 text-sm">400g</button>
            <button class="filling-btn border-1 border-round-lg px-4 py-2 text-sm">600g</button>
          </div>

          <div>
            <p class="text-xs">Other</p>

            <div class="flex gap-4">
              <button class="filling-btn border-1 border-round-lg px-5 py-3 text-sm"></button>
            </div>
          </div>
        </div>

        <div>
          <p class="choc-ingredients">4. Choose packaging</p>

          <div>
            <TabMenu v-model:activeIndex="active" :model="items"/>

            <div class="flex gap-4 mt-5">
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

        <div class="add-message">
          <p>Add a Massage</p>

          <div class="add-message-text border-1 border-round-lg p-3">
            <p class="m-0 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
          </div>

          <p>0/150</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const active = ref(0);

const items = ref([
  {label: 'Box'},
  {label: 'Bag'}
]);
</script>

<style>
.my-chocolates {
  padding: 8% 14% 5%;
}

.create-chocolates, .choc-type-section, .filling-btn {
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

.add-message-text{
  width: 39rem;
  border-color: var(--dark-orange);
}
</style>