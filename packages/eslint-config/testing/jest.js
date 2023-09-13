const merge = require('lodash.merge');

const common = require('./common.config');

/** @type {import("eslint-define-config").ESLintConfig} */
const config = merge(common, {
  extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:jest-formatting/recommended'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'jest/consistent-test-it': ['warn', { fn: 'test', withinDescribe: 'it' }],
    'jest/no-disabled-tests': 'off',
    'jest/no-duplicate-hooks': 'warn',
    'jest/no-if': 'error',
    'jest/prefer-expect-resolves': 'warn',
    'jest/prefer-hooks-on-top': 'warn',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-todo': 'warn',
    'jest/require-to-throw-message': 'error',
  },
});

module.exports = config;
