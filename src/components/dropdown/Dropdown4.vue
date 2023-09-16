<template>
  <!--begin::Menu 3-->
  <div class="dropdown-custom" @focusout="open = false">
    <input
        :value="stateList.find(a => a.id === value)?.name"
        class="form-control border-hover-primary py-2 cursor-pointer text-primary"
        @click="open = !open"
    >
    <!--begin::Menu item-->
    <div :class="[open && 'dropdown-content-active']"
         class="dropdown-content shadow-custom rounded bg-light w-100 py-4 mt-2">
      <div v-for="i in stateList"
           @click.stop="UpdateEvent(i.id)"
           class="p-2 bg-hover-light-primary text-hover-primary fw-bold"
      >
        {{ i.name }}
      </div>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu 3-->
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";

interface list {
  id: string,
  name: string,
  key: string
}

export default defineComponent({
  name: "dropdown-5",
  components: {},
  props: {
    list: {
      type: Array,
      required: true,
      default: [
        {
          id: 1,
          name: 'default',
          key: 'key'
        }
      ]
    },
    value: {
      type: String,
      required: true
    }
  },
  setup(props, {emit}) {
    const stateList = ref<list[]>(props.list as list[])
    const open = ref(false)
    const value = ref<string>(props.value)
    const UpdateEvent = (item: string) => {
      emit("update:value", item);
    }

    return {
      open,
      stateList,
      UpdateEvent,
      value
    }
  }
});
</script>

<style scoped>
.dropdown-custom {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;

  z-index: 10;
  transition: all .3s;
}

.dropdown-content-active {
  transform: translate(0);
  opacity: 1;
  visibility: visible;
}

</style>
