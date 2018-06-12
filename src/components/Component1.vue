<template>
  <div class="cmp1wrapper">
    <div class="cmp1head" @click="toggleBody">
      <div>{{ obj.title }}</div>
      <div class="cmp1icon"><i :class="obj.icon" class="fas fa-3x" /></div>
    </div>
    <div v-show="expanded" class="cmp1body">
      <div v-for="property in obj.properties" :key="property.propId" class="cmp1prop">
        {{ property.label }}:
        <component
          :is="`prop-${property.type}`"
          :property="property"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import PropButton from "./PropButton";
import PropFavorite from "./PropFavorite";

export default {
  components: {
    PropButton,
    PropFavorite
  },
  props: ["value"],

  data() {
    return {
      expanded: false,
      obj: this.$props.value
    };
  },

  computed: {
    propValue(property) {
      return property.value;
    }
  },

  methods: {
    toggleBody() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
.cmp1wrapper {
  margin: 1em;
  background-color: black;
  color: #cccccc;
  width: 20%;
  float: left;

  .cmp1head {
    font-weight: bold;
    color: white;
    background-color: #2779bd;
    padding: 0.5em;

    .cmp1icon {
      margin: 2em 1em 2em 1em;
    }
  }

  .cmp1body {
    background-color: white;
    color: black;
    border: solid 2px black;
    padding: 0.5em;

    .cmp1prop {
      margin-bottom: 0.5em;
    }
  }
}
</style>
