<template>
  <div class="pt-5 text-center">
    <h2>Orders</h2>

    <div class="card p-fluid flex justify-content-center mt-5 mb-5 mx-4 md:mx-0 table-responsive">
      <DataTable
          v-model:editingRows="editingRows"
          :value="orders" editMode="row"
          dataKey="id"
          @row-edit-save="editOrder"
          :pt="{
                table: { style: 'min-width: 85rem' },
                column: {
                    bodycell: ({ state }) => ({
                        style: state['d_editing'] && 'padding-top: 0.6rem; padding-bottom: 0.6rem'
                    })
                }
            }"
      >
        <Column field="phone1" header="Phone 1" style="width: 15%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="phone2" header="Phone 2" style="width: 15%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="region" header="Region" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="address" header="Address" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="apartment" header="Apartment" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="floor" header="Floor" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="entry" header="Entry" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="deliveryDate" header="Date" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="status" header="Status" style="width: 20%">
          <template #editor="{ data, field }">
            <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value"
                      placeholder="Select a Status">
              <template #option="slotProps">
                <Tag :value="slotProps.option.value" :severity="getStatusLabel(slotProps.option.value)"/>
              </template>
            </Dropdown>
          </template>
          <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="getStatusLabel(slotProps.data.status)"/>
          </template>
        </Column>
        <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
        <Column style="width: 10%; min-width: 8rem" bodyStyle="text-align:center">
          <template #body="slotProps">
            <Button icon="pi pi-trash" class="p-button-text p-button-danger"
                    @click="deleteOrder(slotProps.data.id)"/>
          </template>
        </Column>
      </DataTable>
    </div>

    <div v-if="errors" class="p-3 mb-4" style="color: red;">
      {{ errors }}
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const orders = ref([]);
const editingRows = ref([]);
const errors = ref('');

const statuses = ref([
  {label: 'Canceled', value: 'canceled'},
  {label: 'Pending', value: 'pending'},
  {label: 'Confirmed', value: 'confirmed'},
  {label: 'Delivered', value: 'delivered'}
]);

const getStatusLabel = (status) => {
  switch (status) {
    case 'confirmed':
      return 'info';

    case 'delivered':
      return 'success';

    case 'pending':
      return 'warning';

    case 'canceled':
      return 'danger';

    default:
      return null;
  }
};

const fetchOrders = async () => {
  try {
    const token =  typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    const response = await axios.get(`${API_URL}/order`, config);
    orders.value = response.data;
  } catch (error) {
    console.error('Error fetching orders data:', error);
    errors.value = error.response?.data?.error || 'An error occurred while fetching orders.';
  }
};

const editOrder = async (selectedOrder) => {
  const token =  typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  const response = await axios.put(`${API_URL}/order/${selectedOrder.newData.id}`, selectedOrder.newData, config);

  orders.value = orders.value.map((order) => {
    if (order.id === selectedOrder.newData.id) return response.data

    return order
  });
};

const deleteOrder = async (id) => {
  try {
    const token =  typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    await axios.delete(`${API_URL}/order/${id}`, config);
    orders.value = orders.value.filter((order) => order.id !== id);
  } catch (error) {
    console.error('Error deleting order:', error);
    errors.value = error.response?.data?.error || 'An error occurred.';
  }
};

onMounted(() => {
  fetchOrders();
});
</script>

<style scoped>
:deep(.p-datatable) {
  width: 100% !important;
}

:deep(.p-datatable-table) {
  width: 80rem !important;
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

  .flex.gap-3 {
    flex-direction: column;
  }
}
</style>