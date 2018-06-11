<template>
  <popper ref="popup" trigger="click" @hide="cleanup" :options="{placement: 'top'}">
    <div class="popper">
      <!-- Prop editor will be rendered here -->
    </div>

    <button slot="reference"
        :class="`bg-${color()} hover:bg-${hoverColor()} text-${textColor()} font-bold py-2 px-4 rounded-full border-2`"
        @click="edit">
      {{property.text}}
    </button>
  </popper>
</template>

<script>
import Vue from "vue";
import Mapper from "../mapper.js";
import Popper from "vue-popperjs";
import { TinyColor } from "@ctrl/tinycolor";
import "vue-popperjs/dist/css/vue-popper.css";

export default {
  props:["property"],

  components: {
    'popper': Popper
  },

  methods: {
    color() {
      return this.property.text;
    },

    hoverColor() {
      const property = this.$props.property;
      const color = new TinyColor(property.value);
      let newIdx = 0;
      if (color.isLight()) {
        newIdx -= 2;
      } else {
        newIdx += 2;
      }
      const options = this.$store.state.propOptions.filter(p => p.render === property.render);
      const currentOption = options.find(p => p.value === property.value);
      const currentIdx = this.$store.state.propOptions.indexOf(currentOption);
      newIdx = currentIdx + newIdx;
      if (newIdx <= 0 || newIdx >=  options.length) {
        // handle ends
        if (newIdx < 0) {
          newIdx = options.length - newIdx;
        } else {
          newIdx = 0 + newIdx;
        }
      }
      return options[newIdx].text;
    },

    textColor() {
      const property = this.$props.property;
      const color = new TinyColor(property.value);
      if (color.isLight()) {
        return "black";
      } else {
        return "white";
      }
    },

    edit(event) {
      const editorClass = Vue.extend(Mapper[this.$props.property.render]);
      const items = this.$store.state.propOptions.filter(opt => opt.render === this.$props.property.render);
      this.editor = new editorClass({
        propsData: {
          items: items
        },
        methods: {
          choose: this.choose
        }
      });
      this.editor.$mount();
      this.$el.querySelector(".popper").appendChild(this.editor.$el);
    },

    cleanup() {
      this.editor.$el.remove();
      this.editor.$destroy();
    },

    choose(newPropOptionId) {
      this.cleanup();
      console.log(`chose ${newPropOptionId}`);
      const newPropOpt = this.$store.state.propOptions.find(propOpt => propOpt.id === newPropOptionId);
      console.log(`chose ${JSON.stringify(newPropOpt)}`);
      this.$store.dispatch("updateProp", { propId: this.property.propId, value: newPropOpt.value, text: newPropOpt.text });
    }
  }
}
</script>

<style lang="scss" scoped>
// @function set-text-color($color) {
//   @if (lightness($color) > 50) {
//     @return #000000; // Lighter backgorund, return dark color
//   } @else {
//     @return #ffffff; // Darker background, return light color
//   }
// }
// div {
//   color: set-text-color(#212121);
//   span {
//     mix-blend-mode: luminosity;
//   }
// }

.popper {
  /* width: auto; */
  background-color: #fafafa;
  color: #212121;
  text-align: center;
  font-size: 14pt;
  border: 1px #ebebeb solid;
  /* padding: 2px;
  display: inline-block;
  border-radius: 3px;
  position: absolute;
  font-weight: normal;
  z-index: 200000;
  -moz-box-shadow: rgb(58, 58, 58) 0 0 6px 0;
  -webkit-box-shadow: rgb(58, 58, 58) 0 0 6px 0;
  box-shadow: rgb(58, 58, 58) 0 0 6px 0; */
}
</style>
