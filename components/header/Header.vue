<template>
  <div class="header p-2 border-bottom-2 flex justify-content-center gap-5 align-items-center">
    <img src="@/assets/likolad-logo.svg" alt="" />

    <div class="nav-items flex gap-4">
      <p>Home</p>
      <p>Categories</p>
      <p>Collections</p>
      <p>About us</p>
    </div>

    <div>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-search"></i>
        </InputGroupAddon>
        <InputText placeholder="Username" />
      </InputGroup>
    </div>
  </div>
</template>

<script>

</script>

<style>
.header{
  background-color: var(--black);
  border-color: #DBA957;
}

.nav-items{
  color: var(--white);
}
</style>