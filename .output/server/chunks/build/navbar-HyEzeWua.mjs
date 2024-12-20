import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DLbGFuYH.mjs';
import { defineComponent, createElementBlock, ref, provide, useSSRContext, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode } from 'vue';
import { _ as _export_sfc, a as useState } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useColorMode = () => {
  return useState("color-mode").value;
};
const _imports_0$1 = "" + buildAssetsURL("2w.DaJtYzFi.png");
const _imports_0 = "" + buildAssetsURL("1b.hHKvFRDa.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    let isScrolled = ref(false);
    const colorMode = useColorMode();
    computed({
      get() {
        return colorMode.value === "dark";
      },
      set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: [
          "px-8 py-2 xl:py-3 fixed top-0 w-full z-[1000]",
          {
            "dark:bg-white bg-satinlinen": unref(isScrolled),
            "bg-transparent": !unref(isScrolled)
          }
        ]
      }, _attrs))} data-v-4b5c5212><div class="flex justify-between w-full place-items-center" data-v-4b5c5212>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  !unref(isScrolled) ? (openBlock(), createBlock("img", {
                    key: 0,
                    class: "h-12 lg:h-24 xl:h-18 2xl:h-21 w-auto",
                    src: _imports_0$1,
                    alt: "The Playgroup Logo"
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    class: "h-12 lg:h-24 xl:h-18 2xl:h-21 w-auto",
                    src: _imports_0,
                    alt: "The Playgroup Logo (Scrolled)"
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-5" data-v-4b5c5212>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: [
          "relative font-semibold text-base transition-colors",
          { "text-black": unref(isScrolled), "text-white": !unref(isScrolled) }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ABOUT <span class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300" data-v-4b5c5212${_scopeId}></span>`);
          } else {
            return [
              createTextVNode(" ABOUT "),
              createVNode("span", { class: "absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/programs",
        class: [
          "relative font-semibold text-base transition-colors",
          { "text-black": unref(isScrolled), "text-white": !unref(isScrolled) }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SERVICES <span class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300" data-v-4b5c5212${_scopeId}></span>`);
          } else {
            return [
              createTextVNode(" SERVICES "),
              createVNode("span", { class: "absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admissions",
        class: [
          "relative font-semibold text-base transition-colors",
          { "text-black": unref(isScrolled), "text-white": !unref(isScrolled) }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` BLOG <span class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300" data-v-4b5c5212${_scopeId}></span>`);
          } else {
            return [
              createTextVNode(" BLOG "),
              createVNode("span", { class: "absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: [
          "relative font-semibold text-base transition-colors",
          { "text-black": unref(isScrolled), "text-white": !unref(isScrolled) }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` CONTACT US <span class="absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300" data-v-4b5c5212${_scopeId}></span>`);
          } else {
            return [
              createTextVNode(" CONTACT US "),
              createVNode("span", { class: "absolute bottom-0 left-0 h-[2px] bg-orange-400 w-0 transition-all duration-300" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b5c5212"]]);

export { __nuxt_component_0 as _, _imports_0 as a };
//# sourceMappingURL=navbar-HyEzeWua.mjs.map
