<template>
  <div class="parallax-wrapper">
    <!-- Parallax Background -->
    <div class="background-layer"></div>

    <!-- Section with White Stripe -->
    <div class="white-layer">
      <svg
        viewBox="0 0 1200 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <polygon points="0,0 1200,0 1200,100 0,50" fill="white" />
      </svg>
    </div>

    <!-- Main Content -->
    <div class="content">
      <div class="parallax-text">
        <span class="line line-1">Amidst the cosmic chaos</span>
        <span class="line line-2">the remnants of ancient civilizations</span>
        <span class="line line-3">as the Metaverse collapses</span>
        <span class="line line-4">clash in a desperate struggle for supremacy.</span>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: "ParallaxScene",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // Background Animation
    gsap.to(".background-layer", {
      
      y: -900,
      scale: 1 ,
      scrollTrigger: {
        trigger: ".parallax-wrapper",
        start: "top 100%",
        end: "top 10%",
        scrub: true,
      },
    });

    // White Stripe Animation
    gsap.fromTo(
      ".white-layer svg",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".white-layer",
          start: "top 100%",
          end: "top 80%",
          scrub: true,
        },
      }
    );

    // Independent Animations for Each Line
    const lines = document.querySelectorAll(".line");

    lines.forEach((line, index) => {
      gsap.fromTo(
        line,
        {
          y: 100 + index * 50, // Staggered starting positions
          opacity: .5,
          scale: .25, // Slight zoom-in effect
          rotation: -10 + index * 1, // Each line has a slightly different rotation
        },
        {
          y: 0,
          opacity: 1,
          scale: 1.1,
          rotation: 0, // Reset rotation
          scrollTrigger: {
            trigger: line,
            start: `top 100%`, // Starts when the line enters viewport
            end: `bottom 10%`, // Ends when the line is mid-viewport
            scrub: 3,
            id: `line-${index + 1}`, // Unique identifier for debugging
          },
        }
      );
    });
  },
};
</script>

<style scoped>
/* Main Wrapper Styling */
.parallax-wrapper {
  position: relative;
  width: 100%;
  height: 200vh; /* Large scrollable height */
  background: linear-gradient(
    to bottom,
    #ffffff,
    #ffffff,
    #ffffffb8,

    #f0f0f000
  ); /* Background gradient */
  overflow: hidden;
  z-index: 10;
}

/* Parallax Background */
.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}


/* White Stripe */
.white-layer {
  position: relative;
  width: 100%;
}

.white-layer svg {
  display: block;
}

/* Content Styling */
.content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 5rem 1rem;
}

.parallax-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}

.line {
  position: relative;
  bottom: 22rem;
  font-size: 4vw;
  font-weight: 800;
  color: #000000;
  opacity: 0; /* Start fully invisible */
  will-change: transform, opacity;
  z-index: 10;
}

@media (max-width: 1200px) {
  .line {
    bottom: 12rem;
  }
}


@media (max-width: 768px) {
  .line {
    bottom: 8rem;
    font-size: 6vw;
  }
}
</style>