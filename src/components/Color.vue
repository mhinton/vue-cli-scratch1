<template>
  <div>
    <div v-for="item in items"
         :key="item.id"
         :style="`background-color: ${item.value}`"
         @click="pick">
      <span :data-id="item.id">{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
