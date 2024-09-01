<template>
  <div>
    <div class="pt-5">
      <h2>Contacts Form</h2>
      <div class="flex justify-content-center">
        <form class="p-3 flex flex-column row-gap-4 w-5" @submit.prevent="submitContacts">
          <div class="card flex justify-content-center flex-column row-gap-4">
            <div class="flex gap-3">
              <InputText type="number" v-model="contacts.phone" placeholder="Phone"/>
              <InputText type="email" v-model="contacts.gmail" placeholder="Email"/>
            </div>

            <div class="flex gap-3">
              <InputText type="text" v-model="contacts.location" placeholder="Location"/>
              <InputText type="text" v-model="contacts.linkedin" placeholder="Linkedin"/>
            </div>

            <div class="flex gap-3">
              <InputText type="text" v-model="contacts.instagram" placeholder="Instagram"/>
              <InputText type="text" v-model="contacts.facebook" placeholder="Facebook"/>
            </div>

            <div class="w-full text-right">
              <Button class="contacts-send-btn w-9rem" label="Send" type="submit"/>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card p-fluid flex justify-content-center mt-5 mb-5">
      <DataTable :value="contact" editMode="row" dataKey="id"
                 :pt="{
                table: { style: 'min-width: 50rem' },
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

const contacts = ref({
  phone: '',
  gmail: '',
  instagram: '',
  facebook: '',
  linkedin: '',
  location: '',
});

const contact = ref([]);
const editingId = ref(null);

const submitContacts = async () => {
  try {
    if (editingId.value) {
      const response = await axios.put(`http://localhost:3001/api/v1/contact/${editingId.value}`, contacts.value);
      const index = contact.value.findIndex(c => c.id === editingId.value);
      if (index !== -1) {
        contact.value[index] = response.data;
      }
    } else {
      const response = await axios.post('http://localhost:3001/api/v1/contact', contacts.value);
      contact.value.push(response.data);
    }

    contacts.value = {phone: '', gmail: '', instagram: '', facebook: '', linkedin: '', location: ''};
    editingId.value = null;
    localStorage.setItem('contact', JSON.stringify(contact.value));
  } catch (error) {
    console.error('Error submitting contact:', error);
  }
};

const editContact = (selectedContact) => {
  contacts.value = {...selectedContact};
  editingId.value = selectedContact.id;
};

onMounted(() => {
  const savedContacts = localStorage.getItem('contact');
  if (savedContacts) {
    contact.value = JSON.parse(savedContacts);
  }
});
</script>

<style scoped>
:deep(.p-inputtext) {
  width: 100%;
}

.contacts-send-btn {
  background-color: #73777A !important;
  border: none;
}
</style>