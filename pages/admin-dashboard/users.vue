<template>
  <div class="pt-5 text-center">
    <h2>Sign Up</h2>

    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-full md:w-5" @submit.prevent="submitUsers">
        <div class="card flex justify-content-center flex-column row-gap-4">
          <div class="flex flex-column sm:flex-row gap-3">
            <InputText type="text" v-model="user.firstName" placeholder="First Name"/>
            <InputText type="text" v-model="user.lastName" placeholder="Last Name"/>
          </div>

          <div class="flex flex-column sm:flex-row gap-3">
            <InputText type="email" v-model="user.email" placeholder="Email"/>
            <Password v-model="user.password" :feedback="false" toggleMask placeholder="Password" />
          </div>

          <div class="flex flex-column sm:flex-row gap-3">
            <InputText type="date" v-model="user.birthday" placeholder="Birthday"/>
            <InputText type="text" v-model="user.location" placeholder="Location"/>
          </div>

          <div class="flex flex-column sm:flex-row gap-3">
            <InputText type="number" v-model="user.phone" placeholder="Phone"/>
          </div>

          <div class="w-full text-right">
            <Button class="w-9rem" label="Send" type="submit" outlined  severity="secondary"/>
          </div>
        </div>
      </form>
    </div>

    <div v-if="errors" class="p-3 mb-4" style="color: red;">
      {{ errors }}
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const user = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  birthday: '',
  location: '',
  phone: '',
})

const users = ref([]);
const errors = ref('');

const submitUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-up`, user.value);
    users.value.push(response.data);

    user.value = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthday: '',
      location: '',
      phone: '',
    };

    errors.value = '';

    localStorage.setItem('user', JSON.stringify(users.value));
  } catch (error) {
    console.error('Error fetching user:', error);
    errors.value = error.response?.data?.error || 'An error occurred while fetching users.';
  }
}
</script>

<style scoped>
:deep(.p-inputtext) {
  width: 100%;
}

:deep(.p-password) {
  width: 100%;
}
</style>