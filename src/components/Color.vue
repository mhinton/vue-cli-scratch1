<template>
  <div class="items picker-colors">
    <div v-for="item in items"
         :key="item.id"
         :data-id="item.id"
         class="color-item"
         :style="`background-color: ${item.value}; color: ${colorFrom(item.value)}`"
         @click="pick">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
import ColorUtils from "@/lib/ColorUtils";

export default {
  data() {
    return {
      items: this.$options.propsData.items
    };
  },

  methods: {
    pick(evt) {
      const id = evt.target.dataset.id;
      this.choose(id);
    },

    colorFrom(value) {
      const colorUtil = new ColorUtils(value);
      return colorUtil.textColor();
    }
  }
};
</script>

<style lang="scss">
.picker-colors {
  cursor: pointer;
  padding: 0;
  margin: 0;

  div {
    line-height: 1.5em;
    padding: 2px;
  }
}
</style>
