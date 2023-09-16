<template>
  <!--begin::Menu-->
  <div
      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 w-300px"
      data-kt-menu="true"
      data-kt-element="theme-mode-menu"
  >
    <!--begin::Menu item-->
    <div class="h-300px scroll">
      <div v-for="i in 10" class="menu-item my-0">
        <router-link
            to="/basket"
            :class="{ active: themeMode === 'light' }"
            class="menu-link px-3 py-2"
        >
          <img
              class="card-rounded object-cover w-50px h-50px"
              :src="getAssetPath(`media/products/${'honeycomb_no_1'}.jpg`)" alt="aaa">
          <div class="d-flex ms-2 w-100">
            <div>
              <p class="mb-1">Honeycomb No.1</p>
              <div>
              <span class="btn btn-sm btn-icon btn-danger p-0 w-20px h-20px">
                <KTIcon icon-name="arrow-down" icon-class="text-dark"/>
              </span>
                <span class="btn btn-sm btn-icon btn-secondary text-dark fs-6 w-25px h-25px mx-2">5</span>
                <span class="btn btn-sm btn-icon btn-primary p-0 w-20px h-20px">
                 <KTIcon icon-name="arrow-up" icon-class="text-dark"/>
              </span>
              </div>
            </div>
            <div class="d-flex align-items-end justify-content-end col">
              <!--begin::Total-->
              <span class="text-gray-600 text-end fw-bold fs-6">$2,630</span>
              <!--end::Total-->
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent} from "vue";
import {useThemeStore} from "@/stores/theme";
import {useConfigStore} from "@/stores/config";
import {useRoute} from "vue-router";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";

export default defineComponent({
  name: "kt-theme-switcher",
  components: {KTIcon},
  component: {},
  setup() {
    const storeTheme = useThemeStore();
    const storeConfig = useConfigStore();
    const route = useRoute();

    const themeMode = computed(() => {
      return storeTheme.mode;
    });

    const path = computed(() => route.path);

    const setMode = (mode: "dark" | "light" | "system") => {
      let configMode = mode;

      storeConfig.setLayoutConfigProperty("general.mode", configMode);

      storeTheme.setThemeMode(configMode);
    };

    return {
      themeMode,
      setMode,
      path,
      getAssetPath,
    };
  },
});
</script>
