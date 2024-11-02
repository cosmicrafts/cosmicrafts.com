<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSelector from '@/components/LanguageSelector.vue';

const { locale } = useI18n();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
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
          <li><a href="#">{{ $t('header.home') }}</a></li>
          <li><a href="#">{{ $t('header.features') }}</a></li>
          <li><a href="#">{{ $t('header.games') }}</a></li>
          <li><a href="#">{{ $t('header.community') }}</a></li>
          <li><a href="#">{{ $t('header.contact') }}</a></li>
        </ul>

        <!-- Language Selector Component Wrapper -->
        <div class="language-selector-wrapper">
          <LanguageSelector />
        </div>
      </div>
    </nav>
  </header>
</template>



<style scoped>
/* Basic Header Styling */

header {
  top: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #3a3a3a;
  background: linear-gradient(to bottom, rgba(45, 64, 83, 0.98), rgba(17, 26, 34, 0.95));
  position: fixed;
  z-index: 10;
  border-radius: 10px;
  margin: auto;
  left: .5rem;
  right: .5rem;
}

/* Logo Centered */
.logo img {
  width: 2.5rem;
}

.dropdown-menu li {
  padding: 0.5rem 1rem;
  color: #e2e8f0;
  font-size: 0.9rem;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #4a90e2;
}

/* Navigation Links */
.nav-links {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.nav-links a {
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.1s;
}

.nav-links a:hover {
  color: #4a90e2;
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
  .burger {
    display: flex; /* Visible on mobile */
  }

  /* Center logo, hide nav links initially */
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
    width: 60%; /* Half width of the screen */
    height: 100%;
    background: linear-gradient(to bottom, rgba(30, 43, 56, 0.58), rgba(23, 33, 43, 0.691));
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align content to the left */
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
    left: 0rem; /* Align to the left */
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

  /* Navigation Container to properly position links and language selector */
  .nav-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 6rem 1.5rem 2rem; /* Add spacing to separate from close button */
  }

  /* Align nav-links to the top */
  .nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: flex-start; /* Align links to the left */
    font-size: 1.5rem;
    text-align: left;
    flex-direction: column;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.35); /* Slightly transparent dark overlay */
    z-index: 9; /* Ensure it's behind the menu */
  }
}

@media (min-width: 769px) {
  .close-btn,
  .language-selector-wrapper {
    display: none;
  }

}
</style>