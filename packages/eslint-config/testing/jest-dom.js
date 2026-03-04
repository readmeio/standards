const jestDomPlugin = require('eslint-plugin-jest-dom');

const jest = require('./jest');

module.exports = [...jest, jestDomPlugin.configs['flat/recommended']];
