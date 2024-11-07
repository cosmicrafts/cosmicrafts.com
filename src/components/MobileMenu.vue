<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSelector from '@/components/LanguageSelector.vue';

const { t } = useI18n();
const emit = defineEmits(['closeMenu']);

const closeMenu = () => {
  emit('closeMenu');
};
</script>

<template>
    <!-- Overlay to close the menu -->
    <div class="overlay" @click="closeMenu"></div>
  
    <!-- Side panel for nav-links and independent language selector -->
    <nav class="mobile-panel">
      <!-- Close button (same style and position as burger) -->
      <div class="close-btn" @click="closeMenu">
        <span class="open"></span>
        <span class="open"></span>
        <span class="open"></span>
      </div>
      
      <div class="nav-container">
        <ul class="nav-links">
          <li><a href="#">{{ t('header.dao') }}</a></li>
          <li><a href="#">{{ t('header.games') }}</a></li>
          <li><a href="#">{{ t('header.community') }}</a></li>
          <li><a href="#">{{ t('header.contact') }}</a></li>
        </ul>
      </div>
      <!-- Language Selector (Independent of nav-container) -->
      <div class="language-selector-container">
        <LanguageSelector />
      </div>
    </nav>
  </template>
  
  <style scoped>
  /* Overlay Styling */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  
  /* Side Panel */
  .mobile-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(30, 43, 56, 0.88), rgba(23, 33, 43, 0.77));
    display: flex;
    flex-direction: column;
    padding: 6rem 1.5rem 2rem;
    transition: transform 0.25s ease-in-out;
    z-index: 11;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    backdrop-filter: blur(8px);
    border-right: 1px solid #ffffff12;
  }
  
  /* Close Button (Styled like Burger Menu Icon) */
  .close-btn {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 3px;
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
  
  .close-btn span {
    display: block;
    width: 24px;
    height: 3px;
    background-color: #e2e8f0;
    transition: transform 0.1s, opacity 0.1s;
  }
  
  .close-btn .open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .close-btn .open:nth-child(2) {
    opacity: 0;
  }
  
  .close-btn .open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  
  /* Navigation Links */
  .nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 2rem;
  }
  
/* Mobile Navigation Links */
.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  display: inline-block;
  position: relative;
  transition: color 0.25s ease-in-out, transform 0.25s ease-in-out, text-shadow 0.25s ease-in-out;
  padding: 0.2rem 0.5rem;
}

.nav-links a:hover {
  color: #00c3ff;
  transform: scale(1.1);
  text-shadow: 0px 0px 2px rgba(0, 191, 255, 0.686);
}

/* Line Animation for Mobile */
.nav-links a::before,
.nav-links a::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 50%;
  background-color: #ffa200;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  box-shadow: 0px 0px 5px rgba(255, 162, 0, 0);
  transform: scaleX(0); /* Start hidden */
}

.nav-links a::before {
  top: -1px; /* Offset top line above text */
  left: -4%; /* Adjust horizontal offset for breathing room */
  transform-origin: left; /* Line grows from the left */
}

.nav-links a::after {
  bottom: -1px; /* Offset bottom line below text */
  right: -4%; /* Adjust horizontal offset for breathing room */
  transform-origin: right; /* Line grows from the right */
}

/* Hover Effect for Mobile */
.nav-links a:hover::before,
.nav-links a:hover::after {
  transform: scaleX(1.5);
  box-shadow: 0px 0px 5px rgba(255, 162, 0, 0.6);
}

  
  .nav-links a:hover {
    color: #4aa5e2;
  }
  
  .language-selector-container {
    justify-content: right;
    padding: 2rem 0;
  }
  </style>
  