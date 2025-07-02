const merge = require('lodash/merge');

const common = require('./common.config');

/** @type {import("eslint-define-config").ESLintConfig} */
const config = merge(common, {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'jest/consistent-test-it': ['warn', { fn: 'test', withinDescribe: 'it' }],

    'jest/no-disabled-tests': 'off',
    'jest/no-duplicate-hooks': 'warn',

    'jest/padding-around-after-all-blocks': 'warn',
    'jest/padding-around-after-each-blocks': 'warn',
    'jest/padding-around-before-all-blocks': 'warn',
    'jest/padding-around-before-each-blocks': 'warn',
    'jest/padding-around-describe-blocks': 'warn',
    'jest/padding-around-test-blocks': 'warn',

    'jest/prefer-expect-resolves': 'warn',
    'jest/prefer-hooks-on-top': 'warn',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-todo': 'warn',

    'jest/require-to-throw-message': 'error',
  },
});

module.exports = config;
