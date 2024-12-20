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
    <div class="flex justify-between w-full place-items-center">
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

      <div class="flex items-center gap-5">
        <!-- Dynamic Text Color with Hover Line -->
        <NuxtLink
          to="/about"
          :class="[ 
            'relative font-semibold text-base transition-colors',
            { 'text-black': isScrolled, 'text-white': !isScrolled }
          ]"
        >
          ABOUT
          <span
            class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/programs"
          :class="[ 
            'relative font-semibold text-base transition-colors',
            { 'text-black': isScrolled, 'text-white': !isScrolled }
          ]"
        >
          SERVICES
          <span
            class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/admissions"
          :class="[ 
            'relative font-semibold text-base transition-colors',
            { 'text-black': isScrolled, 'text-white': !isScrolled }
          ]"
        >
          BLOG
          <span
            class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          :class="[ 
            'relative font-semibold text-base transition-colors',
            { 'text-black': isScrolled, 'text-white': !isScrolled }
          ]"
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
</style>
