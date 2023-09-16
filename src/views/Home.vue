<template>

  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8 mb-16">
    <div class="col-xxl-7">
      <Carousel/>
    </div>
    <div class="col-xxl-5 pt-8">
      <Card5 name="Honey Comb 1" route="honeycomb_no_1"/>
      <Card5 name="Honey Comb 2" route="honeycomb_no_2"/>
    </div>
  </div>


  <div class="row my-5 gx-xl-8 mb-16">
    <div class="col-xxl-12">
      <CardGroup/>
    </div>
  </div>

  <div class="row my-5 gx-xl-8 mb-16">
    <div class="col-xxl-12">
      <Card6 route="img-46" head="Inspiration"/>
    </div>
  </div>

  <div class="row my-5 gx-xl-8 mb-16">
    <div class="col-xxl-12">
      <Card6 route="img-66" order="order-1" head="Picture of Nature"/>
    </div>
  </div>

  <div class="row my-5 gx-xl-8">
    <div class="col-xxl-12">
      <CardGruop1/>
    </div>
  </div>

  <!--end::Dashboard-->
</template>

<script lang="ts">
import {defineComponent,onMounted} from "vue";
import TableWidget9 from "@/components/widgets/tables/Widget9.vue";
import TableWidget5 from "@/components/widgets/tables/Widget5.vue";
import ListWidget1 from "@/components/widgets/lists/Widget1.vue";
import ListWidget2 from "@/components/widgets/lists/Widget2.vue";
import ListWidget3 from "@/components/widgets/lists/Widget3.vue";
import ListWidget5 from "@/components/widgets/lists/Widget5.vue";
import ListWidget6 from "@/components/widgets/lists/Widget6.vue";
import MixedWidget2 from "@/components/widgets/mixed/Widget2.vue";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
import MixedWidget7 from "@/components/widgets/mixed/Widget7.vue";
import MixedWidget10 from "@/components/widgets/mixed/Widget10.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import Card5 from "@/components/cards/Card5.vue";
import Card6 from "@/components/cards/Card6.vue";
import CardGroup from "@/components/cards/group/CardGroup.vue";
import CardGruop1 from "@/components/cards/group/CardGruop1.vue";
import {useGlobalStore} from "@/stores/global";

export default defineComponent({
  name: "main-dashboard",
  components: {
    CardGruop1,
    CardGroup,
    Card6,
    Card5,
    Carousel,
    TableWidget9,
    TableWidget5,
    ListWidget1,
    ListWidget2,
    ListWidget3,
    ListWidget5,
    ListWidget6,
    MixedWidget2,
    MixedWidget5,
    MixedWidget7,
    MixedWidget10,
  },
  setup(){
    const globalStore = useGlobalStore()
    onMounted(() => {
      globalStore.setBreadCrumbs('Home')
    })
  }
});
</script>
