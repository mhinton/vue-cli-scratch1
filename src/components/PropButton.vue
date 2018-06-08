<template>
  <button
    class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
    @click="$emit('click-prop', { propId: value.propId })"
  >{{value.value}}</button>
</template>

<script>
export default {
  props:["value"],
}
</script>

<style scoped>

</style>