import { _ as __nuxt_component_0 } from "./navbar-HyEzeWua.js";
import { defineComponent, ref, reactive, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useMouse, useDevicePixelRatio } from "@vueuse/core";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-DLbGFuYH.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@prisma/client";
import "devalue";
import "klona";
import "tailwind-merge";
import "@iconify/vue";
import "notivue";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "bg",
  __ssrInlineRender: true,
  props: {
    color: { default: "#FFFFFF" },
    quantity: { default: 200 },
    staticity: { default: 50 },
    ease: { default: 50 },
    class: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const canvasRef = ref(null);
    const canvasContainerRef = ref(null);
    ref(null);
    ref([]);
    const mouse = reactive({ x: 0, y: 0 });
    const canvasSize = reactive({ w: 0, h: 0 });
    const { x: mouseX, y: mouseY } = useMouse();
    useDevicePixelRatio();
    computed(() => {
      let hex = props.color.replace(/^#/, "");
      if (hex.length === 3) {
        hex = hex.split("").map((char) => char + char).join("");
      }
      const bigint = parseInt(hex, 16);
      const r = bigint >> 16 & 255;
      const g = bigint >> 8 & 255;
      const b = bigint & 255;
      return `${r} ${g} ${b}`;
    });
    watch([mouseX, mouseY], () => {
      onMouseMove();
    });
    function onMouseMove() {
      if (canvasRef.value) {
        const rect = canvasRef.value.getBoundingClientRect();
        const { w, h } = canvasSize;
        const x = mouseX.value - rect.left - w / 2;
        const y = mouseY.value - rect.top - h / 2;
        const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
        if (inside) {
          mouse.x = x;
          mouse.y = y;
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "canvasContainerRef",
        ref: canvasContainerRef,
        class: [_ctx.$props.class, "fixed top-0 left-0 w-full h-full"],
        "aria-hidden": "true"
      }, _attrs))} data-v-a5a5a07f><canvas data-v-a5a5a07f></canvas></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/bg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a5a5a07f"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingNavbar = __nuxt_component_0;
  const _component_LandingBg = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
  _push(ssrRenderComponent(_component_LandingBg, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-5EfqGCYf.js.map
