<template>
  <div id="container" class="lore-section">
    <!-- Video Element -->
    <video
      class="video-background"
      src="/src/assets/video/drift.mp4"
      muted
      playsinline
    ></video>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ScrollVideo",
  setup() {
    const video = ref(null);

    onMounted(() => {
      const videoElement = video.value;

      // Make sure the video is loaded before using GSAP
      videoElement.addEventListener("loadedmetadata", () => {
        const duration = videoElement.duration;

        gsap.to(videoElement, {
          scrollTrigger: {
            trigger: ".video-container",
            start: "top center",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              videoElement.currentTime = progress * duration;
            },
          },
        });
      });
    });

    return {
      video,
    };
  },
};
</script>

<style scoped>
.lore-section {
  position: relative;
  height: 70vh; /* Scrollable space for smooth playback */
  overflow: hidden;
}

.video-background {
  position: absolute;
  object-fit: cover; /* Ensures the video scales proportionally */
}
</style>
