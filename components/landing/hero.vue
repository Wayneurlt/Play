<template>
  <div class="relative w-full h-screen overflow-hidden font-sans">
    <div
      ref="sliderRef"
      class="relative flex w-full h-full transition-transform duration-[2100ms] ease-in-out"
      :style="carouselStyle"
    >
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="relative w-full h-full flex-none"
      >
        <video
          ref="videoRefs"
          :src="video.src"
          class="absolute top-0 left-0 w-full h-full object-cover"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          :key="`video-${index}`"
          @loadeddata="handleVideoLoaded(index)"
          @error="handleVideoError(index)"
          @ended="handleVideoEnd"
          @canplay="handleCanPlay(index)"
        ></video>

        <div class="absolute inset-0 bg-black bg-opacity-50"></div>

        <div
          v-if="currentIndex === index"
          class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
        >
          <h1 class="text-4xl md:text-6xl font-light tracking-wide mb-4">
            {{ video.text }}
          </h1>
          <p class="text-lg md:text-xl font-normal tracking-wide">
            {{ video.subText }}
          </p>

          <div class="mt-6 space-x-4">
            <NuxtLink
              to="/services"
              class="px-6 py-3 bg-green-500 hover:bg-transparent text-white font-normal tracking-wide rounded-lg transition-colors duration-300 border-2 border-transparent hover:border-white"
            >
              Services
            </NuxtLink>
            <NuxtLink
              to="/about-us"
              class="px-6 py-3 bg-orange-400 hover:bg-transparent text-white font-normal tracking-wide rounded-lg transition-colors duration-300 border-2 border-transparent hover:border-white"
            >
              About Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <button
      @click="onPrev"
      class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:transform hover:-translate-x-2 transition-all duration-300 z-10 font-light"
      aria-label="Previous"
    >
      ←
    </button>

    <button
      @click="onNext"
      class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:transform hover:translate-x-2 transition-all duration-300 z-10 font-light"
      aria-label="Next"
    >
      →
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

const currentIndex = ref(0);
const videoRefs = ref<HTMLVideoElement[]>([]);
const videosLoaded = ref<boolean[]>([]);

// Import videos from assets
const greenVideo = new URL('@/assets/videos/green.mp4', import.meta.url).href;
const blueVideo = new URL('@/assets/videos/blue.mp4', import.meta.url).href;
const orangeVideo = new URL('@/assets/videos/orange.mp4', import.meta.url).href;

const videos = [
  {
    src: greenVideo,
    text: "Welcome to The Play Group!",
    subText: "Learn. Play. Grow.",
  },
  {
    src: blueVideo, 
    text: "Redefined African Mobile Solutions!",
    subText: "Where imagination meets reality.",
  },
  {
    src: orangeVideo,
    text: "Fostering Innovation!",
    subText: "Let's explore and create together.",
  },
];

// Initialize videosLoaded array
onMounted(() => {
  videosLoaded.value = new Array(videos.length).fill(false);
});

const carouselStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));

function handleVideoLoaded(index: number) {
  videosLoaded.value[index] = true;
  console.log(`Video ${index} loaded successfully`);
}

function handleVideoError(index: number) {
  console.error(`Error loading video ${index}:`, videos[index].src);
}

function handleCanPlay(index: number) {
  const video = videoRefs.value[index];
  if (video) {
    video.play().catch(error => {
      console.error('Auto-play prevented:', error);
      // Retry play on user interaction
      document.addEventListener('click', () => {
        video.play().catch(e => console.error('Retry play failed:', e));
      }, { once: true });
    });
  }
}

function handleVideoEnd(event: Event) {
  const video = event.target as HTMLVideoElement;
  if (video) {
    video.currentTime = 0;
    video.play().catch(error => {
      console.error('Replay prevented:', error);
    });
  }
}

async function playCurrentVideo() {
  await nextTick();
  const currentVideo = videoRefs.value[currentIndex.value];
  if (currentVideo) {
    try {
      currentVideo.currentTime = 0;
      await currentVideo.play();
    } catch (error) {
      console.error('Play prevented:', error);
    }
  }
}

function onPrev() {
  currentIndex.value = (currentIndex.value - 1 + videos.length) % videos.length;
  playCurrentVideo();
}

function onNext() {
  currentIndex.value = (currentIndex.value + 1) % videos.length;
  playCurrentVideo();
}

let autoplayInterval: number | null = null;

function startAutoplay() {
  if (autoplayInterval) return;
  
  autoplayInterval = window.setInterval(() => {
    onNext();
  }, 15000);
}

function stopAutoplay() {
  if (autoplayInterval) {
    window.clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}

// Handle visibility change
function handleVisibilityChange() {
  if (document.hidden) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

onMounted(() => {
  // Initialize video loading state
  videosLoaded.value = new Array(videos.length).fill(false);
  
  // Start autoplay
  startAutoplay();
  
  // Add visibility change listener
  document.addEventListener('visibilitychange', handleVisibilityChange);
  
  // Initial video loading
  nextTick(() => {
    videoRefs.value.forEach((video, index) => {
      if (video) {
        video.load(); // Explicitly load the video
        handleCanPlay(index);
      }
    });
  });
});

onUnmounted(() => {
  stopAutoplay();
  document.removeEventListener('visibilitychange', handleVisibilityChange);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

.font-sans {
  font-family: 'Inter', sans-serif;
}
</style>