<template>
  <div class="parallax-wrapper">
    <!-- Section with White Layer -->
    <div class="section-wrapper">
      <div class="white-layer">
        <svg
          viewBox="0 0 1200 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <!-- White Layer as a Thin Triangle -->
          <polygon points="0,0 1200,0 1200,100 0,50" fill="white" />
        </svg>
      </div>

      <!-- Parallax Layers -->
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
            <!-- Background Layers -->
            <g v-for="image in images" :key="image.class">
              <image
                :class="image.class"
                :href="image.src"
                :width="1200"
                :height="800"
                x="0"
                y="0"
              />
            </g>

            <!-- Centered Explore Text -->
            <text class="explore-text" x="50%" y="30%" text-anchor="middle" dominant-baseline="middle">
              {{ $t('darkRift.discover') }}
            </text>
          </svg>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Import local assets
import skyImage from "@/assets/webp/go.webp";
import darkrift from "@/assets/webp/darkrift.webp";
import stars from "@/assets/webp/starsbig.webp";

export default {
  name: "ParallaxScene",
  data() {
    return {
      images: [
        { class: "sky", src: skyImage, width: "1200", height: "800" },
        { class: "darkrift", src: darkrift, width: "1200", height: "800" },
        { class: "stars", src: stars, width: "1200", height: "800" },
      ],
    };
  },
  mounted() {
    const parallaxSceneEl = this.$el;

    gsap.registerPlugin(ScrollTrigger);

    // Parallax animation for images and text
    gsap.timeline({
      scrollTrigger: {
        trigger: parallaxSceneEl.querySelector(".parallax-scene"),
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    })
      .fromTo(
        parallaxSceneEl.querySelector(".sky"),
        { y: -200},
        { y: -150, duration: 2 },
        0
      )
      .fromTo(
        parallaxSceneEl.querySelector(".darkrift"),
        { y: -200 },
        { y: -100, duration: 2 },
        0
      )
      .fromTo(
        parallaxSceneEl.querySelector(".stars"),
        { y: -200 },
        { y: 80, duration: 2 },
        0
      )
      .fromTo(
        parallaxSceneEl.querySelector(".explore-text"),
        { opacity: 0, y: -200 },
        { opacity: 1, y: 10, duration: 1 },
        0.5
      );
  },
};
</script>

<style scoped>
.parallax-wrapper {
  position: relative;
  width: 100%;
  overflow: visible; /* Allow images to extend beyond bounds */
}

.section-wrapper {
  position: relative;
  width: 100%;
}

.white-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 10;
}

.white-layer svg {
  display: block;
}

.white-layer polygon {
  fill: #ffffff;
}

/* Parallax Scene */
.parallax-scene {
  position: relative;
  z-index: 1;
  margin-top: -50px; /* Adjust scene alignment with white layer */
}

.scrollDist {
  width: 100%;
  height: 100vh;
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
  overflow: visible; /* Prevent SVG clipping */
}

image {
  width: 100%;
  height: auto;
}

.explore-text {
  text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 800;
  font-size: 6vw;
  text-transform: uppercase;
  fill: #111b29;
}
</style>
