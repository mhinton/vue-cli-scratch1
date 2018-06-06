<template>
  <div class="library">
    <h1>Component Library</h1>

    <div>
      <component1></component1>
    </div>
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
  }
}
</script>

<style scoped>

</style>