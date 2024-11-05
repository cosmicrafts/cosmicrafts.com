<template>
    <section class="transition-section">
      <div class="transition-content">
        <h2 class="section-title">Discover Cosmicrafts</h2>
        <div class="cards-container">
          <!-- Feature Card 1 -->
          <div class="feature-card" :style="{ transform: `translateY(${scrollY * 0.1}px)`, opacity: `${1 - scrollY * 0.0015}` }">
            <h3>Epic Battles</h3>
            <p>Engage in thrilling cosmic battles with unique strategies and intense action.</p>
          </div>
          <!-- Feature Card 2 -->
          <div class="feature-card" :style="{ transform: `translateY(${scrollY * 0.15}px)`, opacity: `${1 - scrollY * 0.0015}` }">
            <h3>Build Your Empire</h3>
            <p>Construct your cosmic base, gather resources, and prepare for interstellar conquest.</p>
          </div>
          <!-- Feature Card 3 -->
          <div class="feature-card" :style="{ transform: `translateY(${scrollY * 0.2}px)`, opacity: `${1 - scrollY * 0.0015}` }">
            <h3>Join the Community</h3>
            <p>Collaborate with other players, form alliances, and dominate the cosmos together.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const scrollY = ref(0);
  
  function handleScroll() {
    scrollY.value = window.scrollY;
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  .transition-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    background: linear-gradient(to bottom, rgba(12, 24, 46, 0.8), rgba(25, 24, 24, 0.9));
    color: #fff;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .cards-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .feature-card {
    width: 300px;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    text-align: center;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  
  .feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .feature-card p {
    font-size: 1rem;
    line-height: 1.6;
  }
  </style>
  