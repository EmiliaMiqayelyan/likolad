<template>
  <div class="pt-5">
    <h2>Categories Form</h2>
    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-5">
        <div class="card flex justify-content-center flex-column row-gap-4">
          <div class="flex gap-3">
            <InputText type="text" v-model="value" placeholder="ID" />
            <InputText type="text" v-model="value" placeholder="Title" />
          </div>

          <div class="flex gap-3">
            <InputText type="text" v-model="value" placeholder="Description" />
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