<template>
  <section class="w-full px-6 py-12 mx-auto lg:py-16 bg-blue-100">
    <h3
      data-aos="zoom-in"
      data-aos-duration="1000"
      class="font-serif text-3xl text-black capitalize md:text-4xl lg:text-5xl text-center"
    >
      Explore Our Dynamic Offerings
    </h3>
    <p 
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="200"
      class="text-center text-gray-600 mb-4"
    >
      Delve into our diverse range of mobile-centric services, each crafted to
      elevate engagement, entertain, and inform your global audience.
    </p>
    <div class="mt-8 xl:flex xl:justify-center xl:gap-8">
      <!-- Highlighted Service -->
      <div 
        class="xl:w-1/2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <img
          class="object-cover w-full h-96"
          src="https://via.placeholder.com/800x450"
          alt="Mobile Infotainment Services"
        />

        <h2 class="mt-6 font-serif text-3xl font-medium text-black">
          Mobile Infotainment Services
        </h2>

        <p class="mt-2 text-gray-600">
          Stay informed and entertained on the go with our curated mix of news
          and lifestyle content.
        </p>

        <p class="mt-4 italic text-orange-400">Explore M-Info Today!</p>
      </div>

      <!-- Additional Services -->
      <div class="mt-8 space-y-8 xl:w-1/2 xl:mt-0">
        <div 
          class="md:flex md:items-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <img
            class="object-cover w-full h-56 md:h-48 md:w-80 shrink-0"
            src="https://via.placeholder.com/800x450"
            alt="Mobile Gaming Solutions"
          />

          <div class="mt-6 md:ml-4">
            <h2 class="font-serif text-2xl font-medium text-black">
              Mobile Gaming Solutions
            </h2>

            <p class="mt-2 text-gray-600">
              Experience thrilling adventures and entertainment through our
              immersive games.
            </p>

            <p class="mt-4 italic text-orange-400">
              Join the Fun with M-Gaming!
            </p>
          </div>
        </div>

        <div 
          class="md:flex md:items-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <img
            class="object-cover w-full h-56 md:h-48 md:w-80 shrink-0"
            src="https://via.placeholder.com/800x450"
            alt="SMS Aggregation Services"
          />

          <div class="mt-6 md:ml-4">
            <h2 class="font-serif text-2xl font-medium text-black">
              SMS Aggregation Services
            </h2>

            <p class="mt-2 text-gray-600">
              Effortlessly streamline communication and engagement with our SMS
              Connect platform.
            </p>

            <p class="mt-4 italic text-orange-400">
              Enhance Communication Today!
            </p>
          </div>
        </div>

        <div 
          class="md:flex md:items-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <img
            class="object-cover w-full h-56 md:h-48 md:w-80 shrink-0"
            src="https://via.placeholder.com/800x450"
            alt="Mobile Entertainment Services"
          />

          <div class="mt-6 md:ml-4">
            <h2 class="font-serif text-2xl font-medium text-black">
              Mobile Entertainment Services
            </h2>

            <p class="mt-2 text-gray-600">
              Dive into a world of multimedia delight with our music and video
              offerings.
            </p>

            <p class="mt-4 italic text-orange-400">Enjoy Triple Play Now!</p>
          </div>
        </div>
      </div>
    </div>
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