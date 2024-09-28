<template>
  <div v-for="(contact, index) in contacts" :key="index"
       class="footer flex justify-content-center flex-column align-items-center border-top-1 md:row-gap-5 row-gap-3">
    <img src="@/assets/footer-logo.svg" alt=""/>

    <div class="flex gap-6">
      <a :href="contact.facebook" target="_blank">
        <img class="social-icons" src="@/assets/icons/facebook.svg" alt="Facebook"/>
      </a>
      <a :href="contact.instagram" target="_blank">
        <img class="social-icons" src="@/assets/icons/instagram.svg" alt="Instagram"/>
      </a>
      <a :href="contact.linkedin" target="_blank">
        <img class="social-icons" src="@/assets/icons/linkedin.svg" alt="LinkedIn"/>
      </a>
    </div>

    <div class="flex gap-6 flex-wrap justify-content-center row-gap-1">
      <div class="flex align-items-center gap-2">
        <img class="contact-info-icons" src="@/assets/icons/phone.svg" alt="Phone"/>
        <span class="info-text text-sm">{{ contact.phone }}</span>
      </div>

      <div class="flex align-items-center gap-2">
        <img class="contact-info-icons" src="@/assets/icons/email.svg" alt="Email"/>
        <span class="info-text text-sm">{{ contact.gmail }}</span>
      </div>

      <div class="flex align-items-center gap-2">
        <img class="contact-info-icons" src="@/assets/icons/location.svg" alt="Location"/>
        <span class="info-text text-sm">{{ contact.location }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

const contacts = ref({
  phone: '',
  gmail: '',
  instagram: '',
  facebook: '',
  linkedin: '',
  location: '',
})

const fetchContacts = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/contact');
    contacts.value = response.data;

  } catch (error) {
    console.error('Error fetching contact data:', error);
  }
};

onMounted(() => {
  fetchContacts();
});
</script>

<style>
.footer {
  padding: 3% 14%;
  border-color: #EEC574;
}

.info-text {
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