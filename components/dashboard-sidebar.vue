<template>
  <div class="card flex justify-center flex-column">
    <div class="admin-header">
      <i v-show="visible" @click="visible = true" class="pi pi-align-justify cursor-pointer text-2xl text-color"></i>
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
        <p class="cursor-pointer" @click="showSection('products')">Products</p>
        <p class="cursor-pointer" @click="showSection('categories')">Categories</p>
        <p class="cursor-pointer" @click="showSection('testimonials')">Testimonials</p>
        <p class="cursor-pointer" @click="showSection('contacts')">Contacts</p>
        <p class="cursor-pointer" @click="showSection('sign-up')">Users</p>
        <p class="cursor-pointer" @click="showSection('sign-in')">Logout</p>
      </div>
    </Sidebar>

    <div class="content-area text-center">
      <div v-if="activeSection === 'orders'">
        <orders/>
      </div>
      <div v-if="activeSection === 'sign-up'">
        <users/>
      </div>
      <div v-if="activeSection === 'products'">
        <products/>
      </div>
      <div v-if="activeSection === 'categories'">
        <categories/>
      </div>
      <div v-if="activeSection === 'testimonials'">
        <testimonials/>
      </div>
      <div v-if="activeSection === 'contacts'">
        <contacts/>
      </div>
      <div v-if="activeSection === 'sign-in'">
        <logout/>
      </div>
      <div v-else-if="activeSection === 'dashboard'">
        <dashboard/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Categories from "~/pages/admin-dashboard/categories.vue";
import Orders from "~/pages/admin-dashboard/orders.vue";
import Users from "~/pages/admin-dashboard/users.vue";
import Products from "~/pages/admin-dashboard/products.vue";
import Testimonials from "~/pages/admin-dashboard/testimonials.vue";
import Contacts from "~/pages/admin-dashboard/contacts.vue";
import Logout from "~/pages/admin-dashboard/logout.vue";
import Dashboard from "~/pages/admin-dashboard/dashboard.vue";

const visible = ref(true);
const activeSection = ref('dashboard');
const isLoggedIn = ref(!!localStorage.getItem('authToken'));

watch(() => localStorage.getItem('authToken'), (newToken) => {
  isLoggedIn.value = !!newToken;
  if (isLoggedIn.value) {
    activeSection.value = 'dashboard';
    visible.value = true;
  }
});

const showSection = (section) => {
  activeSection.value = section;
  visible.value = false;
};
</script>

<style scoped>
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