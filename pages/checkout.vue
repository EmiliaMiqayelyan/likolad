<template>
  <div class="checkout">

    <NuxtLink to="/my-card" class="no-underline">
      <div class="flex gap-2 mb-5">
        <img src="@/assets/icons/arrow-icons.svg" alt=""/>
        <p class="my-card-heading">My card</p>
      </div>
    </NuxtLink>

    <div class="checkout-section border-1 border-round-lg p-4">
      <div class="flex flex-column row-gap-4">
        <p class="text-xl">Checkout</p>
        <p class="text-base">To complete the order we will ask you to fill your contacts & delivery address</p>
      </div>

      <div class="mt-4 flex justify-content-between">
        <div>
          <p class="text-xs mb-2">Phone number</p>
          <InputGroup class="w-13rem">
            <InputGroupAddon>
              +374
            </InputGroupAddon>
            <InputText class="pl-2"/>
          </InputGroup>
        </div>

        <div>
          <p class="text-xs mb-2">Phone number 2</p>
          <InputGroup class="w-13rem">
            <InputGroupAddon>
              +374
            </InputGroupAddon>
            <InputText class="pl-2"/>
          </InputGroup>
        </div>

        <div>
          <p class="text-xs mb-2">Choose your region</p>
          <Select v-model="selectedCity" :options="cities" optionLabel="name"
                  class="w-13rem border-white"/>
        </div>

        <div>
          <p class="text-xs mb-2">Type your address</p>
          <InputText class="w-13rem" type="text" v-model="value" value="Hrachya Nersisyan street"/>
        </div>
      </div>

      <div class="mt-4 flex justify-content-between">
        <div>
          <p class="text-xs mb-2">Entry</p>
          <InputText class="w-13rem" type="text" v-model="value" value="1"/>
        </div>

        <div>
          <p class="text-xs mb-2">Apartment number</p>
          <InputText class="w-13rem" type="text" v-model="value" value="1"/>
        </div>

        <div>
          <p class="text-xs mb-2">Floor</p>
          <InputText class="w-13rem" type="text" v-model="value" value="1"/>
        </div>

        <div>
          <p class="text-xs mb-2">Entry code</p>
          <InputText class="w-13rem" type="text" v-model="value" value="1"/>
        </div>
      </div>

      <div class="mt-6">
        <p class="text-sm">Please select the time of your delivery</p>

        <div class="delivery mt-4 flex gap-4">
          <button class="p-3 border-round-lg border-none text-white border-1">As soon as possible</button>
          <button class="p-3 border-round-lg border-none text-white border-1">Within 1 day</button>
          <button class="p-3 border-round-lg border-none text-white border-1">Within 2 days</button>
          <div>
            <p class="other-date">Other</p>
            <button class="p-3 border-round-lg border-none text-white border-1">07/07/2024</button>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-column justify-content-end align-items-end">
        <div class="flex flex-column row-gap-2 w-18rem">

          <div class="flex gap-3">
            <p>Delivery : 100$</p>
            <p>Order’s price: 100$</p>
          </div>

          <p class="total-price mt-0 text-center">Total price: 200$</p>

          <p class="total-price py-2">Payment is accepted only in cash</p>

          <button @click="visible = true" class="order border-none border-round-lg py-3 text-base font-medium w-full">
            Place order
          </button>

          <div>
            <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
              <img src="@/assets/modal-logo.svg" alt=""/>
              <p>Your order has been successfully placed. Thank you!</p>
              <p>We will contact you if necessary.</p>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const selectedCity = ref();
const cities = ref([
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
]);

const visible = ref(false);
</script>

<style scoped>
.checkout {
  padding: 9% 14% 5%;
}

.checkout-section {
  border-color: var(--dark-orange);
}

.my-card-heading {
  color: var(--dark-orange);
}

.p-inputgroup-addon:first-child, .p-inputgroup input:last-child {
  background: none;
  color: var(--dark-orange);
  padding: 12px;
}

.p-inputtext {
  background: none;
  padding: 12px;
  color: var(--white);
}

select {
  background: none;
  padding: 12px;
  border-radius: 5px;
}

.delivery > button, .delivery > div > button {
  background: none;
  border-color: var(--orange);
}

.other-date {
  font-size: 10px;
  margin-top: -18px;
  margin-bottom: 5px;
}

.order {
  background-color: var(--dark-orange);
}

:deep(.p-dialog .p-dialog-header-icons) {
  display: none !important;
}

:deep(.p-dialog .p-dialog-content:last-of-type) {
  text-align: center !important;
}
</style>