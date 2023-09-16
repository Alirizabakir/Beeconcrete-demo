<template>
  <component :is="isIcon"/>
</template>

<script>
export default {
  props: {
    Icon: {
      type: String,
      default: 'Close'
    },
  },
  data() {
    return {
      isIcon: null
    };
  },
  mounted() {
    import(`@/components/icons/${this.Icon}Svg.vue`).then(module => {
      this.isIcon = module.default;
    });
  },
  watch: {
    Icon: {
      handler(nV){
        import(`@/components/icons/${this.Icon}Svg.vue`).then(module => {
          this.isIcon = module.default;
        });
      }
    }
  }
}
</script>
