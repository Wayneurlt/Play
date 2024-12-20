<template>
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-xl font-medium text-gray-900">
            Numbers that highlight our journey at The Play Group
          </h2>
        </div>
  
        <dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:mt-8">
          <!-- Years of Experience -->
          <div class="flex flex-col px-4 py-8 text-center border-l border-gray-200 first:border-none">
            <dt class="order-last text-lg font-medium text-gray-500">Years of Experience</dt>
            <dd class="text-4xl font-semibold text-black md:text-5xl">
              {{ yearsExperience }}<span class="text-orange-400">+</span>
            </dd>
          </div>
  
          <!-- Countries Served -->
          <div class="flex flex-col px-4 py-8 text-center border-l border-gray-200">
            <dt class="order-last text-lg font-medium text-gray-500">Countries Served</dt>
            <dd class="text-4xl font-semibold text-black md:text-5xl">
              {{ countriesServed }}<span class="text-orange-400">+</span>
            </dd>
          </div>
  
          <!-- Mobile Solutions -->
          <div class="flex flex-col px-4 py-8 text-center border-l border-gray-200">
            <dt class="order-last text-lg font-medium text-gray-500">Mobile Solutions</dt>
            <dd class="text-4xl font-semibold text-black md:text-5xl">
              {{ mobileSolutions }}<span class="text-orange-400">+</span>
            </dd>
          </div>
  
          <!-- Strategic Partnerships -->
          <div class="flex flex-col px-4 py-8 text-center border-l border-gray-200">
            <dt class="order-last text-lg font-medium text-gray-500">Strategic Partnerships</dt>
            <dd class="text-4xl font-semibold text-black md:text-5xl">
              {{ strategicPartnerships }}<span class="text-orange-400">+</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        yearsExperience: 0,
        countriesServed: 0,
        mobileSolutions: 0,
        strategicPartnerships: 0,
      };
    },
    mounted() {
      // Start counting for each metric
      this.animateCountUp("yearsExperience", 14);
      this.animateCountUp("countriesServed", 20);
      this.animateCountUp("mobileSolutions", 10);
      this.animateCountUp("strategicPartnerships", 15);
    },
    methods: {
      animateCountUp(key, target) {
        let count = 0;
        const interval = setInterval(() => {
          if (count < target) {
            count++;
            this[key] = count;
          } else {
            clearInterval(interval);
          }
        }, 100); // Adjust speed of counting
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling changes */
  dl {
    display: grid;
  }
  
  .border-l:first-of-type {
    border-left: none; /* Remove border on the first column */
  }
  
  .text-blue-600 {
    font-family: "Inter", sans-serif; /* Change font to thinner and cleaner style */
    font-weight: 600; /* Semi-bold weight */
  }
  </style>
  