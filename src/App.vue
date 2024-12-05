<template>
  <main id="app">
    <Header />
    <router-view />
    <Footer v-if="!isWhitepaper" />
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const route = useRoute();

const isWhitepaper = computed(() => route.path === '/whitepaper');
</script>

<style scoped>
/* Global styles (optional) */
</style>
