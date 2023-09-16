<template>
  <div id="kt_app_sidebar"
       class="app-sidebar"
       data-kt-drawer-name="app-sidebar"
       data-kt-drawer-activate="{default: true, lg: false}"
       data-kt-drawer-overlay="true"
       data-kt-drawer-width="auto"
       data-kt-drawer-direction="start"
       data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
    <!--begin::Sidebar secondary menu-->
    <div class="card py-5 bg-gray-200 position-sticky"
         data-kt-sticky="true"
         data-kt-sticky-left="auto"
         data-kt-sticky-top="100px"
         data-kt-sticky-animation="false"
         data-kt-sticky-zindex="95">
      <div class="hover-scroll-y mx-2 px-1 px-lg-2"
           data-kt-scroll-activate="{default: false, lg: true}"
           data-kt-scroll-dependencies="#kt_app_header, #kt_app_footer" data-kt-scroll-wrappers="#kt_app_toolbar"
           data-kt-scroll-offset="5px">
        <div id="kt_app_sidebar_menu" data-kt-menu="true"
             class="menu menu-sub-indention menu-rounded menu-column menu-active-bg menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-arrow-gray-500 fw-semibold fs-6">
          <template v-for="(item, i) in MainMenuConfig.filter(item => item.heading === 'products')" :key="i">
            <div v-if="item.heading" class="menu-item pt-5">
              <div class="menu-content">
                        <span class="menu-heading fw-bold text-uppercase fs-7">
                          {{ translate(item.heading) }}
                        </span>
              </div>
            </div>
            <template v-for="(menuItem, j) in item.pages" :key="j">
              <template v-if="menuItem.heading">
                <div class="menu-item">
                  <router-link
                      v-if="menuItem.route"
                      class="menu-link"
                      active-class="active"
                      :to="menuItem.route"
                  >
                            <span
                                v-if="menuItem.keenthemesIcon || menuItem.bootstrapIcon"
                                class="menu-icon"
                            >
                              <KTIcon
                                  :icon-name="menuItem.keenthemesIcon"
                                  icon-class="fs-2"
                              />
                            </span>
                    <span class="menu-title">{{
                        translate(menuItem.heading)
                      }}</span>
                  </router-link>
                </div>
              </template>
              <div
                  v-if="menuItem.sectionTitle && menuItem.route"
                  :class="{ show: hasActiveChildren(menuItem.route) }"
                  class="menu-item menu-accordion"
                  data-kt-menu-sub="accordion"
                  data-kt-menu-trigger="click"
              >
                        <span class="menu-link">
                          <span
                              v-if="menuItem.keenthemesIcon || menuItem.bootstrapIcon"
                              class="menu-icon"
                          >
                            <KTIcon
                                :icon-name="menuItem.keenthemesIcon"
                                icon-class="fs-2"
                            />
                          </span>
                          <span class="menu-title">{{
                              translate(menuItem.sectionTitle)
                            }}</span>
                          <span class="menu-arrow"></span>
                        </span>
                <div
                    :class="{ show: hasActiveChildren(menuItem.route) }"
                    class="menu-sub menu-sub-accordion"
                >
                  <template v-for="(item2, k) in menuItem.sub" :key="k">
                    <div v-if="item2.heading" class="menu-item">
                      <router-link
                          v-if="item2.route"
                          class="menu-link"
                          active-class="active"
                          :to="item2.route"
                      >
                                <span class="menu-bullet">
                                  <span class="bullet bullet-dot"></span>
                                </span>
                        <span class="menu-title">{{
                            translate(item2.heading)
                          }}</span>
                      </router-link>
                    </div>
                    <div
                        v-if="item2.sectionTitle && item2.route"
                        :class="{ show: hasActiveChildren(item2.route) }"
                        class="menu-item menu-accordion"
                        data-kt-menu-sub="accordion"
                        data-kt-menu-trigger="click"
                    >
                              <span class="menu-link">
                                <span class="menu-bullet">
                                  <span class="bullet bullet-dot"></span>
                                </span>
                                <span class="menu-title">{{
                                    translate(item2.sectionTitle)
                                  }}</span>
                                <span class="menu-arrow"></span>
                              </span>
                      <div
                          :class="{ show: hasActiveChildren(item2.route) }"
                          class="menu-sub menu-sub-accordion"
                      >
                        <template v-for="(item3, k) in item2.sub" :key="k">
                          <div v-if="item3.heading" class="menu-item">
                            <router-link
                                v-if="item3.route"
                                class="menu-link"
                                active-class="active"
                                :to="item3.route"
                            >
                                      <span class="menu-bullet">
                                        <span class="bullet bullet-dot"></span>
                                      </span>
                              <span class="menu-title">{{
                                  translate(item3.heading)
                                }}</span>
                            </router-link>
                          </div>
                        </template>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
    <!--end::Sidebar secondary menu-->
  </div>

  <!--end::sidebar menu-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "sidebar-menu",
  components: {},
  setup() {
    const {t, te} = useI18n();
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
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
      translate,
      getAssetPath,
    };
  },
});
</script>
