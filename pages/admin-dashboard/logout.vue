<template>
  <div class="pt-5 text-center">
    <h2>Sign In</h2>

    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-full md:w-4" @submit.prevent="submitSignIn">
        <div class="card flex justify-content-center flex-column row-gap-4">
          <InputText type="email" v-model="signIn.email" placeholder="Email"/>
          <Password v-model="signIn.password" :feedback="false" toggleMask placeholder="Password"/>
        </div>

        <div class="w-full text-right">
          <Button class="w-9rem" label="Send" type="submit" outlined  severity="secondary"/>
        </div>
      </form>
    </div>

    <div v-if="errors" class="error-message p-3 mb-4" style="color: red;">
      {{ errors }}
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const signIn = ref({
  email: '',
  password: ''
})

const signInUsers = ref([]);
const errors = ref('');

const submitSignIn = async () => {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-in`, signIn.value);

    const {token} = response.data;

    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
      window.location.reload();
    } 

    signInUsers.value.push(response.data);

    signIn.value = {
      email: '',
      password: ''
    };

    errors.value = ''

    navigateTo('dashboard')

  } catch (error) {
    console.error('Error fetching signIn:', error);
    errors.value = error.response?.data?.error || 'An error occurred.';
  }
}
</script>

<style scoped>
:deep(.p-inputtext) {
  width: 100%;
}
</style>