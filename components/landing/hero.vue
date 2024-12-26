<template>
  <div class="relative w-full h-screen overflow-hidden font-sans">
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
          <h1 
            class="text-4xl md:text-6xl font-light tracking-wide mb-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {{ video.text }}
          </h1>
          <p 
            class="text-lg md:text-xl font-normal tracking-wide"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {{ video.subText }}
          </p>

          <!-- Buttons -->
          <div 
            class="mt-6 space-x-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <button
              class="px-6 py-3 bg-green-500 hover:bg-transparent text-white font-normal tracking-wide rounded-lg transition-colors duration-300 border-2 border-transparent hover:border-white"
              @click="navigateTo('services')"
            >
              Services
            </button>
            <button
              class="px-6 py-3 bg-orange-400 hover:bg-transparent text-white font-normal tracking-wide rounded-lg transition-colors duration-300 border-2 border-transparent hover:border-white"
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
      class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:transform hover:-translate-x-2 transition-all duration-300 z-10 font-light"
      aria-label="Previous"
    >
      ←
      <span
        class="absolute inset-y-0 left-0 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"
      ></span>
    </button>

    <button
      @click="onNext"
      class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:transform hover:translate-x-2 transition-all duration-300 z-10 font-light"
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
import { ref, computed, onMounted, onUnmounted } from "vue";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Array to define the videos and their respective text content
const videos = [
  {
    src: "/videos/green.mp4",
    text: "Welcome to The Play Group!",
    subText: "Learn. Play. Grow.",
  },
  {
    src: "/videos/blue.mp4",
    text: "Redefined African Mobile Solutions!",
    subText: "Where imagination meets reality.",
  },
  {
    src: "/videos/orange.mp4",
    text: "Fostering Innovation!",
    subText: "Let's explore and create together.",
  },
];

const currentIndex = ref(0);

const carouselStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));

function onPrev() {
  currentIndex.value = (currentIndex.value - 1 + videos.length) % videos.length;
  refreshAOS();
}

function onNext() {
  currentIndex.value = (currentIndex.value + 1) % videos.length;
  refreshAOS();
}

function navigateTo(section: string) {
  if (section === "services") {
    window.location.href = "/services";
  } else if (section === "about-us") {
    window.location.href = "/about-us";
  }
}

// Refresh AOS animations when slides change
function refreshAOS() {
  setTimeout(() => {
    AOS.refresh();
  }, 100);
}

let autoplayInterval: number | null = null;

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    onNext();
  }, 15000);
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true
  });
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style>
/* Import Inter font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

.font-sans {
  font-family: 'Inter', sans-serif;
}

/* Remove the keyframes as we're using AOS now */
</style>