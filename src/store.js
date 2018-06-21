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
          type: "button",
          label: "color",
          value: "#2779bd",
          text: "blue-dark",
          render: "Color" // <- render should be editComponent
        },
        {
          propId: "H9ho3xBaDWmDYA4in",
          label: "favorite",
          value: false,
          type: "favorite",
          render: "Favorite"
        },
        {
          propId: "JeA7oug2QpqYTqAec",
          type: "button",
          label: "enabled",
          value: true,
          text: "true",
          render: "Boolean"
        }
      ]
    },
    propOptions: [
      {
        id: "a74JmGW4XgRDBt7M9",
        propId: "JeA7oug2QpqYTqAec",
        render: "Boolean", // <- render should be editComponent
        text: "true",
        value: true
      },
      {
        id: "eC5fknPHQNqLZQZi5",
        propId: "JeA7oug2QpqYTqAec",
        render: "Boolean",
        text: "false",
        value: false
      },
      {
        id: "TEDvDt3GoKtYuPEmc",
        render: "Color",
        text: "blue-darkest",
        value: "#12283a"
      },
      {
        id: "wg3DbqErBYJPY54bW",
        render: "Color",
        text: "blue-darker",
        value: "#1c3d5a"
      },
      {
        id: "8azR88gDg8BGep5rz",
        render: "Color",
        text: "blue-dark",
        value: "#2779bd"
      },
      {
        id: "679QmDyt6YvQ9PuFF",
        render: "Color",
        text: "blue",
        value: "#3490dc"
      },
      {
        id: "PbaHqd2WLK2sGWP4F",
        render: "Color",
        text: "blue-light",
        value: "#6cb2eb"
      },
      {
        id: "mW9548nyxj7DdnErg",
        render: "Color",
        text: "blue-lighter",
        value: "#bcdefa"
      },
      {
        id: "xJZN3Q6WATjeCRujc",
        render: "Color",
        text: "blue-lightest",
        value: "#eff8ff"
      }
    ]
  },

  mutations: {
    SET_PROP_VALUE: function(state, propUpdate) {
      propUpdate.prop.value = propUpdate.value;
      return true;
    },
    SET_PROP_TEXT: function(state, propUpdate) {
      propUpdate.prop.text = propUpdate.text;
      return true;
    }
  },

  actions: {
    updateProp({ commit, state }, data) {
      const prop = state.entity.properties.find(p => p.propId === data.propId);
      if (prop) {
        commit("SET_PROP_VALUE", { prop: prop, value: data.value });
        if (prop.text) {
          commit("SET_PROP_TEXT", { prop: prop, text: data.text });
        }
      }
    }
  }
});

// Schemas generated with https://www.liquid-technologies.com/online-json-to-schema-converter
// property
// {
//   "$schema": "http://json-schema.org/draft-04/schema#",
//   "type": "object",
//   "properties": {
//     "propId": {
//       "type": "string"
//     },
//     "type": {
//       "type": "string"
//     },
//     "label": {
//       "type": "string"
//     },
//     "value": {
//       "type": "string"
//     },
//     "text": {
//       "type": "string"
//     },
//     "render": {
//       "type": "string"
//     }
//   },
//   "required": [
//     "propId",
//     "type",
//     "label",
//     "value",
//     "text",
//     "render"
//   ]
// }
// propOptions
//  boolean
// {
//   "$schema": "http://json-schema.org/draft-04/schema#",
//   "type": "object",
//   "properties": {
//     "id": {
//       "type": "string"
//     },
//     "propId": {
//       "type": "string"
//     },
//     "render": {
//       "type": "string"
//     },
//     "text": {
//       "type": "string"
//     },
//     "value": {
//       "type": "boolean"
//     }
//   },
//   "required": [
//     "id",
//     "propId",
//     "render",
//     "text",
//     "value"
//   ]
// }
//  color
// {
//   "$schema": "http://json-schema.org/draft-04/schema#",
//   "type": "object",
//   "properties": {
//     "id": {
//       "type": "string"
//     },
//     "render": {
//       "type": "string"
//     },
//     "text": {
//       "type": "string"
//     },
//     "value": {
//       "type": "string"
//     }
//   },
//   "required": [
//     "id",
//     "render",
//     "text",
//     "value"
//   ]
// }
