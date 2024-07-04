<template>
  <div class="account flex justify-content-between">
    <div class="account-left m-auto">
      <div class="w-full mt-4">
        <p class="text-2xl text-center">Welcome to Likolad</p>
        <p class="text-sm text-center">Please enter your Email and password to log in</p>

        <div class="flex flex-column row-gap-3 mt-5">
          <div class="flex flex-column row-gap-3">
            <input class="account-form-inp p-3 border-round-xl border-1" type="email" placeholder="Email*"/>
            <div class="relative">
              <input class="account-form-inp p-3 border-round-xl border-1 w-full" type="password"
                     placeholder="Password*"/>
              <img src="@/assets/icons/password.svg" alt="" width="24" height="24" class="pass-eye absolute"/>
            </div>
          </div>

          <div class="flex justify-content-between align-items-center">
            <NuxtLink to="create-account" class="no-underline account-create">
              <p class="text-sm">Haven't account yet?</p>
            </NuxtLink>
            <p class="text-sm">Forgot password?</p>
          </div>

          <div class="flex flex-column row-gap-3">
            <button class="sign-in p-3 border-round-xl border-none text-base font-semibold cursor-pointer">
              Sign in
            </button>
            <button
                class="sign-up flex gap-2 justify-content-center align-items-center p-3 border-round-xl border-none text-base font-semibold cursor-pointer">
              <img src="@/assets/icons/google.svg" alt=""/>
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="account-right w-6 lg:flex hidden"></div>
  </div>
</template>

<script>

</script>

<style>
.account-left, .account-right {
  padding: 11rem 14% 10%;
}

.account-right {
  background-image: url("@/assets/auth-bg.svg");
  background-repeat: no-repeat;
}

.sign-in {
  background-color: var(--dark-orange);
}

.account-form-inp {
  border-color: var(--dark-orange);
}

::placeholder {
  color: var(--brown);
  font-size: 12px;
}

.sign-up {
  color: #0000008A;
}

.account-create {
  color: var(--white);
}

.pass-eye {
  right: 10px;
  top: 10px;
}

@media only screen and (max-width: 1320px) {
  .account-left, .account-right {
    padding: 11rem 6% 10%;
  }
}
</style>