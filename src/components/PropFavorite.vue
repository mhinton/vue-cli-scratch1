<template>
  <span @click="toggle">
    <i :class="iconClass()" class="fa-star"></i>
  </span>
</template>

<script>
export default {
  props: ["property"],

  methods: {
    toggle() {
      const property = this.$props.property;
      this.$store.dispatch("updateProp", {
        propId: property.propId,
        value: !property.value
      });
    },

    iconClass() {
      if (this.property.value) {
        return "fas";
      } else {
        return "far";
      }
    }
  }
};
</script>

<style scoped>
</style>
