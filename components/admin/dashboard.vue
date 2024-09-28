<template>
  <div class="pt-5">
    <h2>Admin Dashboard</h2>
    <div class="flex gap-4 px-5 pt-3 flex-wrap justify-content-center">
      <Fieldset legend="Products">
        <p class="m-0">
          {{ staticsValue.products }}
        </p>
      </Fieldset>

      <Fieldset legend="Categories">
        <p class="m-0">
          {{ staticsValue.categories }}
        </p>
      </Fieldset>

      <Fieldset legend="Testimonials">
        <p class="m-0">
          {{ staticsValue.testimonials }}
        </p>
      </Fieldset>

      <Fieldset legend="Orders">
        <p class="m-0">
          {{ staticsValue.order }}
        </p>
      </Fieldset>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

const staticsValue = ref({
  products: 0,
  categories: 0,
  testimonials: 0,
  order: 0
});

const fetchStatic = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/statics');
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