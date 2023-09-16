<template>
  <!--begin::Menu wrapper-->
  <div
      id="kt_aside_menu_wrapper"
      ref="scrollElRef"
      class="hover-scroll-overlay-y my-5 my-lg-6 h-100 pb-20"
      data-kt-scroll="true"
      data-kt-scroll-activate="{default: false, lg: true}"
      data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
      data-kt-scroll-height="auto"
      data-kt-scroll-offset="0"
      data-kt-scroll-wrappers="#kt_aside_menu"
  >
    <!--begin::Menu-->
    <div
        id="kt_header_menu"
        class="menu menu-rounded menu-column menu-sub-indention menu-active-bg menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 align-items-center justify-content-center gap-5 fw-semibold"
        data-kt-menu="true"
    >
      <template v-for="(menuItem, j) in SocialMenuConfig" :key="j">
        <template v-if="menuItem.heading">
          <div class="menu-item">
            <a
                class="menu-link p-0"
                :href="menuItem.route"
            >
                <img class="w-25px h-25px" :src="`media/svg/social-logos/${menuItem.icon}.svg`" :alt="menuItem.icon">
            </a>
          </div>
        </template>
      </template>
    </div>
    <!--end::Menu-->
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent, onMounted, ref} from "vue";
import {useI18n} from "vue-i18n";
import {useRoute} from "vue-router";
import {version} from "@/core/helpers/documentation";
import {asideMenuIcons} from "@/core/helpers/config";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import {SocialMenuConfig} from "@/core/config/MainMenuConfig";

export default defineComponent({
  name: "kt-menu",
  components: {},
  setup() {
    const {t, te} = useI18n();
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      console.log(SocialMenuConfig)
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });

    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const hasActiveChildren = (match: string) => {
      return route.path.indexOf(match) !== -1;
    };

    return {
      hasActiveChildren,
      MainMenuConfig,
      asideMenuIcons,
      version,
      translate,
      getAssetPath,
      SocialMenuConfig
    };
  },
});
</script>
