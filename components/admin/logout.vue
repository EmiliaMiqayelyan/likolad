<template>
  <div class="pt-5">
    <h2>Sign In</h2>
    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-4" @submit.prevent="submitSignIn">
        <div class="card flex justify-content-center flex-column row-gap-4">
          <InputText type="email" v-model="signIn.email" placeholder="Email"/>
          <Password v-model="signIn.password" :feedback="false" toggleMask placeholder="Password"/>
        </div>

        <div class="w-full text-right">
          <Button class="w-9rem" label="Send" type="submit" outlined  severity="secondary"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const signIn = ref({
  email: '',
  password: ''
})

const signInUsers = ref([])

const submitSignIn = async () => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/auth/sign-in', signIn.value);

    const {token} = response.data;

    localStorage.setItem('authToken', token);

    signInUsers.value.push(response.data);

    signIn.value = {
      email: '',
      password: ''
    };

  } catch (error) {
    console.error('Error fetching signIn:', error);
  }
}
</script>

<style scoped>
:deep(.p-inputtext) {
  width: 100%;
}
</style>