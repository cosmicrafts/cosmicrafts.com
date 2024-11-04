<template>
  <section class="hero">
    <!-- Background Image with Parallax Effect -->
    <div class="hero-background" :style="{ backgroundImage: `url(${backgroundImage})`, transform: `translateY(${scrollY * 0.35}px)` }"></div>

    <!-- Content Wrapper -->
    <div class="hero-content">
      <!-- New Hero Image with Parallax Effect -->
      <img :src="heroImage" alt="Hero Image" class="hero-image" :style="{ transform: `translateY(${scrollY * 0.35}px)` }" />

      <!-- Logo with Parallax Effect -->
      <img :src="logo" alt="Game Logo" class="hero-logo" :style="{ transform: `translateY(${scrollY * 0.25}px)` }" />

      <!-- Title with Parallax Effect -->
      <h1 class="hero-title" :style="{ transform: `translateY(${scrollY * 0.2}px)` }">DESATA EL CAOS</h1>
      <p class="hero-subtitle" :style="{ transform: `translateY(${scrollY * 0.25}px)` }">ACCIÓN Y ESTRATEGIA PARA MÓVILES · GRATIS</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from '@/assets/webp/adventures.webp';
import backgroundImage from '@/assets/webp/bg-adventures.webp';
import heroImage from '@/assets/webp/hero.webp';

// Define a reactive scroll position
const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

// Add and remove the scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.2); /* Adjust for readability */
  z-index: 0;
  transition: transform 0.05s ease-out; /* Smooth parallax transition */
}

.hero-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 5;
}

/* New hero image styling for centered layout */
.hero-image {
  max-width: 28rem;
  margin-bottom: -12rem;
  z-index: 2;
}

/* Logo styling for centered layout */
.hero-logo {
  max-width: 12rem;
  margin-bottom: 1rem;
  z-index: 3;
}

/* Title styling */
.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 1rem;
  z-index: 3;
}

/* Subtitle styling */
.hero-subtitle {
  font-size: 1.2rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  z-index: 3;
}
</style>
