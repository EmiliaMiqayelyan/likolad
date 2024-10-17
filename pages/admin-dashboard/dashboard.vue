<template>
  <div class="pt-5 text-center">
    <h2>Admin Dashboard</h2>

    <div class="flex gap-4 px-5 pt-3 flex-wrap justify-content-center">
      <Fieldset legend="Products" class="w-full sm:w-3">
        <p class="m-0">
          {{ staticsValue.products }}
        </p>
      </Fieldset>

      <Fieldset legend="Categories" class="w-full sm:w-3">
        <p class="m-0">
          {{ staticsValue.categories }}
        </p>
      </Fieldset>

      <Fieldset legend="Testimonials" class="w-full sm:w-3">
        <p class="m-0">
          {{ staticsValue.testimonials }}
        </p>
      </Fieldset>

      <Fieldset legend="Orders" class="w-full sm:w-3">
        <p class="m-0">
          {{ staticsValue.order }}
        </p>
      </Fieldset>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const staticsValue = ref({
  products: 0,
  categories: 0,
  testimonials: 0,
  order: 0
});

const fetchStatic = async () => {
  try {
    const response = await axios.get(`${API_URL}/statics`);
    staticsValue.value = response.data;
  } catch (error) {
    console.error('Error fetching statics:', error);
  }
};

onMounted(() => {
  fetchStatic();
});
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