<template>
  <div class="footer flex justify-content-center flex-column align-items-center border-top-1 row-gap-5">
    <img src="@/assets/footer-logo.svg" alt="" />

    <div class="flex gap-6">
      <img src="@/assets/icons/facebook.svg" alt="" />
      <img src="@/assets/icons/instagram.svg" alt="" />
      <img src="@/assets/icons/linkedin.svg" alt="" />
    </div>

    <div class="flex gap-6">
      <div class="flex align-items-center gap-2">
        <img src="@/assets/icons/phone.svg" alt="" />
        <span class="info-text text-sm">077 977 445</span>
      </div>

      <div class="flex align-items-center gap-2">
        <img src="@/assets/icons/email.svg" alt="" />
        <span class="info-text text-sm">likoladllc@gmail.com</span>
      </div>

      <div class="flex align-items-center gap-2">
        <img src="@/assets/icons/location.svg" alt="" />
        <span class="info-text text-sm">Hrachya Nersisyan street</span>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.footer{
  padding: 3% 14%;
  border-color: #EEC574;
}

.info-text{
  color: var(--dark-orange);
}
</style>