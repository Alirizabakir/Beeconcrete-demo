<template>
  <!--begin::Aside-->
  <div
      id="kt_aside"
      class="aside card rounded-start-5 rounded-end-0 border-end h-100"
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle"
  >
    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid pt-4">
      <KTMenuSocial></KTMenuSocial>
    </div>



  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent} from "vue";
import {useI18n} from "vue-i18n";
import KTMenu from "@/layouts/main-layout/aside/Menu.vue";
import KTMenuSocial from "@/layouts/main-layout/aside/MenuSocial.vue";
import {asideTheme} from "@/core/helpers/config";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
    KTMenuSocial
  },
  props: {
    lightLogo: String,
    darkLogo: String,
  },
  setup() {
    const {t} = useI18n();

    return {
      asideTheme,
      t,
      getAssetPath,
    };
  },
});
</script>

<style>
.top-10 {
  top: 8%;
}
</style>