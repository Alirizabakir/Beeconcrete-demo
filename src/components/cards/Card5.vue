<template>
  <div class="card card-flush">
    <!--begin::Body-->
    <div class="card-body text-center pb-0 pt-4">
      <!--begin::Overlay-->
      <a class="d-block overlay mb-2 cursor-pointer">
        <!--begin::Image-->
        <img class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded object-fit-cover w-100"
             style="height: 266px" :src="getAssetPath(`media/products/${route}.jpg`)" :alt="name">
        <!--end::Image-->
        <!--begin::Action-->
        <div class="overlay-layer card-rounded bg-dark bg-opacity-25">
          <i class="ki-outline ki-eye fs-3x text-white"></i>
        </div>
        <!--end::Action-->
      </a>
      <!--end::Overlay-->
      <!--begin::Info-->
      <div class="d-flex align-items-end flex-stack mb-1">
        <!--begin::Title-->
        <div class="text-start">
          <span class="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-4 d-block">{{ name }}</span>
          <span class="text-gray-400 mt-1 fw-bold fs-6">Last Bid: 1.07 ETH</span>
        </div>
        <!--end::Title-->
        <!--begin::Total-->
        <span class="text-gray-600 text-end fw-bold fs-6">$2,630</span>
        <!--end::Total-->
      </div>
      <!--end::Info-->
    </div>
    <!--end::Body-->
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {getAssetPath} from "@/core/helpers/assets";

export default defineComponent({
  name: 'Card-5',
  props: {
    name: String,
    route: {
      type: String,
      required: true
    },
  },
  setup() {

    return {
      getAssetPath
    }
  }
})
</script>