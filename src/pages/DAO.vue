<template>
    <section id="dao" class="dao-section">
      <!-- Section Title -->
      <div class="section-header">
        <h2 class="section-title">{{ t('dao.title') }}</h2>
        <p class="section-subtitle">{{ t('dao.subtitle') }}</p>
      </div>
  
      <!-- Key Features -->
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature">
          <img :src="feature.icon" :alt="feature.title" class="feature-icon" />
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
  
      <!-- Join DAO CTA -->
      <div class="cta-wrapper">
        <button class="cta-button primary" @click="joinDao">
          {{ t('dao.cta_join') }}
        </button>
        <button class="cta-button secondary" @click="learnMore">
          {{ t('dao.cta_learn_more') }}
        </button>
      </div>
  
      <!-- Proposal Highlights -->
      <div class="proposals-section">
        <h3 class="proposals-title">{{ t('dao.proposals.title') }}</h3>
        <div v-if="proposals.length" class="proposals-list">
          <div
            v-for="proposal in proposals"
            :key="proposal.id"
            class="proposal-item"
          >
            <h4 class="proposal-title">{{ proposal.title }}</h4>
            <p class="proposal-summary">{{ proposal.summary }}</p>
            <button
              class="proposal-view-button"
              @click="viewProposal(proposal.id)"
            >
              {{ t('dao.proposals.view') }}
            </button>
          </div>
        </div>
        <div v-else>
          <p>{{ t('dao.proposals.no_proposals') }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  
  const features = ref([
    {
      title: t('dao.features.decentralised_voting'),
      description: t('dao.features.decentralised_voting_desc'),
      icon: '@/assets/icons/voting.svg',
    },
    {
      title: t('dao.features.community_ownership'),
      description: t('dao.features.community_ownership_desc'),
      icon: '@/assets/icons/ownership.svg',
    },
    {
      title: t('dao.features.transparency'),
      description: t('dao.features.transparency_desc'),
      icon: '@/assets/icons/transparency.svg',
    },
  ]);
  
  const proposals = ref([
    {
      id: 1,
      title: t('dao.proposals.sample1.title'),
      summary: t('dao.proposals.sample1.summary'),
    },
    {
      id: 2,
      title: t('dao.proposals.sample2.title'),
      summary: t('dao.proposals.sample2.summary'),
    },
  ]);
  
  const joinDao = () => {
    window.location.href = '#'; // Replace with actual DAO join link
  };
  
  const learnMore = () => {
    window.location.href = '#'; // Replace with learn more section or page
  };
  
  const viewProposal = (id) => {
    console.log(`View proposal with ID: ${id}`); // Implement actual logic to navigate to proposal details
  };
  </script>
  
  <style scoped>
  .dao-section {
    padding: 4rem 2rem;
    background: radial-gradient(circle, rgba(12, 24, 46, 1), rgba(25, 24, 24, 1));
    color: #fff;
    text-align: center;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: #bbb;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }
  
  .feature {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
  
  .feature-icon {
    width: 3rem;
    margin-bottom: 1rem;
  }
  
  .feature-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .feature-description {
    font-size: 1rem;
    color: #aaa;
  }
  
  .cta-wrapper {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
  }
  
  .cta-button {
    padding: 0.75rem 2rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .cta-button.primary {
    background: #00c3ff;
    color: #fff;
  }
  
  .cta-button.primary:hover {
    background: #0094ff;
  }
  
  .cta-button.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .proposals-section {
    margin-top: 4rem;
  }
  
  .proposals-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .proposals-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .proposal-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .proposal-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .proposal-summary {
    color: #ccc;
    margin-bottom: 1rem;
  }
  
  .proposal-view-button {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    background: #00c3ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .proposal-view-button:hover {
    background: #0094ff;
  }
  </style>
  