<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
  title: 'About Page'
})
</script>

<template>
  <h1>Ini adalah About</h1>
  <a-button>Selamat Datang</a-button>
</template>

<style scoped>

</style>
