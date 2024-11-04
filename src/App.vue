<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HeroSection from './components/HeroSection.vue';
import CarouselSection from './components/CarouselSection.vue';

const handleCtaClick = (action) => {
  console.log(`CTA button clicked with action: ${action}`);
};
</script>

<template>
  <main id="app">
  <Header />
  
    <!-- Hero Section -->
    <HeroSection @ctaClick="handleCtaClick" />

    <!-- Carousel Section -->
    <CarouselSection @ctaClick="handleCtaClick" />

    <!-- Lore Section -->
    <section class="lore">
      <h2>{{ $t('lore.title') }}</h2>
      <p>{{ $t('lore.description') }}</p>
    </section>

    <!-- Games Section -->
    <section class="games">
      <h2>{{ $t('games.title') }}</h2>

      <!-- Battlegrounds Overview -->
      <div class="game-highlight">
        <h3>{{ $t('games.battlegrounds.title') }}</h3>
        <p>{{ $t('games.battlegrounds.description') }}</p>
      </div>

      <!-- Adventures Overview -->
      <div class="game-highlight">
        <h3>{{ $t('games.adventures.title') }}</h3>
        <p>{{ $t('games.adventures.description') }}</p>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="cta-section">
      <button class="cta-button">{{ $t('cta') }}</button>
    </section>

    <Footer />
  </main>
</template>

<style scoped>

  .hero {
    margin-top: 0rem;
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
