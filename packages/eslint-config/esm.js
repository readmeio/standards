module.exports = {
  extends: ['plugin:require-extensions/recommended'],
  plugins: ['require-extensions', 'unicorn'],
  rules: {
    'import/no-commonjs': 'error',
    'unicorn/prefer-node-protocol': 'error',
  },
};
