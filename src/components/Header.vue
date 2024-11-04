<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSelector from '@/components/LanguageSelector.vue';

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

    <!-- Full-Screen Overlay (closes menu on click) -->
    <div v-if="isMenuOpen" class="overlay" @click="toggleMenu"></div>

    <!-- Full-Screen Navigation Links with Close Button -->
    <nav :class="{ open: isMenuOpen }">
      <button class="close-btn" @click="toggleMenu">✕</button>
      
      <!-- Container for Navigation Links -->
      <div class="nav-container">
        <ul class="nav-links">
          <li><a href="#">{{ $t('header.dao') }}</a></li>
          <li><a href="#">{{ $t('header.marketplace') }}</a></li>
          <li><a href="#">{{ $t('header.community') }}</a></li>
          <li><a href="#">{{ $t('header.support') }}</a></li>
        </ul>

        <!-- Language Selector Component Wrapper -->
        <div class="language-selector-wrapper">
          <LanguageSelector />
        </div>
      </div>
    </nav>

    <!-- Log In Button (always on the far right) -->
    <button class="login-button" @click="handleLogin">Connect</button>
  </header>
</template>

<style scoped>
/* Basic Header Styling */

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border: 1px solid #ffffff17;
  background: linear-gradient(to bottom, rgba(28, 33, 54, 0.25), rgba(14, 26, 45, 0.5));
  position: fixed;
  z-index: 10;
  border-radius: 16px;
  margin: auto;
  top: 1%;
  left: 0.5rem;
  right: 0.5rem;
  height: 1rem;
  backdrop-filter: blur(4px);
}

/* Logo Styling */
.logo img {
  width: 2.5rem;
}

nav {
  position: fixed;
  left: 6rem;
}


/* Navigation Links */
.nav-links {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center; /* Ensures vertical alignment */
  margin-left: 1rem; /* Move links to the left */
  padding-left: 0; /* Remove additional padding if any */
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.1s;
}

.nav-links a:hover {
  color: #4aa5e2;
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
  z-index: 11;
}

.login-button:hover {
  background: linear-gradient(to bottom, #50b3d1, #32649d);
  border-color: #f7f7f778;
}

/* Burger Menu Styling */
.burger {
  display: none; /* Hidden on desktop */
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

  .header{
    left: 0.5rem;
    right: 0.5rem;
  }
  
  .burger {
    display: flex; /* Visible on mobile */
  }

  /* Center logo on mobile */
  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Half-Screen Navigation on the Left */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(30, 43, 56, 0.58), rgba(23, 33, 43, 0.691));
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transform: translateX(-100%);
    transition: transform 0.25s ease-in-out;
    border-right: 1px solid #3a3a3a;
    z-index: 10;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    backdrop-filter: blur(12px);
  }

  nav.open {
    transform: translateX(0); /* Slide in from the left */
  }

  /* Close Button aligned to the top left */
  .close-btn {
    position: absolute;
    top: 0rem;
    left: 0rem;
    background: none;
    border: none;
    color: #e2e8f0;
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.2s, transform 0.2s;
  }

  .close-btn:hover {
    color: #4a90e2;
    transform: scale(1.1);
  }

  /* Navigation Container */
  .nav-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 6rem 1.5rem 2rem;
  }

  /* Align nav-links to the top */
  .nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: flex-start;
    font-size: 1.5rem;
    flex-direction: column;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.35);
    z-index: 9;
  }
}

@media (min-width: 769px) {
  .close-btn,
  .language-selector-wrapper {
    display: none;
  }
  .language-icon {
    display: inline-block; /* Display only the icon on desktop */
  }
}
</style>
