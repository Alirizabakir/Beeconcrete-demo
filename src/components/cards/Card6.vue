<template>
  <!--begin::Card widget 15-->
  <div class="card card-flush border border-gray-300">
    <!--begin::Body-->
    <div class="card-body py-9">
      <!--begin::Row-->
      <div class="row gx-9 h-100">
        <!--begin::Col-->
        <div :class="`${order} ${order ? 'mb-0' : 'mb-10'}`" class="col-sm-6 mb-sm-0">
          <!--begin::Overlay-->
          <a class="d-block overlay h-100" data-fslightbox="lightbox-hot-sales" href="/media/stock/600x600/img-42.jpg">
            <!--begin::Image-->
            <img
                class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-350px h-100 w-100 object-fit-cover"
                style="height: 266px" :src="getAssetPath(`media/stock/600x600/${route}.jpg`)" alt="aaaa">
            <!--end::Image-->
            <!--begin::Action-->
            <div class="overlay-layer card-rounded bg-dark bg-opacity-25">
              <i class="ki-outline ki-eye fs-3x text-white"></i>
            </div>
            <!--end::Action-->
          </a>
          <!--end::Overlay-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div :class="[order && 'mb-10 mb-lg-0']" class="col-sm-6">
          <!--begin::Wrapper-->
          <div class="d-flex flex-column h-100">
            <!--begin::Header-->
            <div class="">
              <!--begin::Title-->
              <div class="mb-2">
                <span v-if="product"
                      class="text-gray-400 fs-7 fw-bold me-2 d-block lh-1 pb-1">Product Name: {{ product }}</span>
                <a href="../../demo41/dist/apps/projects/users.html"
                   class="text-gray-800 text-hover-primary fs-1 fw-bold">{{ head }}</a>
              </div>
              <!--end::Title-->
            </div>
            <!--end::Header-->
            <!--begin::Body-->
            <div class="d-flex flex-column pb-4 pe-3 mb-8 card-rounded fs-4">
              {{ title }}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aspernatur deleniti dolor
              esse, eveniet inventore iure laudantium odio odit quae voluptatum! A blanditiis cumque dolore dolores
              facilis hic illum laborum libero, nulla perspiciatis quam quisquam quo ratione repudiandae sint velit
              vitae. Adipisci deleniti dolorum error, laboriosam mollitia nemo neque nisi quaerat, recusandae
              repudiandae temporibus vel voluptates? Animi autem ea eligendi facere laboriosam obcaecati, quas quasi,
              quod rem sed veniam.
            </div>
            <!--end::Body-->
            <!--begin::Footer-->
            <div class="d-flex flex-stack mt-auto bd-highlight">
              <!--begin::Actions-->
              <a href="#" class="btn btn-primary btn-sm flex-shrink-0 me-3" data-bs-toggle="modal"
                 data-bs-target="#kt_modal_bidding">Place a Bid</a>
              <a href="#" class="btn btn-light btn-sm flex-shrink-0" data-bs-toggle="modal"
                 data-bs-target="#kt_modal_users_search">View Item</a>
              <!--end::Actions-->
            </div>
            <!--end::Footer-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Card widget 15-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {getAssetPath} from "@/core/helpers/assets";

export default defineComponent({
  name: 'Card-6',
  methods: {getAssetPath},
  props: {
    order: String,
    route: String,
    head: String,
    title: String,
    product: String
  },
  setup() {

    return {
      getAssetPath
    }
  }
})
</script>