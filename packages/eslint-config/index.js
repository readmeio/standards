const js = require('@eslint/js');
const eslintCommentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments');
const prettier = require('eslint-config-prettier');
const nPlugin = require('eslint-plugin-n');
const readmePlugin = require('eslint-plugin-readme');
const unicornPlugin = require('eslint-plugin-unicorn');
const youDontNeedLodashPlugin = require('eslint-plugin-you-dont-need-lodash-underscore');

const baseRules = require('./rules/base');

module.exports = [
  // eslint:recommended first, then airbnb-base overrides — matching the original extends order.
  js.configs.recommended,

  // Base rules inlined from eslint-config-airbnb-base (includes import-x plugin registration).
  ...baseRules,

  // Plugins without flat configs — manual wiring
  {
    plugins: {
      '@eslint-community/eslint-comments': eslintCommentsPlugin,
    },
    rules: eslintCommentsPlugin.configs.recommended.rules,
  },
  {
    plugins: {
      readme: readmePlugin,
    },
    rules: {
      'readme/json-parse-try-catch': 'error',
    },
  },
  {
    plugins: {
      'you-dont-need-lodash-underscore': youDontNeedLodashPlugin,
    },
    rules: youDontNeedLodashPlugin.configs.compatible.rules,
  },

  // prettier — just rules, spread directly
  { rules: prettier.rules },

  // Our custom rules
  {
    plugins: {
      n: nPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
      '@eslint-community/eslint-comments/no-unused-disable': 'error',

      'arrow-body-style': 'off', // This rule clashes with our Prettier config.

      // This rule is enabled in our `typescript` config, eventually it will be enabled here as well.
      'func-names': 'off',

      'import-x/no-anonymous-default-export': ['error', { allowArray: true, allowObject: true }],

      'import-x/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
        },
      ],

      'import-x/prefer-default-export': 'off',

      'no-nested-ternary': 'off', // See also: `unicorn/no-nested-ternary`

      'no-restricted-imports': ['error', { paths: ['lodash'] }],

      'n/no-deprecated-api': 'error',
      'n/no-exports-assign': 'error',
      'n/no-extraneous-require': 'error',

      'prefer-arrow-callback': 'off', // This rule clashes with our Prettier config.
      'prefer-destructuring': 'off',

      'unicorn/catch-error-name': ['error', { ignore: ['^(error|err|e)$'] }],
      // "unicorn/consistent-function-scoping": "error", // Maybe?
      'unicorn/custom-error-definition': 'error',
      'unicorn/error-message': 'error',
      'unicorn/import-style': 'error',
      'unicorn/new-for-builtins': 'error',
      // 'unicorn/no-array-method-this-argument': 'error', // Maybe?
      'unicorn/no-instanceof-array': 'error',
      'unicorn/no-nested-ternary': 'off', // See also: `no-nested-ternary`
      'unicorn/no-unnecessary-polyfills': 'error',
      'unicorn/no-unreadable-array-destructuring': 'error',
      'unicorn/no-unused-properties': 'error',
      'unicorn/no-useless-fallback-in-spread': 'error',
      'unicorn/no-useless-length-check': 'error',
      // 'unicorn/no-useless-undefined': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-set-has': 'off',
      'unicorn/prefer-number-properties': 'off',
      'unicorn/prefer-type-error': 'error',
      'unicorn/throw-new-error': 'error',

      // We're comfortable using throttle and debounce out of Lodash instead of polyfilling them with
      // something else.
      'you-dont-need-lodash-underscore/debounce': 'off',
      'you-dont-need-lodash-underscore/throttle': 'off',
    },
  },
];
