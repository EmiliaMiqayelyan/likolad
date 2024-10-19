<template>
  <div class="create-account flex justify-content-between">
    <div class="create-account-left m-auto">
      <div class="w-full mt-4">
        <p class="text-2xl text-center">Welcome to Likolad</p>
        <p class="text-sm text-center">Create account</p>

        <div class="flex flex-column row-gap-3 mt-5">
          <div class="flex flex-column row-gap-3">
            <input class="create-account-form-inp p-3 border-round-xl border-1" type="email" placeholder="Email*"/>
            <div class="relative">
              <input class="create-account-form-inp p-3 border-round-xl border-1 w-full" type="password"
                     placeholder="Password*"/>
              <img src="@/assets/icons/password.svg" alt="" width="24" height="24" class="pass-eye absolute"/>
            </div>
            <div class="relative">
              <input class="create-account-form-inp p-3 border-round-xl border-1 w-full" type="password"
                     placeholder="Repeat Password*"/>
              <img src="@/assets/icons/password.svg" alt="" width="24" height="24" class="pass-eye absolute"/>
            </div>
          </div>

          <div>
            <NuxtLink to="/account" class="no-underline account-create">
              <p class="text-sm text-center w-21rem">Have an account yet?</p>
            </NuxtLink>
          </div>

          <div class="flex flex-column row-gap-3">
            <NuxtLink to="/confirm-account">
              <button class="sign-in p-3 border-round-xl border-none text-base font-semibold cursor-pointer w-full">
                Sign in
              </button>
            </NuxtLink>
            <button
                class="sign-up flex gap-2 justify-content-center align-items-center p-3 border-round-xl border-none text-base font-semibold cursor-pointer">
              <img src="@/assets/icons/google.svg" alt=""/>
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="create-account-right w-6 lg:flex hidden"></div>
  </div>
</template>

<script>

</script>

<style scoped>
.create-account-left, .create-account-right {
  padding: 11rem 14% 10%;
}

.create-account-right {
  background-image: url("@/assets/auth-bg.svg");
  background-repeat: no-repeat;
}

.sign-in {
  background-color: var(--dark-orange);
}

.create-account-form-inp {
  border-color: var(--dark-orange);
}

::placeholder {
  color: var(--brown);
  font-size: 12px;
}

.sign-up {
  color: #0000008A;
}

.pass-eye {
  right: 10px;
  top: 10px;
}

@media only screen and (max-width: 1320px) {
  .create-account-left, .create-account-right {
    padding: 11rem 6% 10%;
  }
}
</style>