/* eslint-disable global-require */
const { name: packageName, version: packageVersion } = require('./package.json');

module.exports = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  rules: {
    'no-decorators-on-private-properties': require('./rules/no-decorators-on-private-properties'),
    'no-dual-exports': require('./rules/no-dual-exports'),
    'prefer-unicode-ellipsis': require('./rules/prefer-unicode-ellipsis'),
  },
};
