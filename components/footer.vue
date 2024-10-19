<template>
  <div
      class="footer flex justify-content-center flex-column align-items-center row-gap-3 text-center border-top-1 w-full">
    <img width="100" src="@/assets/footer-logo.svg" alt=""/>

    <div class="flex gap-6">
      <a :href="contacts.facebook" target="_blank">
        <img width="35" class="social-icons" src="@/assets/icons/facebook.svg" alt="Facebook"/>
      </a>
      <a :href="contacts.instagram" target="_blank">
        <img width="35" class="social-icons" src="@/assets/icons/instagram.svg" alt="Instagram"/>
      </a>
      <a :href="contacts.linkedin" target="_blank">
        <img width="35" class="social-icons" src="@/assets/icons/linkedin.svg" alt="LinkedIn"/>
      </a>
    </div>

    <div class="flex gap-6 flex-wrap justify-content-center row-gap-1">
      <div class="flex align-items-center gap-2">
        <img width="35" class="contact-info-icons" src="@/assets/icons/phone.svg" alt="Phone"/>
        <span class="info-text text-sm">{{ contacts.phone }}</span>
      </div>

      <div class="flex align-items-center gap-2">
        <img width="35" class="contact-info-icons" src="@/assets/icons/email.svg" alt="Email"/>
        <span class="info-text text-sm">{{ contacts.gmail }}</span>
      </div>

      <div class="flex align-items-center gap-2">
        <img width="35" class="contact-info-icons" src="@/assets/icons/location.svg" alt="Location"/>
        <span class="info-text text-sm">{{ contacts.location }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

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
    const response = await axios.get(`${API_URL}/contact`);
    if (response.data.length > 0) {
      contacts.value = response.data[0];
    } else {
      console.error('No contact data found');
    }
  } catch (error) {
    console.error('Error fetching contact data:', error);
  }
};

onMounted(() => {
  fetchContacts();
});
</script>

<style scoped>
.footer {
  padding: 2% 14%;
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