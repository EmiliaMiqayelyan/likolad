<template>
  <div class="pt-5">
    <h2>Contacts Form</h2>
    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-5">
        <div class="card flex justify-content-center flex-column row-gap-4">
          <div class="flex gap-3">
            <InputText type="number" v-model="value" placeholder="Id"/>
            <InputText type="number" v-model="value" placeholder="Phone"/>
          </div>

          <div class="flex gap-3">
            <InputText type="text" v-model="value" placeholder="Location"/>
            <InputText type="email" v-model="value" placeholder="Email"/>
          </div>

          <div class="flex gap-3">
            <InputText type="text" v-model="value" placeholder="Instagram"/>
            <InputText type="text" v-model="value" placeholder="Facebook"/>
          </div>

          <div class="flex gap-3">
            <InputText type="text" v-model="value" placeholder="Linkedin"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const value = ref(null);
</script>

<style scoped>
:deep(.p-inputtext) {
  width: 100%;
}
</style>