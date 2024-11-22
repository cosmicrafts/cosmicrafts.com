<template>
  <div class="parallax-wrapper">
    <div class="parallax-scene">
      <div class="scrollDist"></div>
      <main>
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <!-- Mask -->
          <mask id="m">
            <g class="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image xlink:href="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800" />
            </g>
          </mask>

          <!-- Background Layers -->
          <image class="sky" xlink:href="https://assets.codepen.io/721952/sky.jpg" width="1200" height="590" />
          <image class="mountBg" xlink:href="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800" />
          <image class="mountMg" xlink:href="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800" />
          <image class="cloud2" xlink:href="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800" />
          <image class="mountFg" xlink:href="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800" />
          <image class="cloud1" xlink:href="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800" />
          <image class="cloud3" xlink:href="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800" />

          <!-- Centered Explore Text -->
          <text class="explore-text" x="50%" y="35%" text-anchor="middle" dominant-baseline="middle">EXPLORE</text>

          <!-- Masked FURTHER Text -->
          <g mask="url(#m)">
            <rect fill="#fff" width="1200" height="800" />
            <text class="further-text" x="50%" y="35%" text-anchor="middle" dominant-baseline="middle">FURTHER</text>
          </g>
        </svg>
      </main>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ParallaxScene",
  mounted() {
    const parallaxSceneEl = this.$el;

    gsap.timeline({
      scrollTrigger: {
        trigger: parallaxSceneEl.querySelector(".scrollDist"),
        start: "top top",
        end: "bottom+=1000 top", // Control the scroll tempo
        scrub: 1,
      },
    })
      .fromTo(parallaxSceneEl.querySelector(".sky"), { y: 0 }, { y: -200, duration: 2 }, 0)
      .fromTo(parallaxSceneEl.querySelectorAll(".cloud1"), { y: 100 }, { y: -800, duration: 2 }, 0)
      .fromTo(parallaxSceneEl.querySelector(".cloud2"), { y: -150 }, { y: -500, duration: 2 }, 0)
      .fromTo(parallaxSceneEl.querySelector(".cloud3"), { y: -50 }, { y: -650, duration: 2 }, 0)
      // Add parallax effect to texts
      .fromTo(
        parallaxSceneEl.querySelector(".explore-text"),
        { y: "35%" },
        { y: "40%", duration: 2 }, // Moves down slightly
        0
      )
      .fromTo(
        parallaxSceneEl.querySelector(".further-text"),
        { y: "35%" },
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

/* Centered and Resized Text */
.explore-text,
.further-text {
  font-family: "Montserrat", sans-serif;
  font-size: 120px; /* Increased font size */
  text-transform: uppercase;
  fill: #fff;
}

.further-text {
  fill: #162a43; /* Color controlled via mask */
}
</style>
