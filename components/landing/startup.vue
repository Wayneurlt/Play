<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-12 bg-white">
    <article 
      class="group text-center flex items-center justify-center"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div class="p-4">
        <h1 class="text-2xl md:text-4xl font-medium text-gray-900 dark:text-black">
          Fostering Innovation: <span class="text-orange-400">Our Startup Portfolio</span>
        </h1>
        <p class="mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400">
          Explore our curated collection of pioneering startups, each a
          testament to our commitment to fostering innovation and shaping the
          future of technology-driven solutions.
        </p>
      </div>
    </article>

    <!-- Portfolio Item 1 -->
    <article 
      class="group relative overflow-hidden"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <img
        alt="Startup Portfolio"
        src="/assets/images/zurr.png"
        class="h-96 w-full  object-cover shadow-xl transition-transform duration-[2000ms] ease-in-out transform group-hover:scale-105 dark:shadow-gray-700/25"
      />
      <div class="p-4">
        <a href="https://zuri.health/">
          <h3 class="text-lg font-medium text-gray-900 dark:text-orange-400">
            Play Zuri health
          </h3>
        </a>
        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          The Playgroup is a forward-thinking startup focused on fostering
          innovation and collaboration in various sectors. From tech solutions
          to community-driven projects, their portfolio showcases the dedication
          to growth and positive impact.
        </p>
      </div>
    </article>

    <!-- Portfolio Item 2 -->
    <article 
      class="group relative overflow-hidden"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <img
        alt="Startup Portfolio"
        src="/assets/images/date.png"
        class="h-96 w-full  object-cover shadow-xl transition-transform duration-[2000ms] ease-in-out transform group-hover:scale-105 dark:shadow-gray-700/25"
      />
      <div class="p-4">
        <a href="https://theplaygroup.net/">
          <h3 class="text-lg font-medium text-gray-900 dark:text-orange-400">
            The PlayDate
          </h3>
        </a>
        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          Explore how The Playgroup blends creativity with technology to launch
          impactful ventures that aim to make a difference in business and
          community spaces.
        </p>
      </div>
    </article>

    <article 
      class="group relative overflow-hidden"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <img
        alt="Startup Portfolio"
        src="https://via.placeholder.com/800x450"
        class="h-96 w-full  object-cover shadow-xl transition-transform duration-[2000ms] ease-in-out transform group-hover:scale-105 dark:shadow-gray-700/25"
      />
      <div class="p-4">
        <a href="https://byzara.life/">
          <h3 class="text-lg font-medium text-gray-900 dark:text-orange-400">
            ByZara
          </h3>
        </a>
        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          The Playgroup is a forward-thinking startup focused on fostering
          innovation and collaboration in various sectors. From tech solutions
          to community-driven projects, their portfolio showcases the dedication
          to growth and positive impact.
        </p>
      </div>
    </article>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  })
})
</script>