<template>
  <div class="pt-5">
    <h2>Users Form</h2>
    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-5">
        <div class="card flex justify-content-center flex-column row-gap-4">
          <div class="flex gap-3">
            <InputText type="text" v-model="value" placeholder="First Name"/>
            <InputText type="text" v-model="value" placeholder="Last Name"/>
          </div>

          <div class="flex gap-3">
            <InputText type="text" v-model="value" placeholder="Role"/>
            <InputText type="email" v-model="value" placeholder="Email"/>
          </div>

          <div class="flex gap-3">
            <Password v-model="passwordValue" :feedback="false" toggleMask placeholder="Password" />
            <InputText type="text" v-model="value" placeholder="isVerified"/>
          </div>

          <div class="flex gap-3">
            <InputText type="date" v-model="value" placeholder="Birthday"/>
            <InputText type="text" v-model="value" placeholder="Location"/>
          </div>

          <div class="flex gap-3">
            <InputText type="text" v-model="value" placeholder="Histories"/>
            <InputText type="text" v-model="value" placeholder="Picked products"/>
          </div>

          <div class="flex gap-3">
            <InputText type="text" v-model="value" placeholder="Rating"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const value = ref(null);
const passwordValue = ref(null);
</script>

<style scoped>
:deep(.p-inputtext) {
  width: 100%;
}

:deep(.p-password) {
  width: 100%;
}
</style>