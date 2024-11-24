<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-wrapper">
      <HeroSection @ctaClick="handleCtaClick" />
    </div>

    <!-- Lore Section -->
    <div class="lore-wrapper">
      <Lore />
    </div>

    <!-- Lore2 Section -->
    <div class="lore-wrapper">
      <Lore2 />
    </div>

    <!-- Other Sections (Games, etc.) -->
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
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue';
import Lore from '@/components/Lore.vue';
import Lore2 from '@/components/Lore2.vue';

const handleCtaClick = (action) => {
  console.log(`CTA button clicked with action: ${action}`);
};
</script>

  
  <style scoped>

  .hero {
    position: relative;
    z-index: 2;
    margin-top: 0;
  }
  

  .carousel {
    margin-top: 0rem;
    height: 24rem;
  }
  
  .lore,
  .games,
  .cta-section {
    margin-top: 2rem;
    z-index: 100;
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
  