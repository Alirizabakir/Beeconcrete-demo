<template>
  <div class="d-flex flex-column flex-root auth-bg" id="kt_app_root">
    <!--begin::Page bg image-->
    <!--end::Page bg image-->
    <!--begin::Authentication - Sign-in -->
    <div class="d-flex flex-column flex-column-fluid flex-lg-row">
      <!--begin::Aside-->
      <div class="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
        <!--begin::Aside-->
        <div class="d-flex flex-center flex-lg-start flex-column">
          <!--begin::Logo-->
          <router-link to="/home">
            <img class="w-200px" alt="Logo" src="/media/logos/beeconcrete.png"/>
          </router-link>
          <!--end::Logo-->
          <!--begin::Title-->
          <h2 class="text-white fw-normal m-0">Unique designs designed for you</h2>
          <!--end::Title-->
        </div>
        <!--begin::Aside-->
      </div>
      <!--begin::Aside-->
      <!--begin::Body-->
      <div class="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
        <!--begin::Card-->
        <div class="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20 shadow-lg">
          <!--begin::Wrapper-->
          <div class="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
            <router-view/>
          </div>
          <!--end::Wrapper-->
          <!--begin::Footer-->
          <div class="d-flex flex-stack px-lg-10">
            <!--begin::Languages-->
            <div class="me-0">
              <!--begin::Toggle-->
              <button class="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="top-start"
                      data-kt-menu-offset="0px, 0px"
              >
                <img data-kt-element="current-lang-flag" class="w-20px h-20px rounded me-3"
                     src="/media/flags/united-states.svg" alt=""/>
                <span data-kt-element="current-lang-name" class="me-1">English</span>
                <i class="ki-outline ki-down fs-5 text-muted rotate-180 m-0"></i>
              </button>
              <!--end::Toggle-->
              <!--begin::Menu-->
              <div
                  class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7"
                  data-kt-menu="true"
                  id="kt_auth_lang_menu">
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="#" class="menu-link d-flex px-5" data-kt-lang="English">
											<span class="symbol symbol-20px me-4">
												<img data-kt-element="lang-flag" class="rounded-1" src="/media/flags/united-states.svg"
                             alt=""/>
											</span>
                    <span data-kt-element="lang-name">English</span>
                  </a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="#" class="menu-link d-flex px-5" data-kt-lang="Spanish">
											<span class="symbol symbol-20px me-4">
												<img data-kt-element="lang-flag" class="rounded-1" src="/media/flags/spain.svg" alt=""/>
											</span>
                    <span data-kt-element="lang-name">Spanish</span>
                  </a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="#" class="menu-link d-flex px-5" data-kt-lang="German">
											<span class="symbol symbol-20px me-4">
												<img data-kt-element="lang-flag" class="rounded-1" src="/media/flags/germany.svg" alt=""/>
											</span>
                    <span data-kt-element="lang-name">German</span>
                  </a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="#" class="menu-link d-flex px-5" data-kt-lang="Japanese">
											<span class="symbol symbol-20px me-4">
												<img data-kt-element="lang-flag" class="rounded-1" src="/media/flags/japan.svg" alt=""/>
											</span>
                    <span data-kt-element="lang-name">Japanese</span>
                  </a>
                </div>
                <!--end::Menu item-->
                <!--begin::Menu item-->
                <div class="menu-item px-3">
                  <a href="#" class="menu-link d-flex px-5" data-kt-lang="French">
											<span class="symbol symbol-20px me-4">
												<img data-kt-element="lang-flag" class="rounded-1" src="/media/flags/france.svg" alt=""/>
											</span>
                    <span data-kt-element="lang-name">French</span>
                  </a>
                </div>
                <!--end::Menu item-->
              </div>
              <!--end::Menu-->
            </div>
            <!--end::Languages-->
            <!--begin::Links-->
            <div class="d-flex fw-semibold text-primary fs-base gap-5">
              <a href="../../demo41/dist/pages/team.html" target="_blank">Terms</a>
              <a href="../../demo41/dist/pages/pricing/column.html" target="_blank">Plans</a>
              <a href="../../demo41/dist/pages/contact.html" target="_blank">Contact Us</a>
            </div>
            <!--end::Links-->
          </div>
          <!--end::Footer-->
        </div>
        <!--end::Card-->
      </div>
      <!--end::Body-->
    </div>
    <!--end::Authentication - Sign-in-->
  </div>
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent, onMounted} from "vue";
import LayoutService from "@/core/services/LayoutService";
import {useBodyStore} from "@/stores/body";

export default defineComponent({
  name: "auth-layout",
  components: {},
  setup() {
    const store = useBodyStore();

    onMounted(() => {
      LayoutService.emptyElementClassesAndAttributes(document.body);

      store.addBodyClassname("app-blank");
      store.addBodyClassname("bg-body");
    });

    return {
      getAssetPath,
    };
  },
});
</script>

<style>
.auth-bg {
  background-image: url('/media/auth/bg3.jpg');
  background-size: cover;
}

[data-bs-theme="dark"] .auth-bg {
  background-image: url('/media/auth/bg3-dark.jpg');
}</style>

