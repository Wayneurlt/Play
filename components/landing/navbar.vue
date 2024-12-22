<template>
  <nav
    :class="[ 
      'px-8 py-2 xl:py-3 fixed top-0 w-full z-[1000]',
      {
        'dark:bg-white bg-satinlinen': isScrolled,
        'bg-transparent': !isScrolled,
      },
    ]"
  >
    <div class="flex justify-between w-full items-center">
      <!-- Logo with Conditional Rendering -->
      <NuxtLink to="/" class="flex items-center">
        <ClientOnly>
          <img
            v-if="!isScrolled"
            class="h-12 lg:h-24 xl:h-18 2xl:h-21 w-auto"
            src="/assets/images/2w.png"
            alt="The Playgroup Logo"
          />
          <img
            v-else
            class="h-12 lg:h-24 xl:h-18 2xl:h-21 w-auto"
            src="/assets/images/1b.png"
            alt="The Playgroup Logo (Scrolled)"
          />
        </ClientOnly>
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden p-2 text-white bg-black rounded-md"
        @click="toggleMobileMenu"
        aria-label="Toggle Mobile Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
          />
        </svg>
      </button>

      <!-- Navigation Links -->
      <div
        :class="[
          'lg:flex items-center gap-5',
          mobileMenuOpen ? 'block absolute top-full left-0 w-full bg-white z-[999] p-4 shadow-lg' : 'hidden lg:block'
        ]"
      >
        <NuxtLink
          to="/about"
          :class="[ 
            'relative font-semibold text-base transition-colors block lg:inline',
            mobileMenuOpen ? 'text-black' : isScrolled ? 'text-black' : 'text-white'
          ]"
          @click="closeMobileMenu"
        >
          ABOUT
          <span
            class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/services"
          :class="[ 
            'relative font-semibold text-base transition-colors block lg:inline',
            mobileMenuOpen ? 'text-black' : isScrolled ? 'text-black' : 'text-white'
          ]"
          @click="closeMobileMenu"
        >
          SERVICES
          <span
            class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/blog"
          :class="[ 
            'relative font-semibold text-base transition-colors block lg:inline',
            mobileMenuOpen ? 'text-black' : isScrolled ? 'text-black' : 'text-white'
          ]"
          @click="closeMobileMenu"
        >
          BLOG
          <span
            class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          :class="[ 
            'relative font-semibold text-base transition-colors block lg:inline',
            mobileMenuOpen ? 'text-black' : isScrolled ? 'text-black' : 'text-white'
          ]"
          @click="closeMobileMenu"
        >
          CONTACT US
          <span
            class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300"
          ></span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

let isScrolled = ref(false);
let mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 0;
  });
});

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<style scoped>
/* Hover Effect */
a:hover span {
  width: 100%; /* Make the line span full width on hover */
}

/* Mobile Menu */
@media (max-width: 1024px) {
  nav div {
    position: relative;
  }

  /* Ensure proper spacing for mobile links */
  nav div a {
    padding: 0.5rem 0;
  }
}
</style>
