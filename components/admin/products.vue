<template>
  <div class="pt-5">
    <h2>Product</h2>
    <div class="flex justify-content-center">
      <form class="p-3 flex flex-column row-gap-4 w-5" @submit.prevent="submitProduct">
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

<!--          <div class="flex gap-3">-->
<!--            <input class="w-full" type="file" v-on:change="onChangeFileUpload" multiple/>-->
<!--          </div>-->

          <FileUpload name="demo[]"  @upload="onChangeFileUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
              <p>Drag and drop files to here to upload.</p>
            </template>
          </FileUpload>

          <div class="w-full text-right">
            <Button class="w-9rem" label="Send" type="submit" outlined  severity="secondary"/>
          </div>
        </div>
      </form>
    </div>

    <div class="card p-fluid flex justify-content-center mt-5 mb-5">
      <DataTable :value="products" editMode="row" dataKey="id"
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

const fetchCategories = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/category');
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
  }
};

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/v1/product');
    products.value = response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

const submitProduct = async () => {
  try {
    const formdata = new FormData();
    formdata.append("files", activeProduct.value.files[0]);

    formdata.append("productJsonData", JSON.stringify(activeProduct.value.productJsonData));

    const token = localStorage.getItem('authToken');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    activeProduct.value.productJsonData.categoryIds = Object.keys(selectedCategories.value).map(Number)

    if (activeProduct.value.productJsonData.id) {
      await axios.put(`http://localhost:3001/api/v1/product/${activeProduct.value.productJsonData.id}`, formdata, config);
    } else {
      await axios.post('http://localhost:3001/api/v1/product', formdata, config);
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

    document.querySelector('input[type="file"]').value = "";

    await fetchProducts();
  } catch (error) {
    console.error('Error submitting product:', error.response ? error.response.data : error.message);
  }
};

const onChangeFileUpload = ($event) => {
  activeProduct.value.files = $event.target.files;
}

const editProduct = (selectedProduct) => {
  if (selectedProduct.categoryIds) {
    selectedProduct.categoryIds.forEach(id => {
      selectedCategories.value = {
        ...selectedCategories.value,
        [id]: true
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
    const token = localStorage.getItem('authToken');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    };

    await axios.delete(`http://localhost:3001/api/v1/product/${id}`, config);

    await fetchProducts()
  } catch (error) {
    console.error('Error deleting product:', error);
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
</style>