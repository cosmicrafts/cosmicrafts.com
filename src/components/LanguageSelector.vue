<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isDropdownOpen = ref(false);
const selectedLanguage = ref("en");
const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "pt", label: "Português" },
  { code: "ru", label: "Русский" },
  { code: "ar", label: "العربية" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
  { code: "tr", label: "Türkçe" }
];

const changeLanguage = (languageCode) => {
  selectedLanguage.value = languageCode;
  locale.value = languageCode;
  isDropdownOpen.value = false;
};

const toggleDropdown = (event) => {
  event.stopPropagation();
  isDropdownOpen.value = !isDropdownOpen.value;
};

document.addEventListener('click', () => {
  isDropdownOpen.value = false;
});
</script>

<template>
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
    </template>
    
    <style scoped>
    /* Language Selector Styles */
    .language-selector {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 10px;
      transition: background-color 0.1s ease;
      z-index: 0;
      font-weight: 600;
    }
    
    /* Hover effect for the language selector */
    .language-selector:hover {
      background-color: rgba(255, 255, 255, 0.1); /* White transparent background */
    }
    
    .lang-icon {
      width: 1rem;
      height: 1rem;
    }
    
    .dropdown-menu {
      position: absolute;
      bottom: 110%;
      left: 0;
      display: grid;
      grid-template-columns: repeat(3, 4fr);
      gap: 0.9rem;
      background: linear-gradient(to bottom, rgba(30, 43, 56, 0.98), rgba(23, 33, 43, 0.99));
      border: 1px solid #3a3a3a;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      list-style: none;
      margin: 0;
      padding: 0.5rem;
      font-weight: 700;
      transform-origin: bottom left;
      transform: scaleY(0);
      transition: transform 0.1s ease-out;
      border: 0.25px solid rgba(255, 255, 255, 0.086);
      border-radius: 10px;
      }
    
    /* Ensure the dropdown menu only opens on click, not hover */
    .language-selector:hover .dropdown-menu,
    .language-selector:focus-within .dropdown-menu {
      transform: scaleY(1); /* Remove this line if it's causing hover to trigger the dropdown */
    }
    
    /* Show dropdown menu only when `isDropdownOpen` is true */
    .dropdown-menu {
      transform: scaleY(1);
    }
    
    .dropdown-menu li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      color: #e2e8f0;
      font-size: 0.9rem;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.1s ease;
    }
    
    .dropdown-menu li:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
    </style>
    