module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ],

  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'literal'
      }
    ],
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/order-in-components': 'error'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  plugins: [
    'graphql'
  ]
}