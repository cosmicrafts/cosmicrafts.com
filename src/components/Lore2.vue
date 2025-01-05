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
        <div class="line-wrapper">
          <video
            class="parallax-video video-1"
            :src="darkRift"
            autoplay
            loop
            muted
            playsinline
          ></video>
          <span class="line line-1">Amidst the cosmic chaos</span>
        </div>
        <div class="line-wrapper">
          <video
            class="parallax-video video-2"
            :src="dude"
            autoplay
            loop
            muted
            playsinline
          ></video>
          <span class="line line-2">the remnants of ancient civilizations</span>
        </div>
        <div class="line-wrapper">
          <video
            class="parallax-video video-3"
            :src="battle"
            autoplay
            loop
            muted
            playsinline
          ></video>
          <span class="line line-3">as the Metaverse collapses</span>
        </div>
        <div class="line-wrapper">
          <video
            class="parallax-video video-4"
            :src="darkRift"
            autoplay
            loop
            muted
            playsinline
          ></video>
          <span class="line line-4">clash in a desperate struggle for supremacy.</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import darkRift from "@/assets/webm/darkrift.webm";
import dude from "@/assets/webm/output.webm";
import battle from "@/assets/webm/output2.webm";

export default {
  name: "ParallaxScene",
  data() {
    return {
      darkRift,
      dude,
      battle
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // Background Animation
    gsap.to(".background-layer", {
      y: -900,
      scale: 1,
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

    // Independent Animations for Each Line and Video
    const lines = document.querySelectorAll(".line");
    const videos = document.querySelectorAll(".parallax-video");

    lines.forEach((line, index) => {
      const video = videos[index];

      // Animate text
      gsap.fromTo(
        line,
        {
          y: 100 + index * 50, // Staggered starting positions for lines
          opacity: 0.5,
          scale: 0.8, // Slight zoom effect
          rotation: -10 + index * 2, // Varying rotation for dynamic effect
        },
        {
          y: 0,
          opacity: 1,
          scale: 1.2,
          rotation: 0,
          scrollTrigger: {
            trigger: line,
            start: "top 100%",
            end: "bottom 10%",
            scrub: 1.5,
            id: `line-${index + 1}`,
          },
        }
      );

      // Animate video
      gsap.fromTo(
        video,
        {
          y: 0 + index * 10, // Videos start lower than their text
          opacity: 0.5,
          scale: 0.25,
          rotation: -12 + index * 2.5,
        },
        {
          y: 150, // Moves in sync with the text
          opacity: 1,
          scale: 1,
          rotation: 0,
          scrollTrigger: {
            trigger: video, // Trigger for individual videos
            start: "top 80%",
            end: "bottom 20%",
            scrub: 3,
            id: `video-${index + 1}`,
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
  height: 400vh; /* Large scrollable height */
  background: linear-gradient(
    to bottom,
    #ffffff,
    #ffffff,
    #ffffffb8,
    #f0f0f000
  );
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
  gap: 6rem;
  position: relative;
}

.line-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.line {
  font-size: 4vw;
  text-transform: uppercase;
  font-weight: 800;
  color: transparent; /* Text color will be replaced by gradient */
  background: linear-gradient(45deg, #ff004c, #7a00ff, #00ffe0); /* Gradient colors */
  -webkit-background-clip: text; /* Clip gradient to text */
  background-clip: text; /* Standard */
  mix-blend-mode: luminosity; /* Blends with background */
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 0, 76, 0.5); /* Glow effect */
  opacity: 0; /* For animation visibility */
  will-change: transform, opacity;
  z-index: 10;
}


.parallax-video {
  width: 60%;
  mix-blend-mode: add;
  height: auto;
  opacity: 0; /* Start fully invisible */
  transform: scale(2.5); /* Start smaller */
  will-change: transform, opacity;
  z-index: 5;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7); /* Shadow around videos */
  filter: brightness(1.2) saturate(1.5); /* Brighten and boost colors */
  border-radius: 32px; /* Rounded corners */
  transition: all 1s ease;
}

.line:hover {
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.5); /* Stronger glow */

}

.parallax-video:hover {
  filter: brightness(1.5) saturate(2); /* Enhance brightness */
  transition: all .4s ease; /* Smooth transition */
}



@media (max-width: 1200px) {
  .line {
    font-size: 5vw;
  }
  .parallax-video {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .line {
    font-size: 6vw;
  }
  .parallax-video {
    width: 100%;
  }
}
</style>
