<template>
  <div class="card flex justify-center flex-column">
    <div v-if="token" class="admin-header">
      <i @click="visible = true" class="pi pi-align-justify cursor-pointer text-2xl text-color"></i>
    </div>

    <Sidebar v-if="token" v-model:visible="visible"
             :pt="{ header: { style: 'background-color: #fff; color: #000; border-right: 1px solid #DBA957; border-bottom: 1px solid #DBA957; padding-bottom: 1.5rem' },
                content: { style: 'background-color: #fff; color: #000; border-right: 1px solid #DBA957' }}">
      <template #header>
        <div>
          <img class="ml-3" width="60" src="@/assets/likolad-logo.svg" alt=""/>
        </div>
      </template>
      <div class="admin-sidebar-items flex flex-column row-gap-3 mt-6 pl-4 text-xl">
        <p class="cursor-pointer" @click="navigateTo('dashboard')">Dashboard</p>
        <p class="cursor-pointer" @click="navigateTo('orders')">Orders</p>
        <p class="cursor-pointer" @click="navigateTo('products')">Products</p>
        <p class="cursor-pointer" @click="navigateTo('categories')">Categories</p>
        <p class="cursor-pointer" @click="navigateTo('testimonials')">Testimonials</p>
        <p class="cursor-pointer" @click="navigateTo('contacts')">Contacts</p>
        <p class="cursor-pointer" @click="navigateTo('users')">Users</p>
        <p class="cursor-pointer" @click="navigateTo('logout')">Logout</p>
      </div>
    </Sidebar>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';

const visible = ref(false);
const router = useRouter();
const token =  typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

const navigateTo = (section) => {
  router.push(`/admin-dashboard/${section}`);
  visible.value = false;
};

onMounted(() => {
  if (!token) {
    navigateTo("logout")
  } else {
    navigateTo("dashboard")
  }
})
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
</style>