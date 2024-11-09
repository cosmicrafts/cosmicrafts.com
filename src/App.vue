<template>
  <main id="app">
    <Header />
    
    <!-- Hero Section -->
    <div class="hero-wrapper">
      <HeroSection @ctaClick="handleCtaClick" />
    </div>

    <!-- Transition Section for Storytelling -->
    <div class="transition-wrapper">
      <TransitionSection />
    </div>

    <!-- Other Sections (Lore, Games, etc.) -->
    <section class="lore">
      <h2>{{ $t('lore.title') }}</h2>
      <p>{{ $t('lore.description') }}</p>
    </section>

    <section class="games">
      <h2>{{ $t('games.title') }}</h2>
      <div class="game-highlight">
        <h3>{{ $t('games.battlegrounds.title') }}</h3>
        <p>{{ $t('games.battlegrounds.description') }}</p>
      </div>
      <div class="game-highlight">
        <h3>{{ $t('games.adventures.title') }}</h3>
        <p>{{ $t('games.adventures.description') }}</p>
      </div>
    </section>

    <section class="cta-section">
      <button class="cta-button">{{ $t('cta') }}</button>
    </section>

    <Footer />
  </main>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HeroSection from './components/HeroSection.vue';
import CarouselSection from './components/CarouselSection.vue';
import TransitionSection from './components/TransitionSection.vue';
import { selectedLanguage } from './stores/languageState';
import { provide } from 'vue';

provide('selectedLanguage', selectedLanguage);
const handleCtaClick = (action) => {
  console.log(`CTA button clicked with action: ${action}`);
};
</script>


<style scoped>
.hero-wrapper {
  position: relative;
  z-index: 2;
  margin-bottom: -12rem; /* Adjust as needed for the overlap */
}

.transition-wrapper {
  position: relative;
  z-index: 1;
}

.hero {
  position: relative;
  z-index: 2;
  margin-top: 0;
}

.transition-section {
  position: relative;
  padding-top: 2rem;
  background: linear-gradient(to bottom, rgba(12, 24, 46, 0.8), rgba(25, 24, 24, 0.9));
  color: #fff;
  z-index: 1;
}

.fade-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px; /* Adjust the height as needed */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(12, 24, 46, 1));
  z-index: 3;
}


.carousel {
  margin-top: 0rem;
  height: 24rem;
}

.lore,
.games,
.cta-section {
  margin-top: 2rem;
}

.cta-button {
  background-color: #4a90e2;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #3a7bd5;
}

.game-highlight {
  margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid #3a3a3a;
}
</style>
