<template>
  <div class="pt-5">
    <h2>Admin Dashboard</h2>
    <div class="flex gap-4 px-5 pt-3 flex-wrap justify-content-center">
      <Fieldset legend="Users">
        <p class="m-0">
          30
        </p>
      </Fieldset>

      <Fieldset legend="Products">
        <p class="m-0">
         103
        </p>
      </Fieldset>

      <Fieldset legend="Categories">
        <p class="m-0">
          12
        </p>
      </Fieldset>

      <Fieldset legend="Testimonials">
        <p class="m-0">
          6
        </p>
      </Fieldset>

      <Fieldset legend="Contacts">
        <p class="m-0">
          2
        </p>
      </Fieldset>

      <Fieldset legend="Orders">
        <p class="m-0">
          9
        </p>
      </Fieldset>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
:deep(.p-fieldset .p-fieldset-legend) {
  border: none;
  background: none;
  margin-bottom: 0;
}

:deep(.p-fieldset) {
  width: 25%;
}
</style>