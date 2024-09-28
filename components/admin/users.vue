<template>
  <div class="pt-5">
    <h2>Sign Up</h2>
    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-5" @submit.prevent="submitUsers">
        <div class="card flex justify-content-center flex-column row-gap-4">
          <div class="flex gap-3">
            <InputText type="text" v-model="user.firstName" placeholder="First Name"/>
            <InputText type="text" v-model="user.lastName" placeholder="Last Name"/>
          </div>

          <div class="flex gap-3">
            <InputText type="email" v-model="user.email" placeholder="Email"/>
            <Password v-model="user.password" :feedback="false" toggleMask placeholder="Password" />
          </div>

          <div class="flex gap-3">
            <InputText type="date" v-model="user.birthday" placeholder="Birthday"/>
            <InputText type="text" v-model="user.location" placeholder="Location"/>
          </div>

          <div class="flex gap-3">
            <InputText type="number" v-model="user.phone" placeholder="Phone"/>
          </div>

          <div class="w-full text-right">
            <Button class="w-9rem" label="Send" type="submit" outlined  severity="secondary"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const user = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  birthday: '',
  location: '',
  phone: '',
})

const users = ref([])

const submitUsers = async () => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/auth/sign-up', user.value);
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

    localStorage.setItem('user', JSON.stringify(users.value));
  } catch (error) {
    console.error('Error fetching user:', error);
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