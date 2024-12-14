<template>
  <div class="checkout">

    <div class="w-max">
      <NuxtLink to="/my-card" class="no-underline">
        <div class="flex gap-2 mb-5">
          <img width="15" src="@/assets/icons/arrow-icons.svg" alt=""/>
          <p class="my-card-heading">{{ $t('checkout.myCard') }}</p>
        </div>
      </NuxtLink>
    </div>

    <div class="checkout-section border-1 border-round-lg p-4">
      <div class="flex flex-column row-gap-4">
        <p class="text-xl">{{ $t('checkout.checkout') }}</p>
        <p class="text-base">{{ $t('checkout.completeOrderInfo') }}</p>
      </div>

      <form @submit.prevent="submitOrder">
        <div class="mt-4 flex justify-content-between flex-wrap row-gap-4">
          <div class="w-full sm:w-fit">
            <p class="text-xs mb-2">{{ $t('checkout.phoneNumber') }}</p>
            <InputGroup class="sm:w-13rem w-full">
              <InputGroupAddon>
                +374
              </InputGroupAddon>
              <InputMask v-model="order.phone1" class="pl-2" variant="filled" mask="99-999999" placeholder="99-999999"/>
            </InputGroup>
            <p v-if="errors.phone1" class="error-message">{{ errors.phone1 }}</p>
          </div>

          <div class="w-full sm:w-fit">
            <p class="text-xs mb-2">{{ $t('checkout.phoneNumber2') }}</p>
            <InputGroup class="sm:w-13rem w-full">
              <InputGroupAddon>
                +374
              </InputGroupAddon>
              <InputMask v-model="order.phone2" class="pl-2" variant="filled" mask="99-999999" placeholder="99-999999"/>
            </InputGroup>
            <p v-if="errors.phone2" class="error-message">{{ errors.phone2 }}</p>
          </div>

          <div class="w-full sm:w-fit">
            <p class="text-xs mb-2">{{ $t('checkout.region') }}</p>
            <InputText class="sm:w-13rem w-full" type="text" v-model="order.region" placeholder="Yerevan"/>
            <p v-if="errors.region" class="error-message">{{ errors.region }}</p>
          </div>

          <div class="w-full sm:w-fit">
            <p class="text-xs mb-2">{{ $t('checkout.address') }}</p>
            <InputText class="sm:w-13rem w-full" type="text" v-model="order.address"/>
            <p v-if="errors.address" class="error-message">{{ errors.address }}</p>
          </div>
        </div>

        <div class="mt-4 flex justify-content-between flex-wrap row-gap-4">
          <div class="w-full sm:w-fit">
            <p class="text-xs mb-2">{{ $t('checkout.entry') }}</p>
            <InputText class="sm:w-13rem w-full" type="text" v-model="order.entry"/>
            <p v-if="errors.entry" class="error-message">{{ errors.entry }}</p>
          </div>

          <div class="w-full sm:w-fit">
            <p class="text-xs mb-2">{{ $t('checkout.apartmentAddress') }}</p>
            <InputText class="sm:w-13rem w-full" type="text" v-model="order.apartment"/>
            <p v-if="errors.apartment" class="error-message">{{ errors.apartment }}</p>
          </div>

          <div class="w-full sm:w-fit">
            <p class="text-xs mb-2">{{ $t('checkout.floor') }}</p>
            <InputText class="sm:w-13rem w-full" type="text" v-model="order.floor"/>
            <p v-if="errors.floor" class="error-message">{{ errors.floor }}</p>
          </div>
        </div>

        <div class="mt-6">
          <p class="text-sm">{{ $t('checkout.deliveryTime') }}</p>

          <div class="delivery mt-4 flex gap-4 flex-wrap row-gap-5">
            <Button
                :class="getButtonClass('asap')"
                @click="setDeliveryDate('asap')"
                class="p-3 border-round-lg border-none border-1"
                :label="$t('checkout.time1')"
                severity="info"
                raised
            />
            <Button
                :class="getButtonClass('within1day')"
                @click="setDeliveryDate('within1day')"
                class="p-3 border-round-lg border-none border-1"
                :label="$t('checkout.time2')"
                severity="info"
                raised
            />
            <Button
                :class="getButtonClass('within2day')"
                @click="setDeliveryDate('within2day')"
                class="p-3 border-round-lg border-none border-1"
                :label="$t('checkout.time3')"
                severity="info"
                raised
            />
            <input
                v-model="customDate"
                @input="setCustomDeliveryDate"
                type="text"
                placeholder="Other delivery date"
                class="other-delivery p-3 border-round-lg border-none text-white border-1"
            />
          </div>
        </div>

        <div
            class="w-full flex flex-column sm:justify-content-end justify-content-center sm:align-items-end align-items-center mt-6">
          <div class="flex flex-column row-gap-2 w-19rem">

            <p class="m-1 text-center">{{ $t('checkout.totalPrice') }} {{ cartTotal }} AMD</p>

            <p class="payment-type m-0 text-center">{{ $t('checkout.paymentType') }}</p>

            <button @click="visible" type="submit"
                    class="order border-round-lg py-3 text-base font-medium w-full">
              {{ $t('checkout.orderButton') }}
            </button>

            <div>
              <Dialog v-model:visible="visible" modal
                      :pt="{ header: { class: 'flex justify-content-end pb-0' }, content: { class: 'flex flex-column align-items-center justify-content-end' }}">
                <img width="auto" height="auto" style="width: max-content" src="@/assets/modal-logo.svg" alt=""/>
                <p class="font-medium">{{ $t('checkout.orderMessage') }}
                  <span style="color: var(--text-color)">{{ $t('checkout.thankYou') }}</span>
                </p>
                <p class="font-normal mt-0">{{ $t('checkout.contactMessage') }}</p>
              </Dialog>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {useCartStore} from "~/store/cart";

const API_URL = import.meta.env.VITE_API_URL;

const order = ref({
  phone1: '',
  phone2: '',
  region: '',
  address: '',
  apartment: '',
  floor: '',
  entry: '',
  deliveryDate: '',
  status: 'pending'
});

const orders = ref([]);
const customDate = ref('');
const cartStore = useCartStore();
const cartTotal = computed(() => cartStore.cartTotal);

const visible = ref(false);
const errors = ref({
  phone1: '',
  phone2: '',
  region: '',
  address: '',
  apartment: '',
  floor: '',
  entry: ''
});

const validatePhone = (phone) => {
  const phoneRegex = /^\d{2}-\d{6}$/;
  return phoneRegex.test(phone);
};

const validateOrder = () => {
  let isValid = true;

  Object.keys(errors.value).forEach(key => {
    errors.value[key] = '';
  });

  if (!order.value.phone1 || !validatePhone(order.value.phone1)) {
    errors.value.phone1 = '*Valid phone number is required';
    isValid = false;
  }

  if (order.value.phone2 && !validatePhone(order.value.phone2)) {
    errors.value.phone2 = '*Phone number must be valid';
    isValid = false;
  }

  if (!order.value.region) {
    errors.value.region = '*Region is required';
    isValid = false;
  }

  if (!order.value.address) {
    errors.value.address = '*Address is required';
    isValid = false;
  }

  if (!order.value.apartment) {
    errors.value.apartment = '*Apartment number is required';
    isValid = false;
  }

  if (!order.value.floor) {
    errors.value.floor = '*Floor is required';
    isValid = false;
  }

  if (!order.value.entry) {
    errors.value.entry = '*Entry is required';
    isValid = false;
  }

  return isValid;
};

const setDeliveryDate = (date) => {
  order.value.deliveryDate = date;
  customDate.value = '';
};

const setCustomDeliveryDate = () => {
  order.value.deliveryDate = customDate.value;
};

watch(customDate, (newVal) => {
  if (newVal) {
    order.value.deliveryDate = newVal;
  }
});

const getButtonClass = (date) => {
  return order.value.deliveryDate === date ? 'active-button' : '';
};

const submitOrder = async () => {
  if (validateOrder()) {
    try {

      const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post(`${API_URL}/order`, order.value, config);
      orders.value.push(response.data);

      order.value = {
        phone1: '',
        phone2: '',
        region: '',
        address: '',
        apartment: '',
        floor: '',
        entry: '',
        deliveryDate: '',
        status: 'pending'
      };
      customDate.value = '';

      if (typeof window !== 'undefined') {
        localStorage.setItem('orders', JSON.stringify(orders.value));
      }

      visible.value = true;

    } catch (error) {
      console.error('Error submitting order:', error);
    }
  } else {
    visible.value = false;
  }
};
</script>

<style scoped>
.checkout {
  padding: 11rem 14% 5%;
}

.checkout-section {
  border-color: var(--text-color);
}

.error-message {
  color: #7F6B3C;
  font-size: 12px;
}

.my-card-heading, .payment-type {
  color: var(--text-color);
}

.active-button {
  background-color: var(--text-color);
  border-color: var(--text-color);
}

.other-delivery::placeholder {
  color: var(--text-color);
}

.p-inputgroup-addon:first-child, .p-inputgroup input:last-child {
  background: none;
  color: var(--text-color);
  padding: 12px;
}

.p-inputtext {
  background: none;
  padding: 12px;
  color: var(--text-color);
}

select {
  background: none;
  padding: 12px;
  border-radius: 5px;
}

.delivery > button, .delivery > div > button {
  background: none;
  border-color: var(--text-color);
  color: var(--text-color);
}

.other-delivery {
  background: none;
  border-color: var(--text-color);
}

.delivery > button:focus {
  background-color: var(--text-color);
  color: var(--main-color) !important;
}

.p-button.p-button-info:not(:disabled):focus {
  box-shadow: unset !important;
}

.order {
  background-color: var(--text-color);
  border: 2px solid var(--text-color);
  color: #fff;
}

.order:hover {
  background-color: var(--main-color);
  color: var(--text-color);
  transition: 0.5s;
}

:deep(.p-inputtext:enabled:hover) {
  border-color: #7F6B3C;
}

:deep(.p-inputtext:enabled:focus) {
  box-shadow: unset;
}

@media only screen and (max-width: 1320px) {
  .checkout {
    padding: 9rem 6% 5%;
  }
}
</style>