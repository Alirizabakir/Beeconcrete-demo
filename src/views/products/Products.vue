<template>
  <div class="d-flex">
    <KTSidebarMenu class="d-none d-lg-block col-3 me-8 mt-8"></KTSidebarMenu>
    <div class="row gy-5 g-xl-8 mb-16">
      <div v-for="i in 20" class="col-6 col-lg-4 pt-8">
        <Card7 name="Honey Comb 1" route="honeycomb_no_1"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted} from "vue";
import Card7 from "@/components/cards/Card7.vue";
import KTSidebarMenu from "@/layouts/main-layout/sidebar/SidebarMenu.vue";
import {useGlobalStore} from "@/stores/global";

export default defineComponent({
  name: 'Products',
  components: {
    KTSidebarMenu,
    Card7
  },
  setup() {
    const globalStore = useGlobalStore()
    onMounted(() => {
      globalStore.setBreadCrumbs('Products')
    })
  }
})
</script>