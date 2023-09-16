<template>
  <!--begin::Page title-->
  <div v-if="pageTitleDisplay" :class="`page-title d-flex flex-${pageTitleDirection}`" class="app-toolbar">
    <!--begin::Toolbar container-->
    <div id="kt_app_toolbar_container" class="app-container container-fluid d-flex align-items-stretch px-0">
      <!--begin::Toolbar container-->
      <div class="d-flex flex-stack flex-row-fluid">
        <!--begin::Toolbar container-->
        <div class="d-flex flex-column flex-row-fluid">
          <!--begin::Toolbar wrapper-->
          <!--begin::Breadcrumb-->
          <ul class="breadcrumb breadcrumb-separatorless fw-semibold mb-3">
            <!--begin::Item-->
            <li class="breadcrumb-item text-gray-700 fw-bold lh-1">
              <router-link to="/" class="text-white text-hover-primary">
                <i class="ki-duotone ki-home text-gray-700 fs-6"></i>
              </router-link>
            </li>
            <!--end::Item-->
            <!--begin::Item-->
            <li class="breadcrumb-item">
              <i class="ki-outline ki-right fs-5 text-gray-700 mx-n1"></i>
            </li>
            <!--end::Item-->
            <!--begin::Item-->
            <li class="breadcrumb-item text-gray-700 fw-bold lh-1">
              <router-link v-for="(i,index) in route.fullPath.split('/')"
                           :to="`/${index === 1 ? i : '/'}`"
                           :class="[index !== 0 ? 'd-flex' : 'd-none']"
                           class="align-items-center"
              >
                <span> {{ i.toUpperCase() }}</span>
                <i v-if="index !== route.fullPath.split('/').length -1"
                   class="ki-outline ki-right fs-5 text-gray-700"></i>
              </router-link>
            </li>
            <!--end::Item-->
          </ul>
          <!--end::Breadcrumb-->
          <!--begin::Page title-->
          <div class="page-title d-flex align-items-center me-3">
            <!--begin::Title-->
            <h1 class="page-heading d-flex text-dark fw-bolder fs-2qx flex-column justify-content-center my-0">
              {{ breadCrumbs }}</h1>
            <!--end::Title-->
          </div>
          <!--end::Page title-->
        </div>
        <!--end::Toolbar container-->
        <!--begin::Actions-->
        <div class="d-flex align-items-center gap-2 gap-lg-5">

        </div>
        <!--end::Actions-->
      </div>
      <!--end::Toolbar container-->
    </div>
    <!--end::Toolbar container-->
  </div>
  <div v-else class="align-items-stretch"></div>
  <!--end::Page title-->
</template>

<script lang="ts">
import {computed, defineComponent, watch} from "vue";
import {
  pageTitleBreadcrumbDisplay,
  pageTitleDirection,
  pageTitleDisplay,
} from "@/core/helpers/config";
import {useRoute} from "vue-router";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import {useGlobalStore} from '@/stores/global'

export default defineComponent({
  name: "layout-page-title",
  components: {KTIcon},
  setup() {
    const globalStore = useGlobalStore()
    const route = useRoute();
    const breadCrumbs = computed(() => globalStore.breadCrumbs)

    const pageTitle = computed(() => {
      return route.meta.pageTitle;
    });

    // const breadcrumbs = computed(() => {
    //   console.log(route.meta.breadcrumbs)
    //   return route.meta.breadcrumbs;
    // });

    return {
      pageTitle,
      breadCrumbs,
      pageTitleDisplay,
      pageTitleBreadcrumbDisplay,
      pageTitleDirection,
      route,
    };
  },
});
</script>
