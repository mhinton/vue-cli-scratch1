<template>
  <span @click="toggle">
    <i class="fa-star" :class="iconClass()"></i>
  </span>
</template>

<script>
export default {
  props:["value"],

  computed: {
    favorited() {
      const val = this.$props.value;
      const prop = this.$store.state.entity.properties.find(p => p.propId === val.propId);
      return prop.value;
    }
  },

  methods: {
    toggle() {
      const val = this.$props.value;
      this.$store.dispatch("updateProp", { propId: val.propId, value: !val.value });
    },

    iconClass() {
      if (this.favorited) {
        return 'fas';
      } else {
        return 'far';
      }
    }
  }
}
</script>

<style scoped>
</style>