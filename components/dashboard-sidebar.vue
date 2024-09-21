<template>
  <div class="card flex justify-center flex-column">
    <div class="admin-header">
      <i @click="visible = true" class="pi pi-align-justify cursor-pointer text-2xl text-color"></i>
    </div>

    <Sidebar v-model:visible="visible"
             :pt="{ header: { style: 'background-color: #fff; color: #000; border-right: 1px solid #DBA957; border-bottom: 1px solid #DBA957; padding-bottom: 1.5rem' },
                content: { style: 'background-color: #fff; color: #000; border-right: 1px solid #DBA957' }}">
      <template #header>
        <div>
          <img class="ml-3" width="60" src="@/assets/likolad-logo.svg" alt=""/>
        </div>
      </template>
      <div class="admin-sidebar-items flex flex-column row-gap-3 mt-6 pl-4 text-xl">
        <p class="cursor-pointer" @click="showSection('dashboard')">Dashboard</p>
        <p class="cursor-pointer" @click="showSection('orders')">Orders</p>
        <p class="cursor-pointer" @click="showSection('users')">Users</p>
        <p class="cursor-pointer" @click="showSection('products')">Products</p>
        <p class="cursor-pointer" @click="showSection('categories')">Categories</p>
        <p class="cursor-pointer" @click="showSection('testimonials')">Testimonials</p>
        <p class="cursor-pointer" @click="showSection('contacts')">Contacts</p>
        <p class="cursor-pointer" @click="showSection('logout')">Log out</p>
      </div>
    </Sidebar>

    <div class="content-area text-center">
      <div v-if="activeSection === 'orders'">
        <admin-orders/>
      </div>
      <div v-if="activeSection === 'users'">
        <admin-users/>
      </div>
      <div v-if="activeSection === 'products'">
        <admin-products/>
      </div>
      <div v-if="activeSection === 'categories'">
        <admin-categories/>
      </div>
      <div v-if="activeSection === 'testimonials'">
        <admin-testimonials/>
      </div>
      <div v-if="activeSection === 'contacts'">
        <admin-contacts/>
      </div>
      <div v-if="activeSection === 'logout'">
        <admin-logout/>
      </div>
      <div v-else-if="activeSection === 'dashboard'">
        <admin-dashboard/>
      </div>
    </div>
  </div>
</template>

<script setup>
const visible = ref(true);
const activeSection = ref('dashboard');

const showSection = (section) => {
  activeSection.value = section;
  visible.value = false
};
</script>

<style>
.admin-header {
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid var(--dark-orange);
}

.admin-sidebar-items > p {
  margin: 0;
}

.content-area {
  color: black;
}
</style>