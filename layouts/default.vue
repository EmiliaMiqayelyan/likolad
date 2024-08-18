<template>
  <div>
    <LazyHeader v-if="useRoute().fullPath !== '/admin-dashboard'"/>
    <TopButton />
    <slot/>
    <LazyFooter v-if="useRoute().fullPath !== '/admin-dashboard'"/>
  </div>
</template>

<script setup lang="ts">
</script>