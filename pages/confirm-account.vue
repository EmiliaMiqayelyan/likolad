<template>
  <div class="confirm-account flex justify-content-between">
    <div class="confirm-account-left m-auto">
      <div class="w-full mt-4">
        <p class="text-2xl text-center">Welcome to Likolad</p>
        <p class="text-sm text-center my-3">Create account</p>

        <p class="text-sm">WE emailed you a four-digit code to anisargsyan@gmail.com.</p>

        <p class="text-xs">Enter the code below to confirm your email address</p>

        <div class="card flex justify-content-center pb-3">
          <InputOtp v-model="value" integerOnly />
        </div>

        <button class="confirm p-3 border-round-xl border-none text-base font-semibold cursor-pointer w-full">
          Confirm
        </button>
      </div>
    </div>

    <div class="confirm-account-right w-6 lg:flex hidden"></div>
  </div>
</template>

<script setup>
const value = ref(null);
</script>

<style scoped>
.confirm-account-left, .confirm-account-right {
  padding: 11rem 14% 10%;
}

.confirm-account-right {
  background-image: url("@/assets/auth-bg.svg");
  background-repeat: no-repeat;
}

.confirm {
  background-color: var(--dark-orange);
}

.p-inputotp {
  gap: 1rem;
}

.p-inputotp .p-inputtext {
  border-color: var(--dark-orange);
  background: none;
  color: var(--white);
}

.p-inputtext:enabled:focus {
  box-shadow: none;
}

@media only screen and (max-width: 1320px) {
  .confirm-account-left, .confirm-account-right {
    padding: 11rem 6% 10%;
  }
}
</style>