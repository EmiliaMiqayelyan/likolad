<template>
  <div class="account flex justify-content-between">
    <div class="account-left w-6">
      <p class="text-2xl text-center">Welcome to Likolad</p>
      <p class="text-sm text-center">Create account</p>

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

    <div class="account-right w-6"></div>
  </div>
</template>

<script>

</script>

<style>
.account-left, .account-right {
  padding: 14% 14% 10%;
}

.account-right {
  background-image: url("@/assets/auth-bg.svg");
  background-repeat: no-repeat;
}

.confirm {
  background-color: var(--dark-orange);
}

.confirm-digits {
  border-color: var(--dark-orange);
}
</style>