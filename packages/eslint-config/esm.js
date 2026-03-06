const readmePlugin = require('eslint-plugin-readme');
const requireExtensionsPlugin = require('eslint-plugin-require-extensions');
const unicornPlugin = require('eslint-plugin-unicorn');

module.exports = [
  // require-extensions has no flat config — manual wiring
  {
    plugins: {
      'require-extensions': requireExtensionsPlugin,
    },
    rules: requireExtensionsPlugin.configs.recommended.rules,
  },

  // readme esm config (already flat format from eslint-plugin conversion)
  readmePlugin.configs.esm,

  {
    plugins: {
      unicorn: unicornPlugin,
    },
    rules: {
      // see here for more rules to possibly enable in the future:
      // https://gist.github.com/Jaid/164668c0151ae09d2bc81be78a203dd5
      'import-x/no-commonjs': 'error',

      'n/no-extraneous-import': 'error',
      'unicorn/prefer-module': 'error',
      'unicorn/prefer-node-protocol': 'error',
    },
  },
];
