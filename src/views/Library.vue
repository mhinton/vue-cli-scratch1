<template>
  <div class="library">
    <h1>Component Library</h1>

    <component1
      :value="entity"
      @click-prop="clickedProp"
    ></component1>
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
    }
  },

  methods: {
    clickedProp(evt) {
      console.log(`Library: ${JSON.stringify(evt)}`);
      const prop = this.entity.properties.filter(p => p.propId === evt.propId)[0];
      if (prop && prop.type === "favorite") {
        prop.value = !prop.value;
      }
    }
  }
}
</script>

<style scoped>

</style>