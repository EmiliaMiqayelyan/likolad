<template>
  <div>
    <div class="pt-5">
      <h2>Category</h2>

      <div class="flex justify-content-center">
        <form class="p-3 flex flex-column row-gap-4 w-5" @submit.prevent="submitCategories">
          <div class="card flex justify-content-center flex-column row-gap-4">
            <div class="flex gap-3">
              <InputText type="text" v-model="categories.title_am" placeholder="Title (AM)"/>
              <InputText type="text" v-model="categories.title_en" placeholder="Title (EN)"/>
            </div>

            <div class="flex gap-3">
            <textarea type="text" class="categories-text" v-model="categories.description_am"
                      placeholder="Description (AM)"/>
              <textarea type="text" class="categories-text" v-model="categories.description_en"
                        placeholder="Description (EN)"/>
            </div>

            <div class="w-full text-right">
              <Button class="category-send-btn w-9rem" label="Send" type="submit"/>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card p-fluid flex justify-content-center mt-5 mb-5">
      <DataTable :value="category" editMode="row" dataKey="id"
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
            <Button icon="pi pi-trash" class="p-button-text p-button-danger"
                    @click="deleteTestimonial(slotProps.data.id)"/>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const categories = ref({
  title_am: '',
  title_en: '',
  description_am: '',
  description_en: '',
})

const category = ref([]);
const editingCategoryId = ref(null);

const submitCategories = async () => {
  try {
    if (editingCategoryId.value) {
      const response = await axios.put(`http://localhost:3001/api/v1/category/${editingCategoryId.value}`, categories.value);
      const index = category.value.findIndex(c => c.id === editingCategoryId.value);
      if (index !== -1) {
        category.value[index] = response.data;
      }
    } else {
      const response = await axios.post('http://localhost:3001/api/v1/category', categories.value);
      category.value.push(response.data);
    }

    categories.value = {title_am: '', title_en: '', description_am: '', description_en: ''};
    editingCategoryId.value = null;
    localStorage.setItem('category', JSON.stringify(category.value));
  } catch (error) {
    console.error('Error submitting category:', error);
  }
};

const editCategory = (selectedCategory) => {
  categories.value = {...selectedCategory};
  editingCategoryId.value = selectedCategory.id;
};

const deleteTestimonial = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/api/v1/category/${id}`);
    category.value = category.value.filter((categories) => categories.id !== id);
    localStorage.setItem('category', JSON.stringify(category.value));
  } catch (error) {
    console.error('Error deleting category:', error);
  }
};

onMounted(() => {
  const savedCategory = localStorage.getItem('category');
  if (savedCategory) {
    category.value = JSON.parse(savedCategory);
  }
});
</script>

<style scoped>
:deep(.p-inputtext) {
  width: 100%;
}

.category-send-btn {
  background-color: #73777A !important;
  border: none;
}

.categories-text {
  width: 49%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}
</style>