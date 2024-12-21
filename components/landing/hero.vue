<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Video Slider -->
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
        <!-- Video -->
        <video
          :src="video.src"
          class="absolute top-0 left-0 w-full h-full object-cover"
          autoplay
          muted
          loop
        ></video>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>

        <!-- Text Content -->
        <div
          v-if="currentIndex === index"
          class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
        >
          <h1 class="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
            {{ video.text }}
          </h1>
          <p class="text-lg md:text-xl font-medium animate-fade-in delay-200">
            {{ video.subText }}
          </p>

          <!-- Buttons -->
          <div class="mt-6 space-x-4 animate-fade-in delay-400">
            <button
              class="px-6 py-3 bg-green-500 hover:bg-transparent text-white font-semibold rounded-lg transition-colors duration-300"
              @click="navigateTo('services')"
            >
              Services
            </button>
            <button
              class="px-6 py-3 bg-orange-400 hover:bg-transparent text-white font-semibold rounded-lg transition-colors duration-300"
              @click="navigateTo('about-us')"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      @click="onPrev"
      class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:transform hover:-translate-x-2 transition-all duration-300 z-10"
      aria-label="Previous"
    >
      ←
      <span
        class="absolute inset-y-0 left-0 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"
      ></span>
    </button>

    <button
      @click="onNext"
      class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:transform hover:translate-x-2 transition-all duration-300 z-10"
      aria-label="Next"
    >
      →
      <span
        class="absolute inset-y-0 right-0 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"
      ></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

// Array to define the videos and their respective text content
const videos = [
  {
    src: "/videos/green.mp4", // Local video path
    text: "Welcome to The Play Group!", // Main heading
    subText: "Learn. Play. Grow.", // Subheading
  },
  {
    src: "/videos/blue.mp4", // Local video path
    text: "Redefined African Mobile Solutions!", // Main heading
    subText: "Where imagination meets reality.", // Subheading
  },
  {
    src: "/videos/orange.mp4", // Local video path
    text: "Fostering Innovation!", // Main heading
    subText: "Let's explore and create together.", // Subheading
  },
];

const currentIndex = ref(0);

// Style for the carousel sliding effect
const carouselStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));

// Navigate to the previous slide
function onPrev() {
  currentIndex.value = (currentIndex.value - 1 + videos.length) % videos.length;
}

// Navigate to the next slide
function onNext() {
  currentIndex.value = (currentIndex.value + 1) % videos.length;
}

// Navigation functionality for buttons
function navigateTo(section: string) {
  if (section === "services") {
    // Navigate to services section
    window.location.href = "/services";
  } else if (section === "about-us") {
    // Navigate to about us section
    window.location.href = "/about-us";
  }
}

// Autoplay functionality
let autoplayInterval: number | null = null;

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    onNext();
  }, 15000); // Change slides every 15 seconds
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}

// Start autoplay on component mount
onMounted(() => {
  startAutoplay();
});
</script>

<style scoped>
/* Tailwind Animations */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease forwards;
}

.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}

.animate-fade-in.delay-400 {
  animation-delay: 0.4s;
}
</style>
