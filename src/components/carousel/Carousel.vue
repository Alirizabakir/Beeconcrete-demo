<template>
  <div id="kt_carousel_3_carousel" class="carousel carousel-custom slide" data-bs-ride="carousel"
       data-bs-interval="8000">
    <!--begin::Heading-->
    <div class="d-flex align-items-center justify-content-between flex-wrap mb-4">
      <!--begin::Label-->
      <span class="fs-4 fw-bold pe-2">What design reflects you?</span>
      <!--end::Label-->

      <!--begin::Carousel Indicators-->
      <ol class="p-0 m-0 carousel-indicators carousel-indicators-bullet carousel-indicators-active-primary">
        <li data-bs-target="#kt_carousel_3_carousel" data-bs-slide-to="0" class="ms-1 active"></li>
        <li v-for="(item,index) in slider" data-bs-target="#kt_carousel_3_carousel" :data-bs-slide-to="index + 1"
            class="ms-1"></li>
      </ol>
      <!--end::Carousel Indicators-->
    </div>
    <!--end::Heading-->

    <div class="carousel-inner rounded overflow-hidden">
      <div class="carousel-item active">
        <img class="d-block vh-70 mx-auto object-cover w-100" :src="`/media/products/${slider[0].route}.jpg`"
             alt="First slide">
      </div>
      <div v-for="item in slider" class="carousel-item">
        <img class="d-block vh-70 mx-auto object-cover w-100" :src="`/media/products/${item.route}.jpg`"
             :alt="item.name">
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#kt_carousel_3_carousel"
            data-bs-slide="prev">
      <span class="btn btn-icon btn-sm bg-body rounded-circle">
        <KTIcon icon-name="arrow-left" icon-class="fs-2x text-dark"/>
      </span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#kt_carousel_3_carousel"
            data-bs-slide="next">
      <span class="btn btn-icon btn-sm bg-body rounded-circle">
          <KTIcon icon-name="arrow-right" icon-class="fs-2x text-dark"/>
      </span>
    </button>
  </div>
</template>
<script setup lang="ts">
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";

const slider = [
  {
    id: 1,
    name: 'Bee No 1',
    route: 'bee_no_1',
  },
  {
    id: 2,
    name: 'Bee No 2',
    route: 'bee_no_2',
  },
  {
    id: 3,
    name: 'Bee No 3',
    route: 'bee_no_3',
  },
  {
    id: 4,
    name: 'Bee No 4',
    route: 'bee_no_4',
  },
]
</script>