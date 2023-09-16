<template>
  <div>
    <div class="d-flex flex-wrap mb-20">
      <!--begin::Image-->
      <div class="col-12 col-lg-7 pe-lg-15">
        <!--begin::Image Head-->
        <div class="d-flex align-items-center gap-5 mb-4">
        <span class="d-flex align-items-center text-gray-700 fs-7">
          <KTIcon icon-name="eye" class="me-2 text-primary fs-2"/>
          <span>+500 Reviews</span>
        </span>
          <span class="d-flex align-items-center text-gray-700 fs-7">
          <KTIcon icon-name="delivery" class="me-2 text-primary fs-2"/>
          <span>Free shipping</span>
        </span>
          <span class="d-flex align-items-center text-gray-700 fs-7">
          <KTIcon icon-name="two-credit-cart" class="me-2 text-primary fs-2"/>
          <span>Easy payment</span>
        </span>
        </div>
        <!--end::Image Head-->
        <!--begin::Image Body-->
        <div class="position-relative">
          <img class="shadow-custom w-100 aspect-ratio-1x1 object-fit-cover rounded"
               :src="getAssetPath(`media/products/${'honeycomb_no_1'}.jpg`)" :alt="'aaa'">
          <span
              class="btn btn-icon btn-light-success transition-3 m-3 w-30px h-30px rounded position-absolute right-0 top-0 opacity-50"
              data-bs-toggle="tooltip"
              data-bs-boundary="window"
              data-bs-placement="top"
              title="Dowmload"
          >
          <i class="bi bi-cloud-download-fill fs-3 transition-3"></i>
        </span>
        </div>
        <!--end::Image Body-->
      </div>
      <!--end::Image-->

      <div class="d-flex flex-column justify-content-lg-between col-12 col-lg mt-8 mt-lg-0">
        <div class="d-flex align-items-center justify-content-end gap-5 mb-4">
        <span class="d-flex align-items-center text-hover-danger cursor-pointer">
          <KTIcon icon-name="heart" class="me-2 fs-2"/>
          <span>Fav</span>
        </span>
          <span class="d-flex align-items-center text-hover-warning cursor-pointer">
          <KTIcon icon-name="like" class="me-2 fs-2"/>
          <span>Like</span>
        </span>
        </div>
        <h2 class="mb-0">Honeycomb No.1</h2>
        <p class="text-gray-700">Honeycomb Collection</p>

        <p class="fst-italic text-gray-500 mb-8">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores molestiae
          odit officia provident sunt. Aut autem exercitationem maxime reprehenderit veritatis."
        </p>

        <div class="mb-8">

        </div>

        <div class="mb-8">
          <p class="mb-1">Size</p>
          <div class="card-toolbar w-200px mb-4">
            <!--begin::Menu-->
            <Dropdown4
                :list="ColorList"
                v-model:value="color"/>
            <!--end::Menu-->
          </div>
          <!--end::Toolbar-->
        </div>

        <div class="mb-8">
          <p class="mb-1">Surface Texture</p>
          <div class="card-toolbar w-200px mb-4">
            <!--begin::Menu-->
            <Dropdown4
                :list="SurfaceList"
                v-model:value="surface"/>
            <!--end::Menu-->
          </div>
          <!--end::Toolbar-->
        </div>

        <div class="mb-8">
          <p class="mb-1">Size</p>
          <div class="card-toolbar w-200px mb-8">
            <!--begin::Menu-->
            <Dropdown4
                :list="SizeList"
                v-model:value="size"/>
            <!--end::Menu-->
          </div>
          <!--end::Toolbar-->

          <div class="d-flex justify-content-between col-4 border-bottom pb-2 mb-2 px-1">
            <span class="fs-7">Width:</span>
            <span class="fs-6 fw-bold">30cm</span>
          </div>

          <div class="d-flex justify-content-between col-4 border-bottom pb-2 mb-2 px-1">
            <span class="fs-7">Height:</span>
            <span class="fs-6 fw-bold">30cm</span>
          </div>

          <div class="d-flex justify-content-between col-4 px-1">
            <span class="fs-7">Depth:</span>
            <span class="fs-6 fw-bold">30cm</span>
          </div>
        </div>

        <div class="d-flex align-items-end flex-stack mb-8">
          <!--begin::Title-->
          <div class="text-start">
            <span class="text-gray-400 mt-1 fw-bold fs-6">Last Bid: $3,630</span>
          </div>
          <!--end::Title-->
          <!--begin::Total-->
          <span class="text-gray-600 text-end fw-bold fs-4">$2,630</span>
          <!--end::Total-->
        </div>

        <div class="text-end">
          <button class="btn btn-primary">Add to cart</button>
        </div>
      </div>

    </div>
    <div class="text-center">
      <h3>The story of the honeycomb</h3>
      <p class="fs-5 fw-semibold text-gray-600 mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        cumque dolor explicabo fugiat fugit illum
        laboriosam modi optio similique temporibus velit veritatis, vero vitae? Dolore doloribus ducimus eaque facere
        magnam ullam veritatis! Aliquid animi blanditiis cumque eligendi eveniet ipsum itaque magni nulla obcaecati
        quas. Aperiam deleniti eligendi nam quibusdam recusandae? Ab, accusamus animi assumenda dolorem earum explicabo
        facere illum ipsam itaque labore natus nemo neque officia officiis quas qui quis recusandae repellat sed sequi
        soluta vel velit vitae voluptatem voluptatibus. Cupiditate dolores placeat quae veniam vitae? Accusamus
        excepturi impedit in ipsum molestiae officia praesentium quam ratione saepe soluta, vel veritatis?</p>

      <h4>A honey bee says</h4>
      <p class="fs-5 fw-semibold text-gray-600 mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        ea fugit illum modi, molestiae mollitia odit
        perferendis quia, reiciendis sed similique ut voluptatum. Amet dolorum, eligendi expedita incidunt molestiae
        reiciendis?</p>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {getAssetPath} from "@/core/helpers/assets";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import Dropdown4 from "@/components/dropdown/Dropdown4.vue";
import Dropdown5 from "@/components/dropdown/Dropdown5.vue";
import {string} from "yup";
import {useGlobalStore} from "@/stores/global";

export default defineComponent({
  methods: {getAssetPath},
  components: {
    Dropdown1,
    Dropdown2,
    Dropdown3,
    Dropdown4,
    Dropdown5,
    KTIcon
  },
  setup() {
    const globalStore = useGlobalStore()
    onMounted(() => {
      globalStore.setBreadCrumbs('Product Detail')
    })

    const color = ref<string>('1')
    const ColorList = [
      {id: '1', name: 'White', key: '#fff'},
      {id: '2', name: 'Gray', key: '#b6b6b6'},
      {id: '3', name: 'Darkgray', key: '#7c7c7c'}
    ]

    const surface = ref<string>('1')
    const SurfaceList = [
      {id: '1', name: 'Smooth', key: 'SM'},
      {id: '2', name: 'Rough', key: 'RG'},
      {id: '3', name: 'Rougher', key: 'RGR'}
    ]

    const size = ref<string>('1')
    const SizeList = [
      {id: '1', name: 'Small', key: 'SM'},
      {id: '2', name: 'Medium', key: 'MD'},
      {id: '3', name: 'Large', key: 'LG'}
    ]




    return {
      size,
      SizeList,
      surface,
      SurfaceList,
      color,
      ColorList,
    }
  }
})
</script>