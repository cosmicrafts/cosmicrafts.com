<template>
  <section class="hero">
    <!-- Background Canvas for Stars -->
    <canvas id="starfield" ref="starfield" class="noise-canvas"></canvas>

    <!-- Content Wrapper -->
    <div class="hero-content">
      <img :src="heroImage" alt="Hero Image" class="hero-image" :style="{ transform: `translateY(${scrollY * 0.35}px)` }" />
      <img :src="logo" alt="Game Logo" class="hero-logo" :style="{ transform: `translateY(${scrollY * 0.25}px)` }" />
      <h1 class="hero-title" :style="{ transform: `translateY(${scrollY * 0.2}px)` }">DESATA EL CAOS</h1>
      <p class="hero-subtitle" :style="{ transform: `translateY(${scrollY * 0.25}px)` }">ACCIÓN Y ESTRATEGIA PARA MÓVILES · GRATIS</p>
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
  max-width: 28rem;
  margin-top: 12rem;
  z-index: 2;
}

.hero-logo {
  max-width: 18rem;
  margin-top: -12rem;
  z-index: 3;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 1rem;
  z-index: 3;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  z-index: 3;
}
</style>
