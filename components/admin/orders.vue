<template>
  <div class="pt-5">
    <h2>Orders</h2>

    <div class="card p-fluid flex justify-content-center mt-5 mb-5">
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
  </div>
</template>

<script setup>
import axios from "axios";

const orders = ref([]);
const editingRows = ref([]);

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
    const response = await axios.get('http://localhost:3001/api/v1/order');
    orders.value = response.data;
  } catch (error) {
    console.error('Error fetching orders data:', error);
  }
};

const editOrder = async (selectedOrder) => {
  const response = await axios.put(`http://localhost:3001/api/v1/order/${selectedOrder.newData.id}`, selectedOrder.newData);

  orders.value = orders.value.map((order) => {
    if (order.id === selectedOrder.newData.id) return response.data

    return order
  });
  localStorage.setItem('orders', JSON.stringify(orders.value));
};

const deleteOrder = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/api/v1/order/${id}`);
    orders.value = orders.value.filter((order) => order.id !== id);
    localStorage.setItem('orders', JSON.stringify(orders.value));
  } catch (error) {
    console.error('Error deleting order:', error);
  }
};

onMounted(() => {
  fetchOrders();
});
</script>

<style scoped>
:deep(.p-datatable-table) {
  width: 85rem !important;
}
</style>