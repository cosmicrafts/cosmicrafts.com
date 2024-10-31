import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import './style.css';

// Import language files
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';
import vi from './locales/vi.json';
import ko from './locales/ko.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';

const i18n = createI18n({
  legacy: false,  // Enable Composition API usage
  locale: 'en',   // Set the default language
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    fr,
    de,
    pt,
    ru,
    ar,
    vi,
    ko,
    ja,
    zh
  }
});

createApp(App).use(i18n).mount('#app');
