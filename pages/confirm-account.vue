<template>
  <div class="confirm-account flex justify-content-between">
    <div class="confirm-account-left m-auto">
      <div class="w-full mt-4">
        <p class="text-2xl text-center">Welcome to Likolad</p>
        <p class="text-sm text-center my-3">Create account</p>

        <p class="text-sm">WE emailed you a four-digit code to anisargsyan@gmail.com.</p>

        <p class="text-xs">Enter the code below to confirm your email address</p>

        <div class="flex gap-5 justify-content-center my-4">
          <div
              class="confirm-digits border-1 border-round-xl w-3rem h-4rem flex align-items-center justify-content-center">
            <p class="m-0">0</p>
          </div>
          <div
              class="confirm-digits border-1 border-round-xl w-3rem h-4rem flex align-items-center justify-content-center">
            <p class="m-0">0</p>
          </div>
          <div
              class="confirm-digits border-1 border-round-xl w-3rem h-4rem flex align-items-center justify-content-center">
            <p class="m-0">0</p>
          </div>
          <div
              class="confirm-digits border-1 border-round-xl w-3rem h-4rem flex align-items-center justify-content-center">
            <p class="m-0">0</p>
          </div>
        </div>

        <button class="confirm p-3 border-round-xl border-none text-base font-semibold cursor-pointer w-full">
          Confirm
        </button>
      </div>
    </div>

    <div class="confirm-account-right w-6 lg:flex hidden"></div>
  </div>
</template>

<script>

</script>

<style>
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

.confirm-digits {
  border-color: var(--dark-orange);
}

@media only screen and (max-width: 1320px) {
  .confirm-account-left, .confirm-account-right {
    padding: 11rem 6% 10%;
  }
}
</style>