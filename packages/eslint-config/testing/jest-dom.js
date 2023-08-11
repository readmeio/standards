const merge = require('lodash.merge');

const jest = require('./jest');

module.exports = merge(jest, {
  extends: ['plugin:jest-dom/recommended'],
});
