<template>
  <div class="parallax-wrapper">
    <!-- Semi-Transparent Overlay -->
    <div class="color-overlay"></div>

    <div class="parallax-scene">
      <div class="scrollDist"></div>
      <main>
        <svg
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
        >
          <!-- Mask -->
          <mask id="m">
            <g class="cloud1">
              <rect fill="#fff" width="100%" height="800" y="799" />
              <image :href="maskImage" width="100%" height="100%" />
            </g>
          </mask>

          <!-- Background Layers -->
          <g v-for="image in images" :key="image.class">
            <image
              :class="image.class"
              :href="image.src"
              :width="image.width"
              :height="image.height"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>

          <!-- Centered Explore Text -->
          <text class="explore-text" x="50%" y="45%" text-anchor="middle" dominant-baseline="middle">
            {{ $t('darkRift.discover') }}
          </text>

          <!-- Masked FURTHER Text -->
          <g mask="url(#m)">
            <rect fill="#fff" width="1200" height="800" />
            <text class="further-text" x="50%" y="45%" text-anchor="middle" dominant-baseline="middle">
              {{ $t('darkRift.title') }}
            </text>
          </g>
        </svg>
      </main>
    </div>
  </div>
</template>


<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Import your local assets
import skyImage from "@/assets/webp/go.webp";
import darkrift from "@/assets/webp/darkrift.webp";
import stars from "@/assets/webp/starsbig.webp";
import cloud1Mask from "@/assets/webp/cloud1Mask.webp";
import asteroids from "@/assets/webp/asteroids.webp";
import nebula from "@/assets/webp/nebula1.webp";
import planet1 from "@/assets/webp/planet1.webp";
import planet2 from "@/assets/webp/planet3.webp";
import darkRift from '@/assets/webp/darkrift.webp';

// Import remote assets or consider storing their URLs in the data structure
const remoteImages = {
  cloud1: "https://assets.codepen.io/721952/cloud1.png",
  cloud3: "https://assets.codepen.io/721952/cloud3.png",
};

export default {
  name: "ParallaxScene",
  data() {
    return {
      images: [
        { class: "sky", src: skyImage, width: "100%", height: "auto" },
        { class: "darkrift", src: darkrift, width: "100%", height: "auto" },
        { class: "stars", src: stars, width: "100%", height: "auto" },
        { class: "planet1", src: planet1, width: "100%", height: "auto" },
        { class: "nebula", src: nebula, width: "100%", height: "auto" },
        { class: "planet2", src: planet2, width: "100%", height: "auto" },
        { class: "asteroids", src: asteroids, width: "100%", height: "auto" },
        { class: "cloud1", src: remoteImages.cloud1, width: "100%", height: "auto" },
        { class: "cloud3", src: remoteImages.cloud3, width: "100%", height: "auto" },
      ],
      maskImage: cloud1Mask,
    };
  },
  mounted() {
    const parallaxSceneEl = this.$el;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".sky", {
  filter: "brightness(1.5)", // Brighten
  duration: 4, // Time for one glow cycle
  repeat: -1, // Infinite repeat
  yoyo: true, // Glow up and down
  ease: "power3.inOut",
});


    gsap.timeline({
      scrollTrigger: {
        trigger: parallaxSceneEl.querySelector(".scrollDist"),
        start: "top center",
        end: "bottom+=1200 top", // Control the scroll tempo
        scrub: 2,
      },
    })
      .fromTo(parallaxSceneEl.querySelector(".darkrift"), { y: 0, x: 50 }, { rotation: -4, y: -390, scale: .85, x: 200, duration: 2 }, 0)
      .fromTo(parallaxSceneEl.querySelector(".sky"), { y: 0, x: 50 }, { rotation: -4, y: -390, scale: .85, x: 200, duration: 2 }, 0)
      .fromTo(parallaxSceneEl.querySelector(".stars"), { y: -200, x: 50}, { rotation: -25, y: 100, scale: 1.85, x: 150, duration: 2 }, 0)
      .fromTo(parallaxSceneEl.querySelectorAll(".cloud1"), { y: 100 }, { y: -800, duration: 2 }, 0)
      .fromTo(parallaxSceneEl.querySelector(".nebula"), { scale: .5 }, { scale: .25, duration: 2 }, 0)
      .fromTo(parallaxSceneEl.querySelector(".cloud3"), { y: -50 }, { y: -650, duration: 2 }, 0)
      // Add mountains to parallax
      .fromTo(
    parallaxSceneEl.querySelector(".asteroids"),
    { y: -10, rotation: 0 }, // Initial position and rotation
    { y: -900, rotation: 15, duration: 2 }, // Rotate 360 degrees during parallax
    0
  )
      .fromTo(parallaxSceneEl.querySelector(".planet1"), { x: -200,  scale: .45 }, { rotation: -25, x: -200, duration: 2, scale: .25}, 0)
      .fromTo(parallaxSceneEl.querySelector(".planet2"), { x: 750, y: 150, scale: .45 }, { rotation: 25,x: 1200, duration: 2, y: 350, scale: .25}, 0)
      // Add parallax effect to texts
      .fromTo(
        parallaxSceneEl.querySelector(".explore-text"),
        { y: "-100", opacity: 0 },
        {duration: .5, opacity: 1},
        { y: "400",scale: .55, rotation: -8, duration: 2 }, // Moves down slightly
        -.25
      )
      .fromTo(
  parallaxSceneEl.querySelector(".further-text"),
  { y: "-100" },
  { y: "300", rotation: 2, duration: 2 }, // Moves to intermediate position
  0.5 // Start time
)
.to(
  parallaxSceneEl.querySelector(".further-text"),
  { y: "300", rotation: 2, duration: 0 }, // Holds in place
  "+=0" // Immediately after the first animation
);

  },
};
</script>

<style scoped>
.parallax-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
}

.parallax-scene {
  position: relative;
  z-index: 0;
}

.scrollDist {
  width: 100%;
}

main {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #111b29;
}

svg {
  width: 100%;
  height: 100%;
}

image {
  width: 100%;
  height: auto;
}

.explore-text{
  text-shadow: -2px 2px 4px rgb(0, 0, 0);
}

.explore-text,
.further-text {
  font-weight: 800;
  font-size: 6vw;
  text-transform: uppercase;
  fill: #fff;
}

.further-text {
  fill: #242424; /* Color controlled via mask */
}

.nebula {
  mix-blend-mode: soft-light; /* Makes it blend with the background */
  opacity: 0.8; /* Adjust transparency */
}
.asteroids {
  opacity: 0.95; /* Adjust transparency */
}

.darkrift{
  mix-blend-mode: screen;
}

.cloud1,
.cloud3 {
  mix-blend-mode: hard-light;
}

.cloud3 {
  opacity: .75;
}


.color-overlay {/*
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.041); /* Blue with 2% transparency */
  pointer-events: none; /* Ensures it doesn’t interfere with clicks or interactions */
  z-index: 2; /* Place it above all content */
}
</style>
