<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px">
    <!--begin::Form-->
    <VForm
        class="form w-100"
        id="kt_login_signin_form"
        @submit="onSubmitLogin"
        :validation-schema="login"
        :initial-values="{ email: 'admin@demo.com', password: 'demo' }"
    >
      <!--begin::Heading-->
      <div class="text-center mb-11">
        <!--begin::Title-->
        <h1 class="text-dark fw-bolder mb-3">Sign In</h1>
        <!--end::Title-->
        <!--begin::Subtitle-->
        <div class="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
        <!--end::Subtitle=-->
      </div>
      <!--begin::Heading-->
      <!--begin::Login options-->
      <div class="row g-3 mb-9">
        <!--begin::Col-->
        <div class="col-md-6">
          <!--begin::Google link=-->
          <a href="#"
             class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
            <img alt="Logo" src="/media/svg/brand-logos/google-icon.svg" class="h-15px me-3"/>Sign in with
            Google</a>
          <!--end::Google link=-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-md-6">
          <!--begin::Google link=-->
          <a href="#"
             class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
            <img alt="Logo" src="/media/svg/brand-logos/apple-black.svg"
                 class="theme-light-show h-15px me-3"/>
            <img alt="Logo" src="/media/svg/brand-logos/apple-black-dark.svg"
                 class="theme-dark-show h-15px me-3"/>Sign in with Apple</a>
          <!--end::Google link=-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Login options-->
      <!--begin::Separator-->
      <div class="separator separator-content my-14">
        <span class="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
      </div>
      <!--end::Separator-->
      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Input-->
        <Field
            tabindex="1"
            class="form-control form-control-lg form-control-solid border border-gray-300 bg-white rounded-4"
            type="text"
            name="email"
            autocomplete="off"
            placeholder="Email"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email"/>
          </div>
        </div>
      </div>
      <!--begin::Input group-->
      <div class="fv-row mb-2">
        <!--begin::Input-->
        <Field
            tabindex="2"
            class="form-control form-control-lg form-control-solid border border-gray-300 bg-white rounded-4"
            type="password"
            name="password"
            autocomplete="off"
            placeholder="Password"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password"/>
          </div>
        </div>
      </div>
      <!--end::Input group-->
      <!--begin::Wrapper-->
      <div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div></div>
        <!--begin::Link-->
        <router-link to="/password-reset" class="link-primary">Forgot Password ?</router-link>
        <!--end::Link-->
      </div>
      <!--end::Wrapper-->
      <!--begin::Submit button-->
      <div class="d-grid mb-10">
        <button type="submit" id="kt_sign_in_submit" class="btn btn-primary">
          <!--begin::Indicator label-->
          <span class="indicator-label">Sign In</span>
          <!--end::Indicator label-->
          <!--begin::Indicator progress-->
          <span class="indicator-progress">Please wait...
    										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
          <!--end::Indicator progress-->
        </button>
      </div>
      <!--end::Submit button-->
      <!--begin::Sign up-->
      <div class="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
        <router-link to="/sign-up" class="link-primary">Sign
          up</router-link></div>
      <!--end::Sign up-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import {getAssetPath} from "@/core/helpers/assets";
import {defineComponent, ref} from "vue";
import {ErrorMessage, Field, Form as VForm} from "vee-validate";
import {useAuthStore, type User} from "@/stores/auth";
import {useRouter} from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    //Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Send login request
      await store.login(values);
      const error = Object.values(store.errors);

      if (error.length === 0) {
        Swal.fire({
          text: "You have successfully logged in!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        }).then(() => {
          // Go to page after successfully login
          router.push({name: "home"});
        });
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        }).then(() => {
          store.errors = {};
        });
      }

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
      submitButton.value!.disabled = false;
    };

    return {
      onSubmitLogin,
      login,
      submitButton,
      getAssetPath,
    };
  },
});
</script>
