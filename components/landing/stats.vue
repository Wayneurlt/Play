<template>
  <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center" data-aos="zoom-in" data-aos-duration="1000">
        <h2 class="text-xl font-medium text-gray-900">
          Numbers that highlight our journey at The Play Group
        </h2>
      </div>

      <dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:mt-8">
        <!-- Years of Experience -->
        <div 
          class="flex flex-col px-4 py-8 text-center border-l border-gray-200 first:border-none"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <dt class="order-last text-lg font-medium text-gray-500">Years of Experience</dt>
          <dd class="text-4xl font-semibold text-black md:text-5xl">
            {{ yearsExperience }}<span class="text-orange-400">+</span>
          </dd>
        </div>

        <!-- Countries Served -->
        <div 
          class="flex flex-col px-4 py-8 text-center border-l border-gray-200"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <dt class="order-last text-lg font-medium text-gray-500">Countries Served</dt>
          <dd class="text-4xl font-semibold text-black md:text-5xl">
            {{ countriesServed }}<span class="text-orange-400">+</span>
          </dd>
        </div>

        <!-- Mobile Solutions -->
        <div 
          class="flex flex-col px-4 py-8 text-center border-l border-gray-200"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <dt class="order-last text-lg font-medium text-gray-500">Mobile Solutions</dt>
          <dd class="text-4xl font-semibold text-black md:text-5xl">
            {{ mobileSolutions }}<span class="text-orange-400">+</span>
          </dd>
        </div>

        <!-- Strategic Partnerships -->
        <div 
          class="flex flex-col px-4 py-8 text-center border-l border-gray-200"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <dt class="order-last text-lg font-medium text-gray-500">Strategic Partnerships</dt>
          <dd class="text-4xl font-semibold text-black md:text-5xl">
            {{ strategicPartnerships }}<span class="text-orange-400">+</span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const yearsExperience = ref(0)
const countriesServed = ref(0)
const mobileSolutions = ref(0)
const strategicPartnerships = ref(0)

const animateCountUp = (target, finalValue) => {
  let count = 0
  const interval = setInterval(() => {
    if (count < finalValue) {
      count++
      target.value = count
    } else {
      clearInterval(interval)
    }
  }, 100)
}

onMounted(() => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  })

  // Start counting animations
  animateCountUp(yearsExperience, 14)
  animateCountUp(countriesServed, 20)
  animateCountUp(mobileSolutions, 10)
  animateCountUp(strategicPartnerships, 15)
})
</script>

<style scoped>
dl {
  display: grid;
}

.border-l:first-of-type {
  border-left: none;
}

.text-blue-600 {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}
</style>