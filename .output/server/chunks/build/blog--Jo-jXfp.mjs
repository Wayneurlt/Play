import { _ as __nuxt_component_0 } from './navbar-DqFb8Fte.mjs';
import { _ as __nuxt_component_1 } from './bg-BU60Hgec.mjs';
import { _ as __nuxt_component_7 } from './foot-BVc6Ad_t.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
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
import '@vueuse/core';
import 'vue-router';
import '@prisma/client';
import 'tailwind-merge';
import '@iconify/vue';
import 'notivue';

const _sfc_main = {
  name: "Blog",
  data() {
    return {};
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LandingNavbar = __nuxt_component_0;
  const _component_LandingBg = __nuxt_component_1;
  const _component_LandingFoot = __nuxt_component_7;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingBg, null, null, _parent));
  _push(`<section class="py-12 bg-transparent sm:py-16 lg:py-20"><div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="max-w-md mx-auto text-center"><h2 class="text-3xl font-bold text-white sm:text-4xl font-pj"> Explore Insights with The Playgroup </h2><p class="mt-5 font-normal text-gray-400 font-pj"> Discover articles and stories that highlight innovation, collaboration, and impactful solutions driving our mission forward. </p></div><div class="grid max-w-5xl grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-3 gap-y-8 gap-x-8 lg:gap-x-12"><div class="relative group"><div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9"><img class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105" src="https://via.placeholder.com/300x200" alt="Placeholder Image 1"></div><p class="mt-6 text-sm font-normal text-gray-400 font-pj">November 22, 2021</p><p class="mt-4 text-xl font-bold text-white font-pj"> How To Optimize Progressive Web Apps: Going Beyond The Basics </p><a href="#" title="Read more"><span class="absolute inset-0" aria-hidden="true"></span></a></div><div class="relative group"><div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9"><img class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105" src="https://via.placeholder.com/300x200" alt="Placeholder Image 2"></div><p class="mt-6 text-sm font-normal text-gray-400 font-pj">November 16, 2021</p><p class="mt-4 text-xl font-bold text-white font-pj"> Creative Strategies for Startups: Lessons from The Playgroup </p><a href="#" title="Read more"><span class="absolute inset-0" aria-hidden="true"></span></a></div><div class="relative group"><div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9"><img class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105" src="https://via.placeholder.com/300x200" alt="Placeholder Image 3"></div><p class="mt-6 text-sm font-normal text-gray-400 font-pj">November 10, 2021</p><p class="mt-4 text-xl font-bold text-white font-pj"> Leveraging Technology for Community Impact </p><a href="#" title="Read more"><span class="absolute inset-0" aria-hidden="true"></span></a></div><div class="relative group"><div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9"><img class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105" src="https://via.placeholder.com/300x200" alt="Placeholder Image 4"></div><p class="mt-6 text-sm font-normal text-gray-400 font-pj">November 5, 2021</p><p class="mt-4 text-xl font-bold text-white font-pj"> Building Sustainable Startups for the Future </p><a href="#" title="Read more"><span class="absolute inset-0" aria-hidden="true"></span></a></div><div class="relative group"><div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9"><img class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105" src="https://via.placeholder.com/300x200" alt="Placeholder Image 5"></div><p class="mt-6 text-sm font-normal text-gray-400 font-pj">November 2, 2021</p><p class="mt-4 text-xl font-bold text-white font-pj"> Collaboration as a Catalyst for Innovation </p><a href="#" title="Read more"><span class="absolute inset-0" aria-hidden="true"></span></a></div><div class="relative group"><div class="overflow-hidden rounded-lg aspect-w-16 aspect-h-9"><img class="object-cover w-full h-full transition-all duration-500 transform group-hover:scale-105" src="https://via.placeholder.com/300x200" alt="Placeholder Image 6"></div><p class="mt-6 text-sm font-normal text-gray-400 font-pj">October 28, 2021</p><p class="mt-4 text-xl font-bold text-white font-pj"> Insights into the Startup Ecosystem </p><a href="#" title="Read more"><span class="absolute inset-0" aria-hidden="true"></span></a></div></div></div></section>`);
  _push(ssrRenderComponent(_component_LandingFoot, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { blog as default };
//# sourceMappingURL=blog--Jo-jXfp.mjs.map
