<template>
  <div class="pt-5">
    <h2>Product</h2>
    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-5" @submit.prevent="submitProducts">
        <div class="card flex justify-content-center flex-column row-gap-4">
          <div class="flex gap-3">
            <InputText type="text" v-model="products.productJsonData.title_am" placeholder="Title (AM)"/>
            <InputText type="text" v-model="products.productJsonData.title_en" placeholder="Title (EN)"/>
          </div>

          <div class="flex gap-3">
            <textarea class="products-text" v-model="products.productJsonData.description_am"
                      placeholder="Description (AM)"></textarea>
            <textarea class="products-text" v-model="products.productJsonData.description_en"
                      placeholder="Description (EN)"/>
          </div>

          <div class="flex gap-3">
            <InputText type="number" v-model="products.productJsonData.price" placeholder="Price"/>
            <select v-model="selectedCategoryId" class="select-category w-full">
              <option disabled value="">Select a Category</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.title_en }}
              </option>
            </select>
          </div>

          <div class="flex gap-3">
            <input class="w-full" type="file" v-on:change="onChangeFileUpload" multiple/>
          </div>

          <div class="w-full text-right">
            <Button class="product-send-btn w-9rem" label="Send" type="submit"/>
          </div>
        </div>
      </form>
    </div>

    <div class="card p-fluid flex justify-content-center mt-5 mb-5">
      <DataTable :value="product" editMode="row" dataKey="id"
                 :pt="{
                table: { style: 'min-width: 60rem' },
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

const products = ref({
  files: [],
  productJsonData: {
    title_am: '',
    title_en: '',
    description_am: '',
    description_en: '',
    price: '',
    categoryIds: []
  }
});

const categories = ref([]);
const selectedCategoryId = ref('');
const product = ref([])

const editingProductId = ref(null);

const fetchCategories = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/category');
    categories.value = response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

const submitProducts = async () => {
  try {
    const formdata = new FormData();
    formdata.append("files", products.value.files[0]);
    formdata.append("productJsonData", JSON.stringify(products.value.productJsonData));

    if (editingProductId.value) {
      const response = await axios.put(`http://localhost:3001/api/v1/product/${editingProductId.value}`, products.value);
      const index = product.value.findIndex(p => p.id === editingProductId.value);
      if (index !== -1) {
        product.value[index] = response.data;
      }
    } else {
      products.value.productJsonData.categoryIds = []
      const response = await axios.post('http://localhost:3001/api/v1/product', formdata);
      product.value.push(response.data);
    }

    products.value = {
      files: [],
      productJsonData: {
        title_am: '',
        title_en: '',
        description_am: '',
        description_en: '',
        price: '',
        categoryIds: []
      }
    };

    selectedCategoryId.value = '';
    editingProductId.value = null;
    localStorage.setItem('product', JSON.stringify(product.value));
  } catch (error) {
    console.error('Error submitting product:', error);
  }
};

const onChangeFileUpload = (e) => {
  products.value.files = e.target.files
}

const editProduct = (selectedProduct) => {
  products.value = {...selectedProduct};
  editingProductId.value = selectedProduct.id;
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/api/v1/product/${id}`);
    product.value = product.value.filter((products) => products.id !== id);
    localStorage.setItem('product', JSON.stringify(product.value));
  } catch (error) {
    console.error('Error deleting product:', error);
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

.product-send-btn {
  background-color: #73777A !important;
  border: none;
}

.products-text {
  width: 49%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}

.select-category {
  border: 1px solid #ced4da;
  border-radius: 5px;
}
</style>