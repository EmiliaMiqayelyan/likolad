<template>
  <div>
    <div class="pt-5 text-center">
      <h2>Testimonial</h2>

      <div class="flex justify-content-center">
        <form class="p-3 flex flex-column row-gap-4 w-full md:w-5" @submit.prevent="submitTestimonial">
          <div class="card flex justify-content-center flex-column row-gap-4">
            <div class="flex gap-3">
              <InputText type="text" v-model="testimonial.author_am" placeholder="Author (AM)"/>
              <InputText type="text" v-model="testimonial.author_en" placeholder="Author (EN)"/>
            </div>

            <div class="flex gap-3">
              <textarea type="text" class="testimonials-text" v-model="testimonial.content_am"
                        placeholder="Content (AM)"/>
              <textarea type="text" class="testimonials-text" v-model="testimonial.content_en"
                        placeholder="Content (EN)"/>
            </div>

            <div class="w-full text-right">
              <Button class="w-9rem" label="Send" type="submit" outlined severity="secondary"/>
            </div>
          </div>
        </form>
      </div>

      <div v-if="errors" class="p-3 mb-4" style="color: red;">
        {{ errors }}
      </div>
    </div>

    <div class="card p-fluid flex justify-content-center mt-5 mb-5 mx-4 md:mx-0 table-responsive">
      <DataTable
          :value="testimonials"
          editMode="row"
          dataKey="id"
          :pt="{
          table: { style: 'min-width: 70rem' },
          column: {
              bodycell: ({ state }) => ({
                  style: state['d_editing'] && 'padding-top: 0.6rem; padding-bottom: 0.6rem'
              })
          }
      }"
      >
        <Column field="author_am" header="Author (AM)" style="width: 15%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="author_en" header="Author (EN)" style="width: 15%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="content_am" header="Content (AM)" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="content_en" header="Content (EN)" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column style="width: 10%; min-width: 8rem" bodyStyle="text-align:center">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" class="p-button-text" @click="editTestimonial(slotProps.data)"/>
            <Button icon="pi pi-trash" class="p-button-text p-button-danger"
                    @click="deleteTestimonial(slotProps.data.id)"/>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const testimonial = ref({
  id: '',
  content_am: '',
  content_en: '',
  author_am: '',
  author_en: '',
});

const testimonials = ref([]);
const errors = ref('');

const fetchTestimonial = async () => {
  try {
    const response = await axios.get(`${API_URL}/testimonial`);
    testimonials.value = response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    errors.value = error.response?.data?.error || 'An error occurred while fetching testimonials.';
  }
};

const submitTestimonial = async () => {
  try {
    const token = localStorage.getItem('authToken');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    if (testimonial.value.id) {
      await axios.put(`${API_URL}/testimonial/${testimonial.value.id}`, testimonial.value, config);
    } else {
      await axios.post(`${API_URL}/testimonial`, testimonial.value, config);
    }

    testimonial.value = {
      id: '',
      content_am: '',
      content_en: '',
      author_am: '',
      author_en: ''
    };

    await fetchTestimonial();

  } catch (error) {
    console.error('Error submitting testimonial:', error);
    errors.value = error.response?.data?.error || 'An error occurred while submitting the testimonial information.';
  }
};

const editTestimonial = (selectedTestimonial) => {
  testimonial.value = {
    id: selectedTestimonial.id,
    content_am: selectedTestimonial.content_am,
    content_en: selectedTestimonial.content_en,
    author_am: selectedTestimonial.author_am,
    author_en: selectedTestimonial.author_en
  };
};

const deleteTestimonial = async (id) => {
  try {
    const token = localStorage.getItem('authToken');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    };

    await axios.delete(`${API_URL}/testimonial/${id}`, config);
    await fetchTestimonial()
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    errors.value = error.response?.data?.error || 'An error occurred.';
  }
};

onMounted(() => {
  fetchTestimonial();
});
</script>

<style scoped>
:deep(.p-inputtext) {
  width: 100%;
}

.testimonials-text {
  width: 49%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}

:deep(.p-datatable) {
  width: 70%;
}

:deep(.p-datatable) {
  width: 100% !important;
}

:deep(.p-datatable-table) {
  width: 50rem !important;
  margin: 0 auto !important;
}

.table-responsive {
  width: 100%;
  overflow-x: auto
}

@media (max-width: 768px) {
  .table-responsive table {
    width: 100%;
  }

  .testimonials-text {
    width: 100% !important;
  }

  .flex.gap-3 {
    flex-direction: column;
  }
}
</style>
