<template>
  <div class="picker-boolean">
    <div v-for="item in items"
        :key="item.id"
        :data-id="item.id"
        class="boolean-item"
        @click="pick">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: this.$options.propsData.items
    }
  },

  methods: {
    pick(evt) {
      const id = evt.target.dataset.id;
      this.choose(id);
    }
  }
}
</script>

<style lang="scss">
.picker-boolean {
  cursor: pointer;
  padding: 0;
  margin: 0;
}
</style>