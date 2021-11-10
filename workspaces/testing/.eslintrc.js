const production = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    'standard',
    'prettier',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  rules: {
    'import/order': 'error',
    'no-debugger': production ? 'error' : 'warn',
    'no-console': production ? 'error' : 'warn',
    'no-unused-vars': production ? 'error' : 'warn',
    'spaced-comment': production ? 'error' : 'warn',
    'vue/no-unused-components': production ? 'error' : 'warn',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/component-name-in-template-casing': 'error',
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-v-html': 'off',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/padding-line-between-blocks': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'v-slot',
        default: 'v-slot',
        named: 'longform',
      },
    ],
    'vue/valid-v-slot': 'error',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 1,
      },
    ],
    // TODO: Figure out why Storybook build fails when the following rule is not disabled
    'no-useless-escape': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
