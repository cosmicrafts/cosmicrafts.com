<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);
const selectedLanguage = ref("en"); // Default language
const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "pt", label: "Português (BR)" },
  { code: "ru", label: "Русский" },
  { code: "ar", label: "العربية" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const changeLanguage = (languageCode) => {
  selectedLanguage.value = languageCode;
  locale.value = languageCode;
  isDropdownOpen.value = false; // Close the dropdown immediately after selection
};

const toggleDropdown = (event) => {
  event.stopPropagation(); // Prevent click events from propagating and reopening the dropdown
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Close dropdown if clicking outside
document.addEventListener('click', () => {
  isDropdownOpen.value = false;
});
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

        <!-- Custom Dropdown for Language Selector -->
        <div class="language-selector" @click="toggleDropdown">
          <img src="@/assets/icons/lang.svg" alt="Language Icon" class="lang-icon" />
          <span>{{ languages.find(lang => lang.code === selectedLanguage).label }}</span>

          <!-- Dropdown Menu -->
          <ul v-if="isDropdownOpen" class="dropdown-menu">
            <li v-for="lang in languages" :key="lang.code" @click.stop="changeLanguage(lang.code)">
              {{ lang.label }}
            </li>
          </ul>
        </div>
      </div>
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
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.lang-icon {
  width: 1rem;
  height: 1rem;
}

.dropdown-menu {
  position: absolute;
  bottom: 100%; /* Ensure dropdown opens upwards */
  left: 0;
  background: #1a202c;
  border: 1px solid #3a3a3a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  list-style: none;
  margin: 0;
  padding: 0;
  width: 10rem;
  z-index: 20;
  transform-origin: bottom left; /* Set the origin for animation */
  transform: scaleY(0); /* Start in a collapsed state */
  transition: transform 0.1s ease-out; /* Smooth transition */
}

.language-selector:hover .dropdown-menu,
.language-selector:focus-within .dropdown-menu {
  transform: scaleY(1); /* Expand upward when active */
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
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.nav-links a {
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
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
    background: linear-gradient(180deg, rgba(32, 47, 78, 0.975), rgba(20, 28, 41, 0.925));
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align content to the left */
    transform: translateX(-100%);
    transition: transform 0.25s ease-in-out;
    z-index: 10;
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
    align-items: flex-start; /* Align links to the left */
    font-size: 1.5rem;
    text-align: left;
  }

  /* Language Selector positioned at the bottom left */
  .language-selector {
    align-self: flex-start;
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
  .close-btn {
    display: none;
  }
}
</style>