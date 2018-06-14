<template>
  <popper ref="popup" :options="{ placement: 'top' }" trigger="click" @hide="cleanup">
    <div class="popper">
      <!-- Prop editor will be rendered here -->
    </div>
    <!-- <div class="popper__arrow" x-arrow=""></div> -->

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
import ColorUtils from "@/lib/ColorUtils";
import "vue-popperjs/dist/css/vue-popper.css";

export default {
  components: {
    popper: Popper
  },
  props: ["property"],

  methods: {
    color() {
      if (typeof this.$props.property.value === "string") {
        return this.$props.property.text;
      }
      return "green-dark";
    },

    hoverColor() {
      if (typeof this.$props.property.value === "string") {
        const colorUtil = new ColorUtils(this.$props.property.value);
        const options = this.$store.state.propOptions.filter(
          p => p.render === this.$props.property.render
        );
        return colorUtil.hoverColorFromOptions(options);
      }
      return "green";
    },

    textColor() {
      if (typeof this.$props.property.value === "string") {
        const colorUtil = new ColorUtils(this.$props.property.value);
        return colorUtil.textColor();
      }
      return "white";
    },

    edit() {
      const editorClass = Vue.extend(Mapper[this.$props.property.render]);
      const items = this.$store.state.propOptions.filter(
        opt => opt.render === this.$props.property.render
      );
      if (items && items.length) {
        if (this.editor) {
          this.cleanup();
        }
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
      } else {
        console.error("No items for picker");
      }
    },

    cleanup() {
      Array.from(this.editor.$el.children).forEach(el => el.remove());
      this.editor.$el.remove();
      this.editor.$destroy();
    },

    choose(newPropOptionId) {
      const newPropOpt = this.$store.state.propOptions.find(
        propOpt => propOpt.id === newPropOptionId
      );
      this.$store.dispatch("updateProp", {
        propId: this.property.propId,
        value: newPropOpt.value,
        text: newPropOpt.text
      });
      this.cleanup();
    }
  }
};
</script>

<style lang="scss" scoped>
.popper {
  /* width: auto; */
  background-color: #fafafa;
  color: #212121;
  text-align: center;
  font-size: 14pt;
  border: 1px #ebebeb solid;
  margin: 0;
  padding: 0;
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
