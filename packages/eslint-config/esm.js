/** @type {import("eslint-define-config").ESLintConfig} */
const config = {
  extends: ['plugin:require-extensions/recommended'],
  plugins: ['require-extensions', 'unicorn'],
  rules: {
    // see here for more rules to possibly enable in the future:
    // https://gist.github.com/Jaid/164668c0151ae09d2bc81be78a203dd5
    'import/no-commonjs': 'error',
    'node/no-extraneous-import': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-node-protocol': 'error',
  },
};

module.exports = config;
