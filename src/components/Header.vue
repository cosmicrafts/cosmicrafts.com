<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSelector from '@/components/LanguageSelector.vue';
import MobileMenu from '@/components/MobileMenu.vue'; // Import MobileMenu component

const { locale } = useI18n();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleLogin = () => {
  console.log('Log In button clicked');
};
</script>

<template>
  <header>
    <!-- Burger Menu Icon (Visible on Mobile) -->
    <div class="burger" @click="toggleMenu">
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
    </div>

    <!-- Logo -->
    <div class="logo">
      <img src="@/assets/icons/cosmicrafts.svg" alt="Cosmicrafts Logo" />
    </div>

    <!-- Connect Button (always on the far right) -->
    <button class="login-button" @click="handleLogin">Connect</button>
  </header>

  <!-- MobileMenu Component -->
  <MobileMenu v-if="isMenuOpen" @closeMenu="toggleMenu" />
</template>

<style scoped>
/* Basic Header Styling */

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border: 1px solid #ffffff12;
  background: linear-gradient(to bottom, rgba(22, 24, 31, 0.634), rgba(24, 27, 34, 0.2));
  position: fixed;
  z-index: 10;
  border-radius: 16px;
  margin: auto;
  top: 1%;
  left: 0.5rem;
  right: 0.5rem;
  height: 1rem;
  backdrop-filter: blur(8px);
}

/* Logo Styling */
.logo img {
  width: 2.5rem;
}

/* Log In Button Styling */
.login-button {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(to bottom, #00C0FC, #0056BA);
  color: #fff;
  border: 1px solid #25252529;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  height: 2.5rem;
}

.login-button:hover {
  background: linear-gradient(to bottom, #50b3d1, #32649d);
  border-color: #f7f7f778;
}

/* Burger Menu Styling */
.burger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.burger span {
  display: block;
  width: 24px;
  height: 3px;
  background-color: #e2e8f0;
  transition: transform 0.1s, opacity 0.1s;
}

.burger .open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.burger .open:nth-child(2) {
  opacity: 0;
}

.burger .open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .burger {
    display: flex; /* Visible on mobile */
    
  }

  /* Center logo on mobile */
  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
