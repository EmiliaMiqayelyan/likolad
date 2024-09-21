<template>
  <div>
    <div class="pt-5">
      <h2>Testimonial</h2>
      <div class="flex justify-content-center">
        <form class="p-3 flex flex-column row-gap-4 w-5" @submit.prevent="submitTestimonial">
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
              <Button class="testimonial-send-btn w-9rem" label="Send" type="submit"/>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card p-fluid flex justify-content-center mt-5 mb-5">
      <DataTable :value="getTestimonials" editMode="row" dataKey="id"
                 :pt="{
                table: { style: 'min-width: 50rem' },
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

const testimonial = ref({
  content_am: '',
  content_en: '',
  author_am: '',
  author_en: '',
});

const testimonials = ref([]);
const editTestimonialId = ref(null);

const getTestimonials = ref([]);

const fetchTestimonial = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/testimonial');
    testimonials.value = response.data;
    getTestimonials.value = [...response.data];
    localStorage.setItem('testimonials', JSON.stringify(testimonials.value));
  } catch (error) {
    console.error('Error fetching testimonials:', error);
  }
};

const submitTestimonial = async () => {
  try {
    const token = localStorage.getItem('authToken');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    };

    if (editTestimonialId.value) {
      const response = await axios.put(`http://localhost:3001/api/v1/testimonial/${editTestimonialId.value}`, testimonial.value, config);
      const index = testimonials.value.findIndex(t => t.id === editTestimonialId.value);

      if (index !== -1) {
        testimonials.value[index] = response.data;
        getTestimonials.value[index] = response.data;
      }
    } else {
      const response = await axios.post('http://localhost:3001/api/v1/testimonial', testimonial.value, config);
      testimonials.value = [...testimonials.value, response.data];
      getTestimonials.value = [...getTestimonials.value, response.data];
    }

    testimonial.value = { content_am: '', content_en: '', author_am: '', author_en: '' };
    editTestimonialId.value = null;

    localStorage.setItem('testimonials', JSON.stringify(testimonials.value));

  } catch (error) {
    console.error('Error submitting testimonial:', error);
  }
};

const editTestimonial = (selectedTestimonial) => {
  testimonial.value = { ...selectedTestimonial };
  editTestimonialId.value = selectedTestimonial.id;
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

    await axios.delete(`http://localhost:3001/api/v1/testimonial/${id}`, config);
    testimonials.value = testimonials.value.filter(t => t.id !== id);
    getTestimonials.value = [...testimonials.value];

    localStorage.setItem('testimonials', JSON.stringify(testimonials.value));

  } catch (error) {
    console.error('Error deleting testimonial:', error);
  }
};

onMounted(() => {
  const savedTestimonials = localStorage.getItem('testimonials');
  if (savedTestimonials) {
    testimonials.value = JSON.parse(savedTestimonials);
    getTestimonials.value = [...JSON.parse(savedTestimonials)];
  }

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

.testimonial-send-btn {
  background-color: #73777A !important;
  border: none;
}

:deep(.p-datatable) {
  width: 70%;
}
</style>
