<template>
  <section class="hero">
    <!-- Background Canvas for Stars -->
    <canvas 
      id="starfield" 
      ref="starfield" 
      class="noise-canvas" 
      :style="{ top: `${scrollY * .5}px` }"
    ></canvas>
    <!-- Content Wrapper -->
    <div class="hero-content">
      <img 
        :src="heroImage" 
        alt="Hero Image" 
        class="hero-image" 
        :style="{ 
          transform: `translateY(${scrollY * -0.25}px) scale(${1 - scrollY * -0.00125})` 
        }" 
      />
      <img 
        :src="logo" 
        alt="Game Logo" 
        class="hero-logo" 
        :style="{ 
          transform: `translateY(${scrollY * -0.05}px) scale(${1 - scrollY * -0.00055})` 
        }" 
      />
      <h1 
        class="hero-title" 
        :style="{ 
          transform: `translateY(${scrollY * -0.025}px) scale(${1 - scrollY * 0.00105})` 
        }" 
      >
      This Ain’t Normal. But That’s the Point.
      </h1>
    </div>

     <!-- CTA and Social Media Panel -->
     <div class="cta-panel">
      <div class="cta-buttons">
        <button class="button primary play-now">Play Now</button>
         <button class="button secondary wishlist">Wishlist on Steam</button>
      </div>
      <div class="social-links">
        <a href="#"><img src="@/assets/icons/x.svg" alt="Twitter" /></a>
        <a href="#"><img src="@/assets/icons/discord.svg" alt="Discord" /></a>
        <a href="#"><img src="@/assets/icons/youtube.svg" alt="YouTube" /></a>
        <a href="#"><img src="@/assets/icons/instagram.svg" alt="Instagram" /></a>
        <a href="#"><img src="@/assets/icons/facebook.svg" alt="Facebook" /></a>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from '@/assets/webp/adventures.webp';
import heroImage from '@/assets/webp/hero.webp';

const scrollY = ref(0);
const starSpeed = ref(.5); // Default speed
const defaultSpeed = .1; // Define baseline speed
const maxSpeed = 2; // Set maximum speed limit
const minSpeed = 0.5; // Set minimum speed limit
const speedIncrement = 0.05; // Define smaller increment for finer control

let previousScrollY = 0;
const noiseCanvas = ref(null);

let n = 2000 + Math.floor(2000 * Math.random());
let w = 0, h = 0, x = 0, y = 0, z = 0;
let star_color_ratio = 0, star_x_save, star_y_save;
let star_ratio = 256;
let star = new Array(n);
let context;
let opacity = 0.1;

function $i(id) {
  return document.getElementById(id);
}

function init() {
  for (let i = 0; i < n; i++) {
    star[i] = new Array(5);
    star[i][0] = Math.random() * w * 2 - x * 2;
    star[i][1] = Math.random() * h * 2 - y * 2;
    star[i][2] = Math.round(Math.random() * z);
    star[i][3] = 0;
    star[i][4] = 0;
  }
  const starfield = $i('starfield');
  starfield.width = w;
  starfield.height = h;
  context = starfield.getContext('2d');
  context.strokeStyle = 'rgb(255,255,255)';
}

function anim() {
  context.clearRect(0, 0, w, h);
  for (let i = 0; i < n; i++) {
    star_x_save = star[i][3];
    star_y_save = star[i][4];
    star[i][2] -= starSpeed.value;
    if (star[i][2] > z) star[i][2] -= z;
    if (star[i][2] < 0) star[i][2] += z;
    star[i][3] = x + (star[i][0] / star[i][2]) * star_ratio;
    star[i][4] = y + (star[i][1] / star[i][2]) * star_ratio;
    if (star_x_save > 0 && star_x_save < w && star_y_save > 0 && star_y_save < h) {
      context.lineWidth = (1 - star_color_ratio * star[i][2]) * 1;
      context.beginPath();
      context.moveTo(star_x_save, star_y_save);
      context.lineTo(star[i][3], star[i][4]);
      context.stroke();
    }
  }
  requestAnimationFrame(anim);
}

function handleScroll() {
  const currentScrollY = window.scrollY;

  // Update scrollY for parallax effect
  scrollY.value = currentScrollY;

  // Adjust speed based on scroll direction
  if (currentScrollY > previousScrollY) {
    // Scrolling down - increase speed but cap it at maxSpeed
    starSpeed.value = Math.min(starSpeed.value + speedIncrement, maxSpeed);
  } else if (currentScrollY < previousScrollY) {
    // Scrolling up - decrease speed but don’t go below minSpeed
    starSpeed.value = Math.max(starSpeed.value - speedIncrement, minSpeed);
  }

  // Update previous scroll position
  previousScrollY = currentScrollY;
}


function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  x = Math.round(w / 2);
  y = Math.round(h / 2);
  z = (w + h) / 2;
  star_color_ratio = 1 / z;
  init();
}

onMounted(() => {
  w = window.innerWidth;
  h = window.innerHeight;
  resize();
  anim();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', resize);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', resize);
});
</script>


<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow: hidden;
  background: radial-gradient(circle, rgb(12, 24, 46), rgb(25, 24, 24));
}

.noise-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 5;
}

.hero-image {
  max-width: 24rem;
  margin-top: 0rem;
  z-index: 2;
  opacity: 0.95;
}

.hero-logo {
  max-width: 16rem;
  margin-top: -10rem;
  z-index: 3;
  opacity: 0.95;
}

.hero-title {
  font-size: 2rem;
  font-weight: bold;
  margin-top: -2rem;
  z-index: 3;
  text-shadow: 0px 0px 16px rgb(0, 174, 255);
}

/* CTA and Social Panel */
.cta-panel {
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 1rem;
  z-index: 6;
  background: linear-gradient(to bottom, rgba(22, 24, 31, 0.1), rgba(24, 27, 34, 0.2));
  backdrop-filter: blur(4px);
  border-top: 1px solid #ffffff12;
  border-bottom: 1px solid #ffffff12;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: 1rem;
}

.social-links img {
  opacity: .8;
  padding: .5rem;
  transition: background 0.1s, opacity 0.1s;
}

.social-links img {
  width: 24px;
  height: 24px;
  transition: transform 0.1s;
}

.social-links img:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: scale(1.1);
  opacity: 1;
  border-radius: 8px;
  filter: drop-shadow(0px 0px 4px rgba(0, 119, 255, 0.784));
}

.cta-button {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s;
}

@media (max-width: 768px) {
  /* Smaller logo and hero image */
  .hero-image {
    max-width: 18rem;
    margin-top: -8rem;
  }

  .hero-logo {
    max-width: 12rem;
    margin-top: -8rem;
  }

  /* Slightly smaller hero title text */
  .hero-title {
    font-size: 1rem;
    margin-top: -1rem;
  }

  /* Stack CTA panel items in rows */
  .cta-panel {
    flex-direction: column;
    gap: .25rem; /* Less space between rows */
    padding: 1rem;
  }

  /* Each button takes full width in its row */
  .cta-buttons {
    flex-direction: column;
    width:80%;
    margin-bottom: .25rem;
  }

  .cta-button {
    width: 100%;
    padding: .5rem 1;
    font-size: 1.25rem;
  }

}

</style>
