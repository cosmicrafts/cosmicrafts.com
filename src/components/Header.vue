<!-- src/components/Header.vue -->
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const changeLanguage = (event) => {
  locale.value = event.target.value;
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

    <!-- Language Selector with Icon -->
    <div class="language-selector">
      <img src="@/assets/icons/lang.svg" alt="Language Icon" class="lang-icon" />
      <select id="header-language" @change="changeLanguage">
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
        <option value="de">DE</option>
        <option value="pt">Portuguese (BR)</option>
        <option value="ru">Russian</option>
        <option value="ar">Arabic</option>
        <option value="vi">Vietnamese</option>
        <option value="ko">Korean</option>
        <option value="ja">Japanese</option>
        <option value="zh">Chinese</option>
      </select>
    </div>

    <!-- Full-Screen Navigation Links with Close Button -->
    <nav :class="{ open: isMenuOpen }">
      <button class="close-btn" @click="toggleMenu">✕</button>
      <ul class="nav-links">
        <li><a href="#">{{ $t('header.home') }}</a></li>
        <li><a href="#">{{ $t('header.features') }}</a></li>
        <li><a href="#">{{ $t('header.games') }}</a></li>
        <li><a href="#">{{ $t('header.community') }}</a></li>
        <li><a href="#">{{ $t('header.contact') }}</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Basic Header Styling */

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #3a3a3a;
  background-color: #1a202c;
  position: relative;
}

/* Logo Centered */
.logo img {
  width: 2.5rem;
}

/* Language Selector */
.language-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang-icon {
  width: 1rem;
  height: 1rem;
}

.language-selector select {
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
}

/* Navigation Links */
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
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
  width: 25px;
  height: 3px;
  background-color: #e2e8f0;
  transition: transform 0.3s, opacity 0.3s;
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

  /* Full-Screen Navigation Links with Close Button */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1a202c;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
    z-index: 10;
  }

  nav.open {
    transform: scale(1);
  }

  /* Close Button */
  .close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: #e2e8f0;
    font-size: 2rem;
    cursor: pointer;
  }

  /* Display nav-links as a column in full-screen mode */
  .nav-links {
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
  }

  /* Adjust language selector on mobile */
  .language-selector {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }
}
/* Responsive Design */
@media (min-width: 769px) {
  .close-btn {
    display: none;
  }
}

</style>
