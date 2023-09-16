<template>
  <!--begin::Toolbar-->
  <div class="toolbar" id="kt_toolbar">
    <!--begin::Container-->
    <div
      id="kt_toolbar_container"
      :class="{
        'container-fluid': toolbarWidthFluid,
        'container-xxl': !toolbarWidthFluid,
      }"
      class="d-flex flex-stack flex-wrap px-0"
    >
      <PageTitle />
      <!--begin::Actions-->
      <div class="d-flex align-items-center py-3 py-md-1">
        <!--begin::Secondary button-->
        <div class="me-4">
          <!--begin::Menu-->
          <a href="#" class="btn btn-flex btn-sm h-40px btn-light fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">History</a>
          <!--begin::Menu 1-->
          <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_64b7802947dea">
            <!--begin::Header-->
            <div class="px-7 py-5">
              <div class="fs-5 text-dark fw-bold">Filter Options</div>
            </div>
            <!--end::Header-->
            <!--begin::Menu separator-->
            <div class="separator border-gray-200"></div>
            <!--end::Menu separator-->
            <!--begin::Form-->
            <div class="px-7 py-5">
              <!--begin::Input group-->
              <div class="mb-10">
                <!--begin::Label-->
                <label class="form-label fw-semibold">Status:</label>
                <!--end::Label-->
                <!--begin::Input-->
                <div>
                  <select class="form-select form-select-solid">
                    <option></option>
                    <option value="1">Approved</option>
                    <option value="2">Pending</option>
                    <option value="2">In Process</option>
                    <option value="2">Rejected</option>
                  </select>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="mb-10">
                <!--begin::Label-->
                <label class="form-label fw-semibold">Member Type:</label>
                <!--end::Label-->
                <!--begin::Options-->
                <div class="d-flex">
                  <!--begin::Options-->
                  <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                    <input class="form-check-input" type="checkbox" value="1" :checked="true"/>
                    <span class="form-check-label">Author</span>
                  </label>
                  <!--end::Options-->
                  <!--begin::Options-->
                  <label class="form-check form-check-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="2" :checked="true" />
                    <span class="form-check-label">Customer</span>
                  </label>
                  <!--end::Options-->
                </div>
                <!--end::Options-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="mb-10">
                <!--begin::Label-->
                <label class="form-label fw-semibold">Notifications:</label>
                <!--end::Label-->
                <!--begin::Switch-->
                <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" value="1" name="notifications" :checked="true" />
                  <label class="form-check-label">Enabled</label>
                </div>
                <!--end::Switch-->
              </div>
              <!--end::Input group-->
              <!--begin::Actions-->
              <div class="d-flex justify-content-end">
                <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
              </div>
              <!--end::Actions-->
            </div>
            <!--end::Form-->
          </div>
          <!--end::Menu 1-->
          <!--end::Menu-->
        </div>
        <!--end::Secondary button-->
        <!--begin::Primary button-->
        <a href="#" class="btn btn-flex btn-sm h-40px fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">New
          <span class="d-none d-sm-inline">Ticket</span></a>
        <!--end::Primary button-->
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Toolbar-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import PageTitle from "@/layouts/main-layout/toolbar/PageTitle.vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { toolbarWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "KToolbar",
  components: {
    Dropdown1,
    PageTitle,
  },
  setup() {
    return {
      toolbarWidthFluid,
      getAssetPath,
    };
  },
});
</script>
