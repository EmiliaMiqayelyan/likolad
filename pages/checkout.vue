<template>
  <div class="checkout">

    <NuxtLink to="/my-card" class="no-underline">
      <div class="flex gap-2 mb-5">
        <img src="@/assets/icons/arrow-icons.svg" alt=""/>
        <p class="my-card-heading">{{ $t('checkout.myCard') }}</p>
      </div>
    </NuxtLink>

    <div class="checkout-section border-1 border-round-lg p-4">
      <div class="flex flex-column row-gap-4">
        <p class="text-xl">{{ $t('checkout.checkout') }}</p>
        <p class="text-base">{{ $t('checkout.completeOrderInfo') }}</p>
      </div>

      <div class="mt-4 flex justify-content-between flex-wrap row-gap-4">
        <div class="w-full sm:w-fit">
          <p class="text-xs mb-2">{{ $t('checkout.phoneNumber') }}</p>
          <InputGroup class="sm:w-13rem w-full">
            <InputGroupAddon>
              +374
            </InputGroupAddon>
            <InputText class="pl-2"/>
          </InputGroup>
        </div>

        <div class="w-full sm:w-fit">
          <p class="text-xs mb-2">{{ $t('checkout.phoneNumber2') }}</p>
          <InputGroup class="sm:w-13rem w-full">
            <InputGroupAddon>
              +374
            </InputGroupAddon>
            <InputText class="pl-2"/>
          </InputGroup>
        </div>

        <div class="w-full sm:w-fit">
          <p class="text-xs mb-2">{{ $t('checkout.region') }}</p>
          <Select v-model="selectedCity" :options="cities" optionLabel="name"
                  class="sm:w-13rem w-full border-white"/>
        </div>

        <div class="w-full sm:w-fit">
          <p class="text-xs mb-2">{{ $t('checkout.address') }}</p>
          <InputText class="sm:w-13rem w-full" type="text" v-model="value" value="Hrachya Nersisyan street"/>
        </div>
      </div>

      <div class="mt-4 flex justify-content-between flex-wrap row-gap-4">
        <div class="w-full sm:w-fit">
          <p class="text-xs mb-2">{{ $t('checkout.entry') }}</p>
          <InputText class="sm:w-13rem w-full" type="text" v-model="value" value="1"/>
        </div>

        <div class="w-full sm:w-fit">
          <p class="text-xs mb-2">{{ $t('checkout.apartmentAddress') }}</p>
          <InputText class="sm:w-13rem w-full" type="text" v-model="value" value="1"/>
        </div>

        <div class="w-full sm:w-fit">
          <p class="text-xs mb-2">{{ $t('checkout.floor') }}</p>
          <InputText class="sm:w-13rem w-full" type="text" v-model="value" value="1"/>
        </div>

        <div class="w-full sm:w-fit">
          <p class="text-xs mb-2">{{ $t('checkout.entryCode') }}</p>
          <InputText class="sm:w-13rem w-full" type="text" v-model="value" value="1"/>
        </div>
      </div>

      <div class="mt-6">
        <p class="text-sm">{{ $t('checkout.deliveryTime') }}</p>

        <div class="delivery mt-4 flex gap-4 flex-wrap row-gap-5">
          <button class="p-3 border-round-lg border-none text-white border-1">{{ $t('checkout.time1') }}</button>
          <button class="p-3 border-round-lg border-none text-white border-1">{{ $t('checkout.time2') }}</button>
          <button class="p-3 border-round-lg border-none text-white border-1">{{ $t('checkout.time3') }}</button>
          <div>
            <p class="other-date">{{ $t('checkout.other') }}</p>
            <button class="other-delivery p-3 border-round-lg border-none text-white border-1">07/07/2024</button>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-column sm:justify-content-end justify-content-center sm:align-items-end align-items-center mt-6">
        <div class="flex flex-column row-gap-2 w-21rem">

          <div class="flex gap-3 flex-wrap justify-content-between">
            <p>{{ $t('checkout.delivery') }} 100$</p>
            <p>{{ $t('checkout.orderPrice') }} 100$</p>
          </div>

          <p class="total-price mt-0 text-center">{{ $t('checkout.totalPrice') }} 200$</p>

          <p class="total-price py-2 m-0 text-center">{{ $t('checkout.paymentType') }}</p>

          <button @click="visible = true" class="order border-round-lg py-3 text-base font-medium w-full">
            {{ $t('checkout.orderButton') }}
          </button>

          <div>
            <Dialog v-model:visible="visible" modal :pt="{ header: { class: 'flex justify-content-end pb-0' }, content: { class: 'flex flex-column align-items-center justify-content-end' }}">
              <img width="auto" height="auto" style="width: max-content" src="@/assets/modal-logo.svg" alt=""/>
              <p class="font-medium">{{ $t('checkout.orderMessage') }} <span style="color: var(--dark-orange)">{{ $t('checkout.thankYou') }}</span></p>
              <p class="font-normal mt-0">{{ $t('checkout.contactMessage') }}</p>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  padding: 11rem 14% 5%;
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

.delivery > button:focus, .other-delivery:focus {
 background-color: var(--orange);
  color: var(--black) !important;
}

.other-date {
  font-size: 10px;
  margin-top: -18px;
  margin-bottom: 5px;
}

.order {
  background-color: var(--dark-orange);
  border: 2px solid var(--dark-orange);
}

.order:hover {
  background-color: var(--black);
  color: var(--dark-orange);
  transition: 0.5s;
}

:deep(.p-inputtext:enabled:hover){
  border-color: var(--dark-orange);
}

:deep(.p-inputtext:enabled:focus){
  box-shadow: unset;
}

@media only screen and (max-width: 1320px) {
  .checkout {
    padding: 9rem 6% 5%;
  }
}
</style>