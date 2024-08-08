/* eslint-disable global-require */
const { name: packageName, version: packageVersion } = require('./package.json');

module.exports = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: {
    esm: {
      plugins: ['readme'],
      rules: {
        'readme/no-dual-exports': 'error',
      },
    },
    typescript: {
      plugins: ['readme'],
      rules: {
        'readme/no-decorators-on-private-properties': 'error',
      },
    }
  },
  rules: {
    'no-decorators-on-private-properties': require('./rules/no-decorators-on-private-properties'),
    'no-dual-exports': require('./rules/no-dual-exports'),
  },
};
