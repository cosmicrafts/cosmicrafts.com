<template>
  <section id="dao" class="dao-section">
    <!-- Section Title and Overview -->
    <div class="section-header">
      <div class="logo-and-overview">
        <!-- Logo -->
        <img src="@/assets/icons/dao.svg" alt="Cosmicrafts DAO Logo" class="dao-logo" />

        <!-- Title and Mission -->
        <div class="mission">
          <h2 class="mission-title">{{ t('dao.mission.title') }}</h2>
          <p class="mission-description">{{ t('dao.mission.description') }}</p>
        </div>
      </div>
    </div>

    <!-- Call-to-Action Buttons -->
    <div class="cta-wrapper">
      <h3 class="cta-title">{{ t('dao.cta_title') }}</h3>
      <button class="cta-button primary" @click="joinDao">
        {{ t('dao.cta_join') }}
      </button>
      <button class="cta-button secondary" @click="learnMore">
        {{ t('dao.cta_learn_more') }}
      </button>
    </div>

    <!-- Key Features -->
    <div class="features-grid">
      <div v-for="feature in features" :key="feature.title" class="feature">
        <img :src="feature.icon" :alt="feature.title" class="feature-icon" />
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
      </div>
    </div>

    <!-- Proposal Highlights -->
    <div class="proposals-section">
      <h3 class="proposals-title">{{ t('dao.proposals.title') }}</h3>
      <div v-if="proposals.length" class="proposals-list">
        <div v-for="proposal in proposals" :key="proposal.id" class="proposal-item">
          <h4 class="proposal-title">{{ proposal.title }}</h4>
          <p class="proposal-summary">{{ proposal.summary }}</p>
          <button class="proposal-view-button" @click="viewProposal(proposal.id)">
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
  background-image: url('/src/assets/webp/space.webp');
  color: #fff;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  text-align: left;
}

.dao-logo {
  width: 8rem;
  margin-top: 2rem;
}

.mission {
  margin-left: 1.5rem;
}

.mission-title {
  font-size: 3rem;
  font-weight: bold;
}

.mission-description {
  font-size: 2rem;
  color: #bbb;
}

.cta-wrapper {
  margin: 2rem 2rem;
  text-align: left;
}

.cta-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.cta-button {
  margin-right: 1rem;
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
  text-align: center;
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

@media (max-width: 768px) {
  .section-header,
  .cta-wrapper {
    text-align: center;
    align-items: center;
  }

  .mission {
    margin-left: 0;
  }
}
</style>
