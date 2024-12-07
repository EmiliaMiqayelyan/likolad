<template>
  <div class="pt-5 text-center">
    <h2>Product</h2>

    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-full md:w-5" @submit.prevent="submitProduct">
        <div class="card flex justify-content-center flex-column row-gap-4">
          <div class="flex gap-3">
            <InputText type="text" v-model="activeProduct.productJsonData.title_am" placeholder="Title (AM)"/>
            <InputText type="text" v-model="activeProduct.productJsonData.title_en" placeholder="Title (EN)"/>
          </div>

          <div class="flex gap-3">
            <textarea class="products-text" v-model="activeProduct.productJsonData.description_am"
                      placeholder="Description (AM)"></textarea>
            <textarea class="products-text" v-model="activeProduct.productJsonData.description_en"
                      placeholder="Description (EN)"/>
          </div>

          <div class="flex gap-3">
            <InputText type="number" v-model="activeProduct.productJsonData.price" placeholder="Price"/>

            <TreeSelect
                placeholder="Select a Category"
                v-model="selectedCategories"
                :options="categories"
                selectionMode="multiple"
                class="w-full"
            />
          </div>

          <FileUpload name="files[]" @select="onChangeFileUpload($event)" :multiple="true" :key="rerenderFileInput"
                      accept="image/*"
                      :maxFileSize="1000000">
            <template #empty>
              <p>Drag and drop files to here to upload.</p>
            </template>
          </FileUpload>

          <div class="w-full text-right">
            <Button class="w-9rem" label="Send" type="submit" outlined severity="secondary"/>
          </div>
        </div>
      </form>
    </div>

    <div v-if="errors" class="p-3 mb-4" style="color: red;">
      {{ errors }}
    </div>

    <div class="card p-fluid flex justify-content-center mt-5 mb-5 mx-4 md:mx-0 table-responsive">
      <DataTable
          :value="products"
          editMode="row"
          dataKey="id"
          :pt="{
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
        <Column field="description_en" header="Description (EN)" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="description_am" header="Description (AM)" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="price" header="Price" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column style="width: 10%; min-width: 8rem" bodyStyle="text-align:center">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" class="p-button-text" @click="editProduct(slotProps.data)"/>
            <Button icon="pi pi-trash" class="p-button-text p-button-danger"
                    @click="deleteProduct(slotProps.data.id)"/>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const activeProduct = ref({
  files: [],
  productJsonData: {
    id: '',
    title_am: '',
    title_en: '',
    description_am: '',
    description_en: '',
    price: '',
    categoryIds: []
  }
});

const categories = ref([]);
const products = ref([])
const selectedCategories = ref({})
const rerenderFileInput = ref(1)
const errors = ref('');

const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/category`);
    categories.value = response.data;

    const categoryMap = {};
    response.data.forEach(category => {
      categoryMap[category.id] = {
        label: category.title_en,
        key: category.id,
        children: []
      };
    });

    response.data.forEach(category => {
      if (category.parentId) {
        categoryMap[category.parentId].children.push(categoryMap[category.id]);
      }
    });

    categories.value = Object.values(categoryMap).filter(category => !category.parentId);
  } catch (error) {
    console.error('Error fetching categories:', error);
    errors.value = error.response?.data?.error || 'An error occurred while fetching categories.';
  }
};

const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/product`);
    products.value = response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    errors.value = error.response?.data?.error || 'An error occurred while fetching products.';
  }
};

const submitProduct = async () => {
  try {
    activeProduct.value.productJsonData.categoryIds = Object.keys(selectedCategories.value).map(Number) || []

    const formData = new FormData();

    for (const file of activeProduct.value.files) {
      formData.append('files', file);
    }

    formData.append("productJsonData", JSON.stringify(activeProduct.value.productJsonData));

    const token =  typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    };

    if (activeProduct.value.productJsonData.id) {
      await axios.put(`${API_URL}/product/${activeProduct.value.productJsonData.id}`, formData, config);
    } else {
      delete activeProduct.value.productJsonData.id
      await axios.post(`${API_URL}/product`, formData, config);
    }

    activeProduct.value = {
      files: [],
      productJsonData: {
        id: '',
        title_am: '',
        title_en: '',
        description_am: '',
        description_en: '',
        price: '',
        categoryIds: []
      }
    };

    selectedCategories.value = {}
    rerenderFileInput.value += 1
    errors.value = '';

    await fetchProducts();
  } catch (error) {
    console.error('Error submitting product:', error.response ? error.response.data : error.message);
    errors.value = error.response?.data?.error || 'An error occurred while submitting the product information.';
  }
};

const onChangeFileUpload = ($event) => {
  activeProduct.value.files = $event.files
}

const editProduct = (selectedProduct) => {
  if (selectedProduct.category) {
    selectedProduct.category.forEach(category => {
      selectedCategories.value = {
        ...selectedCategories.value,
        [category.id]: true
      }
    })
  }

  activeProduct.value.productJsonData = {
    id: selectedProduct.id,
    title_am: selectedProduct.title_am,
    title_en: selectedProduct.title_en,
    description_am: selectedProduct.description_am,
    description_en: selectedProduct.description_en,
    price: selectedProduct.price,
    categoryIds: selectedProduct.categoryIds
  };
};

const deleteProduct = async (id) => {
  try {
    const token =  typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    };

    await axios.delete(`${API_URL}/product/${id}`, config);

    await fetchProducts()
  } catch (error) {
    console.error('Error deleting product:', error);
    errors.value = error.response?.data?.error || 'An error occurred.';
  }
};

onMounted(() => {
  fetchCategories();
  fetchProducts();
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
  margin: 0 auto !important;
}

.table-responsive {
  width: 100%;
  overflow-x: auto
}

input[type="file"] {
  padding: 10px 20px;
  border: 1px solid #ced4da;
  color: black;
  border-radius: 5px;
  cursor: pointer;
}

.products-text {
  width: 49%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}

@media (max-width: 768px) {
  .table-responsive table {
    width: 100%;
  }

  .products-text {
    width: 100% !important;
  }

  .flex.gap-3 {
    flex-direction: column;
  }
}
</style>