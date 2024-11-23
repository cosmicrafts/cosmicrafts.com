<template>
  <div class="parallax-wrapper">
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
              <rect fill="#fff" width="100%" height="800" y="800" />
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
            EXPLORE
          </text>

          <!-- Masked FURTHER Text -->
          <g mask="url(#m)">
            <rect fill="#fff" width="1200" height="800" />
            <text class="further-text" x="50%" y="45%" text-anchor="middle" dominant-baseline="middle">
              FURTHER
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
import cloud1Mask from "@/assets/webp/cloud1Mask.webp";
import asteroids from "@/assets/webp/asteroids.webp";
import nebula from "@/assets/webp/nebula1.webp";
import planet1 from "@/assets/webp/planet1.webp";
import planet2 from "@/assets/webp/planet2.webp";

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

    gsap.timeline({
      scrollTrigger: {
        trigger: parallaxSceneEl.querySelector(".scrollDist"),
        start: "top center",
        end: "bottom+=1700 top", // Control the scroll tempo
        scrub: 1,
      },
    })
      .fromTo(parallaxSceneEl.querySelector(".sky"), { y: 0, }, { y: -600, scale: .75, x: 200, duration: 2 }, 0)
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
      .fromTo(parallaxSceneEl.querySelector(".planet1"), { x: -200, scale: .45 }, { x: -400, duration: 2, scale: .66}, 0)
      .fromTo(parallaxSceneEl.querySelector(".planet2"), { x: 900, scale: .25 }, { x: 900, duration: 2 , scale: .5}, 0)
      // Add parallax effect to texts
      .fromTo(
        parallaxSceneEl.querySelector(".explore-text"),
        { y: "1%" },
        { y: "45%", duration: 2 }, // Moves down slightly
        0
      )
      .fromTo(
        parallaxSceneEl.querySelector(".further-text"),
        { y: "1%" },
        { y: "45%", duration: 2 }, // Moves further down slightly
        0.5
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
}

.parallax-scene {
  position: relative;
  z-index: 1;
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

.explore-text,
.further-text {
  font-weight: 700;
  font-size: 8vw;
  text-transform: uppercase;
  fill: #fff;
}

.further-text {
  fill: #162a43; /* Color controlled via mask */
}

.nebula {
  mix-blend-mode: screen; /* Makes it blend with the background */
  opacity: 0.8; /* Adjust transparency */
}
.asteroids {
  opacity: 0.95; /* Adjust transparency */
}

.cloud1,
.cloud3 {
  mix-blend-mode: screen;
}


</style>
