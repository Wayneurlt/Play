import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0, a as _imports_0$2 } from './navbar-HyEzeWua.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-DLbGFuYH.mjs';
import 'vue-router';
import '@prisma/client';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import 'notivue';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    const videos = [
      {
        src: "/videos/green.mp4",
        // Local video path
        text: "Welcome to Our Play Group!",
        // Main heading
        subText: "Learn. Play. Grow."
        // Subheading
      },
      {
        src: "/videos/blue.mp4",
        // Local video path
        text: "Redefined African Mobile Solutions!",
        // Main heading
        subText: "Where imagination meets reality."
        // Subheading
      },
      {
        src: "/videos/orange.mp4",
        // Local video path
        text: "Fostering Innovation!",
        // Main heading
        subText: "Let's explore and create together."
        // Subheading
      }
    ];
    const currentIndex = ref(0);
    const carouselStyle = computed(() => ({
      transform: `translateX(-${currentIndex.value * 100}%)`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-screen overflow-hidden" }, _attrs))} data-v-2640ade4><div class="relative flex w-full h-full transition-transform duration-[2100ms] ease-in-out" style="${ssrRenderStyle(carouselStyle.value)}" data-v-2640ade4><!--[-->`);
      ssrRenderList(videos, (video, index2) => {
        _push(`<div class="relative w-full h-full flex-none" data-v-2640ade4><video${ssrRenderAttr("src", video.src)} class="absolute top-0 left-0 w-full h-full object-cover" autoplay muted loop data-v-2640ade4></video><div class="absolute inset-0 bg-black bg-opacity-50" data-v-2640ade4></div>`);
        if (currentIndex.value === index2) {
          _push(`<div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4" data-v-2640ade4><h1 class="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in" data-v-2640ade4>${ssrInterpolate(video.text)}</h1><p class="text-lg md:text-xl font-medium animate-fade-in delay-200" data-v-2640ade4>${ssrInterpolate(video.subText)}</p><div class="mt-6 space-x-4 animate-fade-in delay-400" data-v-2640ade4><button class="px-6 py-3 bg-green-500 hover:bg-transparent text-white font-semibold rounded-lg transition-colors duration-300" data-v-2640ade4> Services </button><button class="px-6 py-3 bg-orange-400 hover:bg-transparent text-white font-semibold rounded-lg transition-colors duration-300" data-v-2640ade4> About Us </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:transform hover:-translate-x-2 transition-all duration-300 z-10" aria-label="Previous" data-v-2640ade4> \u2190 <span class="absolute inset-y-0 left-0 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300" data-v-2640ade4></span></button><button class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:transform hover:translate-x-2 transition-all duration-300 z-10" aria-label="Next" data-v-2640ade4> \u2192 <span class="absolute inset-y-0 right-0 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300" data-v-2640ade4></span></button></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/hero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2640ade4"]]);
const _imports_0$1 = "" + buildAssetsURL("boost.BMUzlp5y.jpg");
const _imports_1$1 = "" + buildAssetsURL("telco.B48VTdtA.jpg");
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-green-100" }, _attrs))}><div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"><div class="font-light text-black sm:text-lg"><h2 class="mb-4 text-4xl tracking-tight font-semibold text-black font-sans"> Transforming Mobile Experiences <span class="text-orange-400">Across Africa</span></h2><p class="mb-4"> At The Play Group, we are pioneers in mobile content, innovators in digital solutions, and passionate advocates for transformative engagement. Our journey spans over a decade, delivering cutting-edge mobile entertainment, health solutions, gaming, and startup incubation services. </p><p> We collaborate with partners across the globe to redefine digital engagement, providing unique solutions that entertain, inform, and empower millions across Africa and beyond. </p></div><div class="grid grid-cols-2 gap-4 mt-8"><img class="w-full h-auto lg:h-72 rounded-lg"${ssrRenderAttr("src", _imports_0$1)} alt="Placeholder for The Play Group image 1"><img class="mt-4 w-full h-auto lg:mt-10 lg:h-72 rounded-lg"${ssrRenderAttr("src", _imports_1$1)} alt="Placeholder for The Play Group image 2"></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/about.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  data() {
    return {
      yearsExperience: 0,
      countriesServed: 0,
      mobileSolutions: 0,
      strategicPartnerships: 0
    };
  },
  mounted() {
    this.animateCountUp("yearsExperience", 14);
    this.animateCountUp("countriesServed", 20);
    this.animateCountUp("mobileSolutions", 10);
    this.animateCountUp("strategicPartnerships", 15);
  },
  methods: {
    animateCountUp(key, target) {
      setInterval();
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10 bg-white sm:py-16 lg:py-24" }, _attrs))} data-v-901b97af><div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" data-v-901b97af><div class="text-center" data-v-901b97af><h2 class="text-xl font-medium text-gray-900" data-v-901b97af> Numbers that highlight our journey at The Play Group </h2></div><dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:mt-8" data-v-901b97af><div class="flex flex-col px-4 py-8 text-center border-l border-gray-200 first:border-none" data-v-901b97af><dt class="order-last text-lg font-medium text-gray-500" data-v-901b97af>Years of Experience</dt><dd class="text-4xl font-semibold text-black md:text-5xl" data-v-901b97af>${ssrInterpolate($data.yearsExperience)}<span class="text-orange-400" data-v-901b97af>+</span></dd></div><div class="flex flex-col px-4 py-8 text-center border-l border-gray-200" data-v-901b97af><dt class="order-last text-lg font-medium text-gray-500" data-v-901b97af>Countries Served</dt><dd class="text-4xl font-semibold text-black md:text-5xl" data-v-901b97af>${ssrInterpolate($data.countriesServed)}<span class="text-orange-400" data-v-901b97af>+</span></dd></div><div class="flex flex-col px-4 py-8 text-center border-l border-gray-200" data-v-901b97af><dt class="order-last text-lg font-medium text-gray-500" data-v-901b97af>Mobile Solutions</dt><dd class="text-4xl font-semibold text-black md:text-5xl" data-v-901b97af>${ssrInterpolate($data.mobileSolutions)}<span class="text-orange-400" data-v-901b97af>+</span></dd></div><div class="flex flex-col px-4 py-8 text-center border-l border-gray-200" data-v-901b97af><dt class="order-last text-lg font-medium text-gray-500" data-v-901b97af>Strategic Partnerships</dt><dd class="text-4xl font-semibold text-black md:text-5xl" data-v-901b97af>${ssrInterpolate($data.strategicPartnerships)}<span class="text-orange-400" data-v-901b97af>+</span></dd></div></dl></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/stats.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-901b97af"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full px-6 py-12 mx-auto lg:py-16 bg-blue-100" }, _attrs))}><h3 class="font-serif text-3xl text-black capitalize md:text-4xl lg:text-5xl text-center"> Explore Our Dynamic Offerings </h3><p class="text-center text-gray-600 mb-4"> Delve into our diverse range of mobile-centric services, each crafted to elevate engagement, entertain, and inform your global audience. </p><div class="mt-8 xl:flex xl:justify-center xl:gap-8"><div class="xl:w-1/2"><img class="object-cover w-full h-96" src="https://via.placeholder.com/800x450" alt="Mobile Infotainment Services"><h2 class="mt-6 font-serif text-3xl font-medium text-black"> Mobile Infotainment Services </h2><p class="mt-2 text-gray-600"> Stay informed and entertained on the go with our curated mix of news and lifestyle content. </p><p class="mt-4 italic text-orange-400">Explore M-Info Today!</p></div><div class="mt-8 space-y-8 xl:w-1/2 xl:mt-0"><div class="md:flex md:items-center"><img class="object-cover w-full h-56 md:h-48 md:w-80 shrink-0" src="https://via.placeholder.com/800x450" alt="Mobile Gaming Solutions"><div class="mt-6 md:ml-4"><h2 class="font-serif text-2xl font-medium text-black"> Mobile Gaming Solutions </h2><p class="mt-2 text-gray-600"> Experience thrilling adventures and entertainment through our immersive games. </p><p class="mt-4 italic text-orange-400"> Join the Fun with M-Gaming! </p></div></div><div class="md:flex md:items-center"><img class="object-cover w-full h-56 md:h-48 md:w-80 shrink-0" src="https://via.placeholder.com/800x450" alt="SMS Aggregation Services"><div class="mt-6 md:ml-4"><h2 class="font-serif text-2xl font-medium text-black"> SMS Aggregation Services </h2><p class="mt-2 text-gray-600"> Effortlessly streamline communication and engagement with our SMS Connect platform. </p><p class="mt-4 italic text-orange-400"> Enhance Communication Today! </p></div></div><div class="md:flex md:items-center"><img class="object-cover w-full h-56 md:h-48 md:w-80 shrink-0" src="https://via.placeholder.com/800x450" alt="Mobile Entertainment Services"><div class="mt-6 md:ml-4"><h2 class="font-serif text-2xl font-medium text-black"> Mobile Entertainment Services </h2><p class="mt-2 text-gray-600"> Dive into a world of multimedia delight with our music and video offerings. </p><p class="mt-4 italic text-orange-400">Enjoy Triple Play Now!</p></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/feature.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0 = "" + buildAssetsURL("zurr.Ds45lEP1.png");
const _imports_1 = "" + buildAssetsURL("date.Cfgc4wsF.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-12 bg-white" }, _attrs))}><article class="group text-center flex items-center justify-center"><div class="p-4"><h1 class="text-2xl md:text-4xl font-medium text-gray-900 dark:text-black"> Fostering Innovation: <span class="text-orange-400">Our Startup Portfolio</span></h1><p class="mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400"> Explore our curated collection of pioneering startups, each a testament to our commitment to fostering innovation and shaping the future of technology-driven solutions. </p></div></article><article class="group relative overflow-hidden"><img alt="Startup Portfolio"${ssrRenderAttr("src", _imports_0)} class="h-96 w-full rounded-xl object-cover shadow-xl transition-transform duration-[2000ms] ease-in-out transform group-hover:scale-105 dark:shadow-gray-700/25"><div class="p-4"><a href="https://zuri.health/"><h3 class="text-lg font-medium text-gray-900 dark:text-orange-400"> Play Zuri health </h3></a><p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400"> The Playgroup is a forward-thinking startup focused on fostering innovation and collaboration in various sectors. From tech solutions to community-driven projects, their portfolio showcases the dedication to growth and positive impact. </p></div></article><article class="group relative overflow-hidden"><img alt="Startup Portfolio"${ssrRenderAttr("src", _imports_1)} class="h-96 w-full rounded-xl object-cover shadow-xl transition-transform duration-[2000ms] ease-in-out transform group-hover:scale-105 dark:shadow-gray-700/25"><div class="p-4"><a href="https://theplaygroup.net/"><h3 class="text-lg font-medium text-gray-900 dark:text-orange-400"> The PlayDate </h3></a><p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400"> Explore how The Playgroup blends creativity with technology to launch impactful ventures that aim to make a difference in business and community spaces. </p></div></article><article class="group relative overflow-hidden"><img alt="Startup Portfolio" src="https://via.placeholder.com/800x450" class="h-96 w-full rounded-xl object-cover shadow-xl transition-transform duration-[2000ms] ease-in-out transform group-hover:scale-105 dark:shadow-gray-700/25"><div class="p-4"><a href="https://byzara.life/"><h3 class="text-lg font-medium text-gray-900 dark:text-orange-400"> ByZara </h3></a><p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400"> The Playgroup is a forward-thinking startup focused on fostering innovation and collaboration in various sectors. From tech solutions to community-driven projects, their portfolio showcases the dedication to growth and positive impact. </p></div></article></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/startup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-900" }, _attrs))}><div class="container px-4 py-10 lg:py-16 mx-auto lg:flex lg:items-center lg:justify-between"><h2 class="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white"> Join us and get the update from anywhere </h2><div class="mt-8 lg:mt-0"><div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2"><input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address"><button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-700 rounded-md focus:ring fo sm:mx-2 hover:bg-orange-300 focus:outline-none focus:bg-sky-400"> Get Started </button></div><p class="mt-3 text-sm text-gray-500 dark:text-gray-300">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</p></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/cta.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "text-gray-600 body-font bg-orange-400 relative" }, _attrs))}><div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"><a href="/" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 relative z-10"><img${ssrRenderAttr("src", _imports_0$2)} alt="The Play Group Logo" class="w-16 h-16 rounded-full object-contain"></a><p class="text-sm text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4 relative z-10"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} The Play Group \u2014 <a href="#" class="text-green-600 ml-1" rel="noopener noreferrer" target="_blank">All rights reserved</a></p><span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start relative z-10"><a class="text-gray-600 hover:text-green-700" href="https://facebook.com" target="_blank" rel="noopener"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a><a class="ml-3 text-gray-600 hover:text-green-700" href="https://twitter.com" target="_blank" rel="noopener"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a><a class="ml-3 text-gray-600 hover:text-green-700" href="https://instagram.com" target="_blank" rel="noopener"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a><a class="ml-3 text-gray-600 hover:text-green-700" href="https://linkedin.com" target="_blank" rel="noopener"><svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"><path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" stroke="none"></circle></svg></a></span></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/foot.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingNavbar = __nuxt_component_0;
  const _component_LandingHero = __nuxt_component_1;
  const _component_LandingAbout = __nuxt_component_2;
  const _component_LandingStats = __nuxt_component_3;
  const _component_LandingFeature = __nuxt_component_4;
  const _component_LandingStartup = __nuxt_component_5;
  const _component_LandingCta = __nuxt_component_6;
  const _component_LandingFoot = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingHero, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingStats, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingFeature, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingStartup, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingCta, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingFoot, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-OBhsFaEY.mjs.map
