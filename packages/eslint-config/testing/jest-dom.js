const merge = require('lodash/merge');

const jest = require('./jest');

/** @type {import("eslint-define-config").ESLintConfig} */
const config = merge(jest, {
  extends: ['plugin:jest-dom/recommended'],
});

module.exports = config;
