<template>
  <div class="lore-section">
    <!-- Initial Plot Section -->
    <div ref="videoContainer" class="intro">
      <video
        ref="videoRef"
        class="background-video"
        src="/src/assets/video/darkrift.mp4"
        muted
        playsinline
      ></video>
      <div class="intro-content">
        <h1>The Dark Rift</h1>
        <p>
          A new hope for life has emerged as the metaverse collapses into the Dark Rift.
          In the midst of this cosmic chaos, the remnants of ancient civilizations and
          forms of life continue their struggle for supremacy.
        </p>
        <button @click="scrollToNext">Learn More</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const videoRef = ref(null);
const videoContainer = ref(null);

const handleScroll = () => {
  const videoElement = videoRef.value;
  const containerElement = videoContainer.value;

  if (!videoElement || !containerElement) return;

  const { top, height } = containerElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate scroll progress through the container
  let scrollProgress = Math.max(0, Math.min(1, (windowHeight - top) / (windowHeight + height)));

  // Map scroll progress to the video's playback time, only if metadata is loaded
  if (videoElement.duration) {
    videoElement.currentTime = scrollProgress * videoElement.duration;
  }
};

const scrollToNext = () => {
  // Implement scrolling to the next section if needed
  console.log("Scrolling to the next section...");
};

onMounted(() => {
  const videoElement = videoRef.value;

  // Ensure metadata is loaded before using the video duration
  videoElement.addEventListener("loadedmetadata", () => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load to ensure it's in the correct state
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.lore-section {
  position: relative;
  overflow: hidden;
  color: white;
}

.intro {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.8), rgba(25, 24, 24, 0.9));
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.intro-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
}

.intro button {
  margin-top: 2rem;
  background-color: #4a90e2;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
}

.intro button:hover {
  background-color: #3a7bd5;
}
</style>
