<template>
  <div class="pt-5">
    <h2>Login</h2>
    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-4">
        <div class="card flex justify-content-center flex-column row-gap-4">
          <InputText type="email" v-model="value" placeholder="Email"/>
          <Password v-model="passwordValue" :feedback="false" toggleMask placeholder="Password" />
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
</style>