<template>
  <div class="header top-0 py-3 border-bottom-1 flex gap-5 align-items-center justify-content-between fixed w-full z-1">
    <a href="/"><img src="@/assets/likolad-logo.svg" class="w-4rem h-4rem" alt=""/></a>

    <div class="nav-items flex gap-7">
      <NuxtLink to="/our-chocolates" class="no-underline" exact-active-class="active">Our Chocolates</NuxtLink>
      <NuxtLink to="/history" class="no-underline" exact-active-class="active">History</NuxtLink>
    </div>

    <div class="flex gap-6 align-items-center">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-search text-lg font-semibold"></i>
        </InputGroupAddon>
        <InputText placeholder="Search"/>
      </InputGroup>

      <div class="flex gap-4">
        <NuxtLink to="/account"><img src="@/assets/icons/account.svg" width="24" height="24" alt="" class="cursor-pointer"/></NuxtLink>
        <img src="@/assets/icons/cart.svg" width="24" height="24" alt="" class="cursor-pointer"/>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.header {
  background-color: var(--black);
  border-color: var(--dark-orange);
  padding-left: 14%;
  padding-right: 14%;
}

.nav-items a {
  color: var(--white);
  font-size: 15px;
}

.nav-items a:focus, .nav-items a.active {
  color: var(--dark-orange);
}

.p-inputgroup input:last-child {
  padding: 8px !important;
}

.p-inputgroup {
  width: 400px !important;
}

.p-inputgroup-addon {
  color: var(--brown);
  border: 2px solid var(--brown);
  border-right: 0;
}

.p-inputgroup input:last-child {
  border: 2px solid var(--brown);
  border-left: 0;
}

::placeholder {
  color: var(--brown) !important;
  font-weight: 500;
}

.p-inputgroup-addon:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.p-inputgroup input:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
