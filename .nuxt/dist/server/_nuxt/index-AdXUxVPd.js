import { _ as __nuxt_component_0 } from "./navbar-DqFb8Fte.js";
import { defineComponent, ref, computed, mergeProps, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "aos";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_7 } from "./foot-BVc6Ad_t.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DLbGFuYH.js";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@prisma/client";
import "devalue";
import "@vueuse/core";
import "klona";
import "tailwind-merge";
import "@iconify/vue";
import "notivue";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    const videos = [
      {
        src: "/videos/green.mp4",
        text: "Welcome to The Play Group!",
        subText: "Learn. Play. Grow."
      },
      {
        src: "/videos/blue.mp4",
        text: "Redefined African Mobile Solutions!",
        subText: "Where imagination meets reality."
      },
      {
        src: "/videos/orange.mp4",
        text: "Fostering Innovation!",
        subText: "Let's explore and create together."
      }
    ];
    const currentIndex = ref(0);
    const carouselStyle = computed(() => ({
      transform: `translateX(-${currentIndex.value * 100}%)`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-screen overflow-hidden font-sans" }, _attrs))}><div class="relative flex w-full h-full transition-transform duration-[2100ms] ease-in-out" style="${ssrRenderStyle(carouselStyle.value)}"><!--[-->`);
      ssrRenderList(videos, (video, index2) => {
        _push(`<div class="relative w-full h-full flex-none"><video${ssrRenderAttr("src", video.src)} class="absolute top-0 left-0 w-full h-full object-cover" autoplay muted loop></video><div class="absolute inset-0 bg-black bg-opacity-50"></div>`);
        if (currentIndex.value === index2) {
          _push(`<div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"><h1 class="text-4xl md:text-6xl font-light tracking-wide mb-4" data-aos="fade-down" data-aos-duration="1000">${ssrInterpolate(video.text)}</h1><p class="text-lg md:text-xl font-normal tracking-wide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">${ssrInterpolate(video.subText)}</p><div class="mt-6 space-x-4" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400"><button class="px-6 py-3 bg-green-500 hover:bg-transparent text-white font-normal tracking-wide rounded-lg transition-colors duration-300 border-2 border-transparent hover:border-white"> Services </button><button class="px-6 py-3 bg-orange-400 hover:bg-transparent text-white font-normal tracking-wide rounded-lg transition-colors duration-300 border-2 border-transparent hover:border-white"> About Us </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:transform hover:-translate-x-2 transition-all duration-300 z-10 font-light" aria-label="Previous"> ← <span class="absolute inset-y-0 left-0 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"></span></button><button class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:transform hover:translate-x-2 transition-all duration-300 z-10 font-light" aria-label="Next"> → <span class="absolute inset-y-0 right-0 w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"></span></button></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$1 = "" + __buildAssetsURL("boost.BMUzlp5y.jpg");
const _imports_1$1 = "" + __buildAssetsURL("telco.B48VTdtA.jpg");
const _sfc_main$5 = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-green-100" }, _attrs))}><div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"><div class="font-light text-black sm:text-lg" data-aos="fade-right" data-aos-duration="1000"><h2 class="mb-4 text-4xl tracking-tight font-semibold text-black font-sans"> Transforming Mobile Experiences <span class="text-orange-400">Across Africa</span></h2><p class="mb-4"> At The Play Group, we are pioneers in mobile content, innovators in digital solutions, and passionate advocates for transformative engagement. Our journey spans over a decade, delivering cutting-edge mobile entertainment, health solutions, gaming, and startup incubation services. </p><p> We collaborate with partners across the globe to redefine digital engagement, providing unique solutions that entertain, inform, and empower millions across Africa and beyond. </p></div><div class="grid grid-cols-2 gap-4 mt-8" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300"><img class="w-full h-auto lg:h-72 rounded-lg"${ssrRenderAttr("src", _imports_0$1)} alt="Placeholder for The Play Group image 1"><img class="mt-4 w-full h-auto lg:mt-10 lg:h-72 rounded-lg"${ssrRenderAttr("src", _imports_1$1)} alt="Placeholder for The Play Group image 2"></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/about.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "stats",
  __ssrInlineRender: true,
  setup(__props) {
    const yearsExperience = ref(0);
    const countriesServed = ref(0);
    const mobileSolutions = ref(0);
    const strategicPartnerships = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10 bg-white sm:py-16 lg:py-24" }, _attrs))} data-v-2d6c69c5><div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" data-v-2d6c69c5><div class="text-center" data-aos="zoom-in" data-aos-duration="1000" data-v-2d6c69c5><h2 class="text-xl font-medium text-gray-900" data-v-2d6c69c5> Numbers that highlight our journey at The Play Group </h2></div><dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:mt-8" data-v-2d6c69c5><div class="flex flex-col px-4 py-8 text-center border-l border-gray-200 first:border-none" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" data-v-2d6c69c5><dt class="order-last text-lg font-medium text-gray-500" data-v-2d6c69c5>Years of Experience</dt><dd class="text-4xl font-semibold text-black md:text-5xl" data-v-2d6c69c5>${ssrInterpolate(yearsExperience.value)}<span class="text-orange-400" data-v-2d6c69c5>+</span></dd></div><div class="flex flex-col px-4 py-8 text-center border-l border-gray-200" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" data-v-2d6c69c5><dt class="order-last text-lg font-medium text-gray-500" data-v-2d6c69c5>Countries Served</dt><dd class="text-4xl font-semibold text-black md:text-5xl" data-v-2d6c69c5>${ssrInterpolate(countriesServed.value)}<span class="text-orange-400" data-v-2d6c69c5>+</span></dd></div><div class="flex flex-col px-4 py-8 text-center border-l border-gray-200" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" data-v-2d6c69c5><dt class="order-last text-lg font-medium text-gray-500" data-v-2d6c69c5>Mobile Solutions</dt><dd class="text-4xl font-semibold text-black md:text-5xl" data-v-2d6c69c5>${ssrInterpolate(mobileSolutions.value)}<span class="text-orange-400" data-v-2d6c69c5>+</span></dd></div><div class="flex flex-col px-4 py-8 text-center border-l border-gray-200" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" data-v-2d6c69c5><dt class="order-last text-lg font-medium text-gray-500" data-v-2d6c69c5>Strategic Partnerships</dt><dd class="text-4xl font-semibold text-black md:text-5xl" data-v-2d6c69c5>${ssrInterpolate(strategicPartnerships.value)}<span class="text-orange-400" data-v-2d6c69c5>+</span></dd></div></dl></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/stats.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2d6c69c5"]]);
const _sfc_main$3 = {
  __name: "feature",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full px-6 py-12 mx-auto lg:py-16 bg-blue-100" }, _attrs))}><h3 data-aos="zoom-in" data-aos-duration="1000" class="font-serif text-3xl text-black capitalize md:text-4xl lg:text-5xl text-center"> Explore Our Dynamic Offerings </h3><p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" class="text-center text-gray-600 mb-4"> Delve into our diverse range of mobile-centric services, each crafted to elevate engagement, entertain, and inform your global audience. </p><div class="mt-8 xl:flex xl:justify-center xl:gap-8"><div class="xl:w-1/2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"><img class="object-cover w-full h-96" src="https://via.placeholder.com/800x450" alt="Mobile Infotainment Services"><h2 class="mt-6 font-serif text-3xl font-medium text-black"> Mobile Infotainment Services </h2><p class="mt-2 text-gray-600"> Stay informed and entertained on the go with our curated mix of news and lifestyle content. </p><p class="mt-4 italic text-orange-400">Explore M-Info Today!</p></div><div class="mt-8 space-y-8 xl:w-1/2 xl:mt-0"><div class="md:flex md:items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600"><img class="object-cover w-full h-56 md:h-48 md:w-80 shrink-0" src="https://via.placeholder.com/800x450" alt="Mobile Gaming Solutions"><div class="mt-6 md:ml-4"><h2 class="font-serif text-2xl font-medium text-black"> Mobile Gaming Solutions </h2><p class="mt-2 text-gray-600"> Experience thrilling adventures and entertainment through our immersive games. </p><p class="mt-4 italic text-orange-400"> Join the Fun with M-Gaming! </p></div></div><div class="md:flex md:items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800"><img class="object-cover w-full h-56 md:h-48 md:w-80 shrink-0" src="https://via.placeholder.com/800x450" alt="SMS Aggregation Services"><div class="mt-6 md:ml-4"><h2 class="font-serif text-2xl font-medium text-black"> SMS Aggregation Services </h2><p class="mt-2 text-gray-600"> Effortlessly streamline communication and engagement with our SMS Connect platform. </p><p class="mt-4 italic text-orange-400"> Enhance Communication Today! </p></div></div><div class="md:flex md:items-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000"><img class="object-cover w-full h-56 md:h-48 md:w-80 shrink-0" src="https://via.placeholder.com/800x450" alt="Mobile Entertainment Services"><div class="mt-6 md:ml-4"><h2 class="font-serif text-2xl font-medium text-black"> Mobile Entertainment Services </h2><p class="mt-2 text-gray-600"> Dive into a world of multimedia delight with our music and video offerings. </p><p class="mt-4 italic text-orange-400">Enjoy Triple Play Now!</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/feature.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("zurr.Ds45lEP1.png");
const _imports_1 = "" + __buildAssetsURL("date.Cfgc4wsF.png");
const _sfc_main$2 = {
  __name: "startup",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-12 bg-white" }, _attrs))}><article class="group text-center flex items-center justify-center" data-aos="fade-right" data-aos-duration="1000"><div class="p-4"><h1 class="text-2xl md:text-4xl font-medium text-gray-900 dark:text-black"> Fostering Innovation: <span class="text-orange-400">Our Startup Portfolio</span></h1><p class="mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400"> Explore our curated collection of pioneering startups, each a testament to our commitment to fostering innovation and shaping the future of technology-driven solutions. </p></div></article><article class="group relative overflow-hidden" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"><img alt="Startup Portfolio"${ssrRenderAttr("src", _imports_0)} class="h-96 w-full rounded-xl object-cover shadow-xl transition-transform duration-[2000ms] ease-in-out transform group-hover:scale-105 dark:shadow-gray-700/25"><div class="p-4"><a href="https://zuri.health/"><h3 class="text-lg font-medium text-gray-900 dark:text-orange-400"> Play Zuri health </h3></a><p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400"> The Playgroup is a forward-thinking startup focused on fostering innovation and collaboration in various sectors. From tech solutions to community-driven projects, their portfolio showcases the dedication to growth and positive impact. </p></div></article><article class="group relative overflow-hidden" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400"><img alt="Startup Portfolio"${ssrRenderAttr("src", _imports_1)} class="h-96 w-full rounded-xl object-cover shadow-xl transition-transform duration-[2000ms] ease-in-out transform group-hover:scale-105 dark:shadow-gray-700/25"><div class="p-4"><a href="https://theplaygroup.net/"><h3 class="text-lg font-medium text-gray-900 dark:text-orange-400"> The PlayDate </h3></a><p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400"> Explore how The Playgroup blends creativity with technology to launch impactful ventures that aim to make a difference in business and community spaces. </p></div></article><article class="group relative overflow-hidden" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600"><img alt="Startup Portfolio" src="https://via.placeholder.com/800x450" class="h-96 w-full rounded-xl object-cover shadow-xl transition-transform duration-[2000ms] ease-in-out transform group-hover:scale-105 dark:shadow-gray-700/25"><div class="p-4"><a href="https://byzara.life/"><h3 class="text-lg font-medium text-gray-900 dark:text-orange-400"> ByZara </h3></a><p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400"> The Playgroup is a forward-thinking startup focused on fostering innovation and collaboration in various sectors. From tech solutions to community-driven projects, their portfolio showcases the dedication to growth and positive impact. </p></div></article></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/startup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-orange-100" }, _attrs))}><div class="container px-4 py-10 lg:py-16 mx-auto lg:flex lg:items-center lg:justify-between"><h2 class="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl"> Join us and get the update from anywhere </h2><div class="mt-8 lg:mt-0"><div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2"><input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address"><button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-700 rounded-md focus:ring fo sm:mx-2 hover:bg-orange-300 focus:outline-none focus:bg-sky-400"> Get Started </button></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/cta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingNavbar = __nuxt_component_0;
  const _component_LandingHero = _sfc_main$6;
  const _component_LandingAbout = _sfc_main$5;
  const _component_LandingStats = __nuxt_component_3;
  const _component_LandingFeature = _sfc_main$3;
  const _component_LandingStartup = _sfc_main$2;
  const _component_LandingCta = __nuxt_component_6;
  const _component_LandingFoot = __nuxt_component_7;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingHero, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingStats, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingFeature, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingStartup, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingCta, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingFoot, null, null, _parent));
  _push(`<p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, null, _parent));
  _push(`</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-AdXUxVPd.js.map
