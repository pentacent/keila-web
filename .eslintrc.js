module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
  overrides: [
    {
      files: ['**/*.vue'],
      extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended'],
      rules: {
        'vue/multi-word-component-names': 'warn',
      },
    },
  ],
}
