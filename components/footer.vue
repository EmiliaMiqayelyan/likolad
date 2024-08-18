<template>
  <div class="footer flex justify-content-center flex-column align-items-center border-top-1 md:row-gap-5 row-gap-3">
    <img src="@/assets/footer-logo.svg" alt="" />

    <div class="flex gap-6">
      <a href="https://www.facebook.com/likolad/" target="_blank"><img class="social-icons" src="@/assets/icons/facebook.svg" alt="" /></a>
      <a href="https://www.instagram.com/likolad" target="_blank"><img class="social-icons" src="@/assets/icons/instagram.svg" alt="" /></a>
      <a href="https://www.linkedin.com/company/likolad/" target="_blank"><img class="social-icons" src="@/assets/icons/linkedin.svg" alt="" /></a>
    </div>

    <div class="flex gap-6 flex-wrap justify-content-center row-gap-1">
      <div class="flex align-items-center gap-2">
        <img class="contact-info-icons" src="@/assets/icons/phone.svg" alt="" />
        <span class="info-text text-sm">077 977 445</span>
      </div>

      <div class="flex align-items-center gap-2">
        <img class="contact-info-icons" src="@/assets/icons/email.svg" alt="" />
        <span class="info-text text-sm">info@likolad.am</span>
      </div>

      <div class="flex align-items-center gap-2">
        <img class="contact-info-icons" src="@/assets/icons/location.svg" alt="" />
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

@media only screen and (max-width: 1320px) {
  .footer {
    padding: 3% 10%;
  }
}

@media only screen and (max-width: 1320px) {
  .contact-info-icons, .social-icons {
    width: 30px;
  }
}
</style>