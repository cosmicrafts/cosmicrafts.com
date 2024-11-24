<template>
      <div class="parallax-wrapper">
        <!-- Current Section -->
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
              <!-- Current Section Content -->
              <g v-for="image in images" :key="image.class">
                <image
                  :class="image.class"
                  :href="image.src"
                  :width="image.width"
                  :height="image.height"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </main>
        </div>
    
        <!-- New Section -->
        <div class="parallax-scene new-section">
          <div class="scrollDist"></div>
          <main>
            <svg
              viewBox="0 0 1200 800"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              width="100%"
              height="100%"
            >
              <!-- Reversed Cloud -->
              <g mask="url(#m)">
                <rect fill="#fff" width="1200" height="800" />
                <image class="cloud-reverse" :href="maskImage" width="1200" height="800" />
              </g>
    
              <!-- New Text -->
              <text class="new-text" x="50%" y="45%" text-anchor="middle" dominant-baseline="middle">
                A NEW DAWN
              </text>
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
      data() {
        return {
          images: [
            { class: "sky", src: "@/assets/webp/go.webp", width: "100%", height: "auto" },
            { class: "darkrift", src: "@/assets/webp/darkrift.webp", width: "100%", height: "auto" },
          ],
          maskImage: "@/assets/webp/cloud1Mask.webp",
        };
      },
      mounted() {
        const parallaxSceneEl = this.$el;
    
        // GSAP Animation for Current Section
        gsap.timeline({
          scrollTrigger: {
            trigger: parallaxSceneEl.querySelector(".parallax-scene"),
            start: "top center",
            end: "bottom+=1700 top",
            scrub: 1,
          },
        })
          .fromTo(parallaxSceneEl.querySelector(".sky"), { y: 0 }, { y: -200, duration: 2 }, 0)
          .fromTo(parallaxSceneEl.querySelector(".darkrift"), { y: 100 }, { y: -300, duration: 2 }, 0);
    
        // GSAP Animation for New Section
        gsap.timeline({
          scrollTrigger: {
            trigger: parallaxSceneEl.querySelector(".new-section"),
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
          .fromTo(parallaxSceneEl.querySelector(".cloud-reverse"), { y: -200 }, { y: 200, duration: 2 }, 0)
          .fromTo(parallaxSceneEl.querySelector(".new-text"), { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
      },
    };
    </script>

    <style>
    .parallax-wrapper {
      position: relative;
      width: 100%;
      height: 200vh; /* Adjusted for additional section */
      overflow: hidden;
    }
    
    .parallax-scene {
      position: relative;
      z-index: 1;
    }
    
    .new-section {
      background: #ffffff;
      position: relative;
    }
    
    .cloud-reverse {
      mix-blend-mode: screen;
      opacity: 0.8;
    }
    
    .new-text {
      font-weight: 700;
      font-size: 6vw;
      fill: #111b29;
      text-transform: uppercase;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
</style>