<template>
  <section class="hero">
    <div class="carousel">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['carousel-slide', { active: index === currentSlide }]"
      >
        <!-- Display an image based on the slide's action property -->
        <img
          :src="imageMap[slide.action]"
          :alt="slide.title"
          class="hero-image"
        />
        <p class="hero-description">{{ slide.description }}</p>
        <button class="cta-button" @click="handleClick(slide.action)">
          {{ slide.buttonText }}
        </button>
      </div>

      <!-- Carousel Controls -->
      <button class="carousel-control prev" @click="prevSlide">‹</button>
      <button class="carousel-control next" @click="nextSlide">›</button>

      <!-- Carousel Indicators -->
      <div class="carousel-indicators">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          :class="['indicator', { active: index === currentSlide }]"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

// Manually import each image and create a map for them
import adventuresImg from '@/assets/webp/adventures.webp';
import battlegroundImg from '@/assets/webp/battlegrounds.webp';
import newsImg from '@/assets/webp/news.webp';
import technologyImg from '@/assets/webp/technology.webp';

const imageMap = {
  adventures: adventuresImg,
  battleground: battlegroundImg,
  news: newsImg,
  technology: technologyImg,
};

const { t } = useI18n();
const currentSlide = ref(0);

// Load carousel slides from translations
const slides = ref([
  {
    title: t('carousel.slides[0].title'),
    description: t('carousel.slides[0].description'),
    buttonText: t('carousel.slides[0].buttonText'),
    action: 'adventures',
  },
  {
    title: t('carousel.slides[1].title'),
    description: t('carousel.slides[1].description'),
    buttonText: t('carousel.slides[1].buttonText'),
    action: 'battleground',
  },
  {
    title: t('carousel.slides[2].title'),
    description: t('carousel.slides[2].description'),
    buttonText: t('carousel.slides[2].buttonText'),
    action: 'news',
  },
  {
    title: t('carousel.slides[3].title'),
    description: t('carousel.slides[3].description'),
    buttonText: t('carousel.slides[3].buttonText'),
    action: 'technology',
  },
]);

// Emit event for the button click
const emit = defineEmits(['ctaClick']);
const handleClick = (action) => {
  emit('ctaClick', action);
};

// Carousel controls
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Auto-slide functionality
let interval;
onMounted(() => {
  interval = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.hero {
  padding: 2rem 0;
  background: linear-gradient(135deg, #2d3748, #1a202c);
  text-align: center;
  position: relative;
}

.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 24rem;
  margin: 0 auto;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.carousel-slide.active {
  display: flex;
  opacity: 1;
}

.hero-image {
  max-width: 12rem;
  height: auto;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
  font-weight: 400;
  color: #cbd5e0;
  margin-bottom: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.cta-button {
  background-color: #4a90e2;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.cta-button:hover {
  background-color: #3a7bd5;
  transform: scale(1.05);
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2rem;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
}

.carousel-control.prev {
  left: 1rem;
}

.carousel-control.next {
  right: 1rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 10px;
  height: 10px;
  background: #4a90e2;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.indicator.active {
  background: #3a7bd5;
}
</style>
