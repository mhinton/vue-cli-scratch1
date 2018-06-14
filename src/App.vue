<template>
  <div id="app">
    <div id="nav">
      <router-link to="/vue">Vue</router-link> |
      <router-link to="/">Components</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      // <!--load everything-->
      { type: "text/javascript", src: "/fontawesome-all.js", defer: true }
    ]
  }
};
</script>


<style>
/**
 * Tailwind setup
 * https://medium.com/@Engr_Ejo/how-to-use-tailwind-css-with-vue-9633e78533ee
 */

/**
 * This injects Tailwind's base styles, which is a combination of
 * Normalize.css and some additional base styles.
 *
 * You can see the styles here:
 * https://github.com/tailwindcss/tailwindcss/blob/master/css/preflight.css
 */
@import "tailwindcss/preflight";

/**
 * This injects any component classes registered by plugins.
 */
@import "tailwindcss/components";

/**
 * This injects all of Tailwind's utility classes, generated based on your
 * config file.
 */
@import "tailwindcss/utilities";
</style>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
