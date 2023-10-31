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
  },
  rules: {
    'no-dual-exports': require('./rules/no-dual-exports'),
  },
};
