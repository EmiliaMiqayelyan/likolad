<template>
  <div>
    <div class="pt-5 text-center">
      <h2>Contact</h2>

      <div class="flex justify-content-center">
        <form class="p-3 flex flex-column row-gap-4 w-full md:w-5" @submit.prevent="submitContacts">
          <div class="card flex justify-content-center flex-column row-gap-4">
            <div class="flex gap-3">
              <InputText type="number" v-model="contact.phone" placeholder="Phone"/>
              <InputText type="email" v-model="contact.gmail" placeholder="Email"/>
            </div>

            <div class="flex gap-3">
              <InputText type="text" v-model="contact.location" placeholder="Location"/>
              <InputText type="text" v-model="contact.linkedin" placeholder="Linkedin"/>
            </div>

            <div class="flex gap-3">
              <InputText type="text" v-model="contact.instagram" placeholder="Instagram"/>
              <InputText type="text" v-model="contact.facebook" placeholder="Facebook"/>
            </div>

            <div class="w-full text-right">
              <Button class="w-9rem" label="Send" type="submit" outlined severity="secondary"/>
            </div>
          </div>
        </form>
      </div>

      <div v-if="errors" class="error-message p-3 mb-4" style="color: red;">
        {{ errors }}
      </div>
    </div>

    <div class="card p-fluid flex justify-content-center mt-5 mb-5 mx-4 md:mx-0 table-responsive">
      <DataTable
          :value="contacts"
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
        <Column field="phone" header="Phone" style="width: 15%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="gmail" header="Gmail" style="width: 15%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="location" header="Location" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="facebook" header="Facebook" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="instagram" header="Instagram" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column field="linkedin" header="Linkedin" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]"/>
          </template>
        </Column>
        <Column style="width: 10%; min-width: 8rem" bodyStyle="text-align:center">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" class="p-button-text" @click="editContact(slotProps.data)"/>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const contact = ref({
  id: '',
  phone: '',
  gmail: '',
  instagram: '',
  facebook: '',
  linkedin: '',
  location: '',
});

const contacts = ref([]);
const errors = ref('');

const fetchContacts = async () => {
  try {
    const response = await axios.get(`${API_URL}/contact`);
    contacts.value = response.data;
  } catch (error) {
    console.error('Error fetching contact:', error);
    errors.value = error.response?.data?.error || 'An error occurred while fetching contacts.';
  }
};

const submitContacts = async () => {
  try {
    const token =  typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    if (contact.value.id) {
      await axios.put(`${API_URL}/contact/${contact.value.id}`, contact.value, config);
    } else {
      delete contact.value.id
      await axios.post(`${API_URL}/contact`, contact.value, config);
    }

    contact.value = {
      id: '',
      phone: '',
      gmail: '',
      instagram: '',
      facebook: '',
      linkedin: '',
      location: ''
    };

    await fetchContacts();
    errors.value = '';

  } catch (error) {
    console.error('Error submitting contact:', error);
    errors.value = error.response?.data?.error || 'An error occurred while submitting the contact information.';
  }
};

const editContact = (selectedContact) => {
  contact.value = {
    id: selectedContact.id,
    phone: selectedContact.phone,
    gmail: selectedContact.gmail,
    instagram: selectedContact.instagram,
    facebook: selectedContact.facebook,
    linkedin: selectedContact.linkedin,
    location: selectedContact.location
  };
};

onMounted(() => {
  fetchContacts();
});
</script>

<style scoped>
:deep(.p-inputtext) {
  width: 100%;
}

:deep(.p-datatable-wrapper) {
  width: 100% !important;
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

@media (max-width: 768px) {
  .table-responsive table {
    width: 100%;
  }

  .flex.gap-3 {
    flex-direction: column;
  }
}
</style>