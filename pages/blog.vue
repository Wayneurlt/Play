<template>
  <LandingNavbar />
  <LandingBg/>
  <section class="py-12 bg-transparent sm:py-16 lg:py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-md mx-auto text-center">
        <h2 class="text-3xl font-bold text-white sm:text-4xl font-pj">
          Explore Insights with The Playgroup
        </h2>
        <p class="mt-5 font-normal text-gray-400 font-pj">
          Discover articles and stories that highlight innovation, collaboration, and impactful solutions driving our mission forward.
        </p>
      </div>

      <div class="grid max-w-5xl grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-3 gap-y-8 gap-x-8 lg:gap-x-12">
        <div class="relative group">
          <div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
            <img
              class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder Image 1"
            />
          </div>
          <p class="mt-6 text-sm font-normal text-gray-400 font-pj">November 22, 2021</p>
          <p class="mt-4 text-xl font-bold text-white font-pj">
            How To Optimize Progressive Web Apps: Going Beyond The Basics
          </p>
          <a href="#" title="Read more">
            <span class="absolute inset-0" aria-hidden="true"></span>
          </a>
        </div>

        <div class="relative group">
          <div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
            <img
              class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder Image 2"
            />
          </div>
          <p class="mt-6 text-sm font-normal text-gray-400 font-pj">November 16, 2021</p>
          <p class="mt-4 text-xl font-bold text-white font-pj">
            Creative Strategies for Startups: Lessons from The Playgroup
          </p>
          <a href="#" title="Read more">
            <span class="absolute inset-0" aria-hidden="true"></span>
          </a>
        </div>

        <div class="relative group">
          <div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
            <img
              class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder Image 3"
            />
          </div>
          <p class="mt-6 text-sm font-normal text-gray-400 font-pj">November 10, 2021</p>
          <p class="mt-4 text-xl font-bold text-white font-pj">
            Leveraging Technology for Community Impact
          </p>
          <a href="#" title="Read more">
            <span class="absolute inset-0" aria-hidden="true"></span>
          </a>
        </div>

        <div class="relative group">
          <div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
            <img
              class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder Image 4"
            />
          </div>
          <p class="mt-6 text-sm font-normal text-gray-400 font-pj">November 5, 2021</p>
          <p class="mt-4 text-xl font-bold text-white font-pj">
            Building Sustainable Startups for the Future
          </p>
          <a href="#" title="Read more">
            <span class="absolute inset-0" aria-hidden="true"></span>
          </a>
        </div>

        <div class="relative group">
          <div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
            <img
              class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder Image 5"
            />
          </div>
          <p class="mt-6 text-sm font-normal text-gray-400 font-pj">November 2, 2021</p>
          <p class="mt-4 text-xl font-bold text-white font-pj">
            Collaboration as a Catalyst for Innovation
          </p>
          <a href="#" title="Read more">
            <span class="absolute inset-0" aria-hidden="true"></span>
          </a>
        </div>

        <div class="relative group">
          <div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
            <img
              class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105"
              src="https://via.placeholder.com/300x200"
              alt="Placeholder Image 6"
            />
          </div>
          <p class="mt-6 text-sm font-normal text-gray-400 font-pj">October 28, 2021</p>
          <p class="mt-4 text-xl font-bold text-white font-pj">
            Insights into the Startup Ecosystem
          </p>
          <a href="#" title="Read more">
            <span class="absolute inset-0" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <LandingFoot />
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {};
  },
  methods: {},
};
</script>
