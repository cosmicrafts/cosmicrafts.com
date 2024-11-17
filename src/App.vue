<template>
  <main id="app">
    <Header />
    <router-view />
    <Footer />
  </main>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
/* Global styles (optional) */
</style>
