<template>
  <div>
    <div class="pt-5 text-center">
      <h2>Category</h2>

      <div class="flex justify-content-center">
        <form class="p-3 flex flex-column row-gap-4 w-full md:w-5" @submit.prevent="submitCategory">
          <div class="card flex justify-content-center flex-column row-gap-4">
            <div class="flex gap-3">
              <InputText type="text" v-model="category.title_am" placeholder="Title (AM)"/>
              <InputText type="text" v-model="category.title_en" placeholder="Title (EN)"/>
            </div>

            <div class="w-full">
              <select v-model="category.parentId" class="w-full categories-text">
                <option value="">Select Parent Category</option>
                <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                  {{ cat.title_en }}
                </option>
              </select>
            </div>

            <div class="flex gap-3">
              <textarea
                  type="text"
                  class="categories-text"
                  v-model="category.description_am"
                  placeholder="Description (AM)"
              />
              <textarea
                  type="text"
                  class="categories-text"
                  v-model="category.description_en"
                  placeholder="Description (EN)"
              />
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
          :value="categories"
          editMode="row"
          dataKey="id"
          :pt="{
          table: { style: 'min-width: 50rem' },
          column: {
              bodycell: ({ state }) => ({
                  style: state['d_editing'] && 'padding-top: 0.6rem; padding-bottom: 0.6rem'
              })
          }
      }"
      >
        <Column field="title_am" header="Title (AM)" style="width: 15%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="title_en" header="Title (EN)" style="width: 15%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="parentId" header="Parent (ID)" style="width: 15%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="description_am" header="Description (AM)" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="description_en" header="Description (EN)" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column style="width: 10%; min-width: 8rem" bodyStyle="text-align:center">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" class="p-button-text" @click="editCategory(slotProps.data)"/>
            <Button
                icon="pi pi-trash"
                class="p-button-text p-button-danger"
                @click="deleteTestimonial(slotProps.data.id)"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const category = ref({
  id: '',
  title_am: '',
  title_en: '',
  description_am: '',
  description_en: '',
  parentId: null
})

const categories = ref([]);
const errors = ref('');

const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/category`);
    categories.value = response.data;
  } catch (error) {
    console.error('Error fetching category:', error);
    errors.value = error.response?.data?.error || 'An error occurred while fetching categories.';
  }
};

const submitCategory = async () => {
  try {
    const token = localStorage.getItem('authToken');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    if (!category.value.parentId) {
      delete category.value.parentId;
    }

    if (category.value.id) {
      await axios.put(`${API_URL}/category/${category.value.id}`, category.value, config);
    } else {
      await axios.post(`${API_URL}/category`, category.value, config);
    }

    category.value = {
      id: '',
      title_am: '',
      title_en: '',
      description_am: '',
      description_en: '',
      parentId: null
    };

    await fetchCategories();
    errors.value = '';
  } catch (error) {
    console.error('Error submitting category:', error);
    errors.value = error.response?.data?.error || 'An error occurred while submitting the category information.';
  }
};

const editCategory = (selectedCategory) => {
  category.value = {
    id: selectedCategory.id,
    title_en: selectedCategory.title_en,
    title_am: selectedCategory.title_am,
    description_en: selectedCategory.description_en,
    description_am: selectedCategory.description_am,
    parentId: selectedCategory.parentId || null
  }
};

const deleteTestimonial = async (id) => {
  try {
    const token = localStorage.getItem('authToken');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    await axios.delete(`${API_URL}/category/${id}`, config);
    await fetchCategories();
  } catch (error) {
    console.error('Error deleting category:', error);
    errors.value = error.response?.data?.error || 'An error occurred.';
  }
};

onMounted(() => {
  fetchCategories();
});
</script>

<style scoped>
:deep(.p-inputtext) {
  width: 100%;
}

:deep(.p-datatable) {
  width: 100% !important;
}

:deep(.p-datatable-table) {
  width: 50rem !important;
  margin: 0 auto !important;
}

.categories-text {
  width: 49%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}

.table-responsive {
  width: 100%;
  overflow-x: auto
}

@media (max-width: 768px) {
  .table-responsive table {
    width: 100%;
  }

  .categories-text {
    width: 100% !important;
  }

  .flex.gap-3 {
    flex-direction: column;
  }
}
</style>