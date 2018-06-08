import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    entity: {
      icon: "fa-align-justify",
      title: "Nihil sed accusamus aliquam",
      // body: "Rem earum quod quo optio impedit temporibus nihil harum. Corporis quis quia occaecati qui culpa et aliquid. Quia qui eius id ut labore quis error."
      properties: [
        {
          propId: "Jo4Dg8JXkrnzX6nbC",
          label: "color",
          value: "dark-blue",
          type: "button"
        },
        {
          propId: "H9ho3xBaDWmDYA4in",
          label: "favorite",
          value: false,
          type: "favorite"
        },
        {
          propId: "JeA7oug2QpqYTqAec",
          label: "enabled",
          value: true,
          type: "button"
        }
      ]
    }
  },

  mutations: {
    SET_PROP_VALUE: function(state, propUpdate) {
      propUpdate.prop.value = propUpdate.value;
      return true;
    }
  },

  actions: {
    updateProp({ commit, state }, data) {
      const prop = state.entity.properties.find(p => p.propId === data.propId);
      if (prop) {
        commit("SET_PROP_VALUE", { prop: prop, value: data.value });
      }
    }
  }
});
