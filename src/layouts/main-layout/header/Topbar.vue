<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <div class="topbar d-flex align-items-stretch flex-shrink-0">
      <!--begin::Quick links-->
      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <!--begin::Menu-->
        <div
            href="#"
            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
        >
          <a href="#" class="text-dark btn btn-active-light-primary bg-hover-light-dark p-0">
              <span class="d-flex align-items-center fs-7 rounded p-3">
                {{ currentLangugeLocale.name }}
                <img
                    class="w-15px h-15px rounded-1 ms-2"
                    :src="currentLangugeLocale.flag"
                    alt="beeconcrete"
                />
              </span>
          </a>
        </div>
        <KTLangSwicther></KTLangSwicther>
        <!--end::Menu-->
      </div>
      <!--end::Quick links-->

      <!--begin::Theme mode-->
      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <!--begin::Menu toggle-->
        <a
            href="#"
            class="btn btn-icon btn-active-light-primary bg-hover-light-dark w-30px h-30px w-md-40px h-md-40px"
            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
        >
          <KTIcon
              icon-name="night-day"
              icon-class="theme-light-show fs-2 fs-md-1 text-dark"
          />
          <KTIcon icon-name="moon" icon-class="theme-dark-show fs-2 fs-md-1 text-dark"/>
        </a>
        <!--begin::Menu toggle-->
        <KTThemeModeSwitcher></KTThemeModeSwitcher>
      </div>
      <!--end::Theme mode-->



      <!--begin::Theme mode-->
      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <!--begin::Menu toggle-->
        <a
            href="#"
            class="btn btn-icon btn-active-light-primary bg-hover-light-dark w-30px h-30px w-md-40px h-md-40px"
            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
        >
          <KTIcon
              icon-name="basket"
              icon-class="fs-2 fs-md-1 text-dark"
          />
        </a>
        <!--begin::Menu toggle-->
        <KTBasketMode></KTBasketMode>
      </div>
      <!--end::Theme mode-->

      <!--begin::User-->
      <div
          class="d-flex align-items-center me-lg-n3 ms-1 ms-lg-3"
          id="kt_header_user_menu_toggle"
      >
        <!--begin::Menu-->
        <div
            class="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="bottom"
        >
          <img
              :src="getAssetPath('media/avatars/300-2.jpg')"
              alt="beeconcrete"
              class="h-30px w-30px rounded"
          />
        </div>
        <KTUserMenu></KTUserMenu>
        <!--end::Menu-->
      </div>
      <!--end::User -->
    </div>
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {computed, defineComponent} from "vue";
import KTSearch from "@/layouts/main-layout/search/Search.vue";
import KTNotificationsMenu from "@/layouts/main-layout/menus/NotificationsMenu.vue";
import KTQuickLinksMenu from "@/layouts/main-layout/menus/QuickLinksMenu.vue";
import KTUserMenu from "@/layouts/main-layout/menus/UserAccountMenu.vue";
import KTThemeModeSwitcher from "@/layouts/main-layout/theme-mode/ThemeModeSwitcher.vue";
import KTBasketMode from "@/layouts/main-layout/basket/BasketMode.vue";
import KTLangSwicther from "@/layouts/main-layout/language/LangSwichter.vue";
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";
import {useAuthStore} from "@/stores/auth";

export default defineComponent({
  name: "layout-topbar",
  components: {
    KTNotificationsMenu,
    KTQuickLinksMenu,
    KTUserMenu,
    KTSearch,
    KTThemeModeSwitcher,
    KTLangSwicther,
    KTBasketMode
  },
  setup() {
    const router = useRouter();
    const i18n = useI18n();
    const store = useAuthStore();

    i18n.locale.value = localStorage.getItem("lang")
        ? (localStorage.getItem("lang") as string)
        : "en";

    const countries = {
      en: {
        flag: getAssetPath("media/flags/united-states.svg"),
        name: "English",
      },
      es: {
        flag: getAssetPath("media/flags/spain.svg"),
        name: "Spanish",
      },
      de: {
        flag: getAssetPath("media/flags/germany.svg"),
        name: "German",
      },
      ja: {
        flag: getAssetPath("media/flags/japan.svg"),
        name: "Japanese",
      },
      fr: {
        flag: getAssetPath("media/flags/france.svg"),
        name: "French",
      },
    };

    const signOut = () => {
      store.logout();
      router.push({name: "sign-in"});
    };

    const setLang = (lang: string) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };

    const currentLanguage = computed(() => {
      return i18n.locale.value;
    });

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value as keyof typeof countries];
    });

    return {
      signOut,
      setLang,
      currentLanguage,
      currentLangugeLocale,
      countries,
      getAssetPath,
    };
  },
});
</script>
