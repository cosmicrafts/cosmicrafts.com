<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <main id="app">
    <!-- Hero Section -->
    <section class="hero">
      <h1>{{ $t('hero.title') }}</h1>
      <p>{{ $t('hero.description') }}</p>
      <button class="cta-button">{{ $t('cta') }}</button>
    </section>

    <!-- Lore Section -->
    <section class="lore">
      <h2>{{ $t('lore.title') }}</h2>
      <p>{{ $t('lore.description') }}</p>
    </section>

    <!-- Game Highlights Section -->
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

    <!-- Footer -->
    <Footer />
  </main>
</template>

<style scoped>
#app {
  font-family: 'Roboto', sans-serif;
  color: #e2e8f0;
  background-color: #1a202c;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero {
  padding: 2rem 0;
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
