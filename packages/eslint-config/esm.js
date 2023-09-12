module.exports = {
  extends: ['plugin:require-extensions/recommended'],
  plugins: ['require-extensions', 'unicorn'],
  rules: {
    'unicorn/prefer-node-protocol': 'error',
  },
};
