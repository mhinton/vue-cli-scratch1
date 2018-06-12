<template>
  <div class="library">
    <h1>Component Library</h1>

    <component1 :value="entity"></component1>
  </div>
</template>

<script>
import Component1 from "@/components/Component1";
export default {
  components: {
    Component1
  },

  head: {
    title: {
      inner: "Component Library"
    }
  },

  data() {
    return {
      entity: this.$store.state.entity
    };
  }
};
</script>

<style scoped>
</style>
