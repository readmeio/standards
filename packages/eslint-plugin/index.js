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
        'readme/no-wildcard-imports': 'error',
      },
    },
    react: {
      plugins: ['readme'],
      rules: {
        'readme/prefer-unicode-ellipsis': 'warn',
        'readme/no-wildcard-imports': 'error',
      },
    },
    typescript: {
      plugins: ['readme'],
      rules: {
        'readme/no-decorators-on-private-properties': 'error',
      },
    },
  },
  rules: {
    'no-decorators-on-private-properties': require('./rules/no-decorators-on-private-properties'),
    'no-dual-exports': require('./rules/no-dual-exports'),
    'prefer-javascript': require('./rules/prefer-javascript'),
    'prefer-typescript': require('./rules/prefer-typescript'),
    'prefer-unicode-ellipsis': require('./rules/prefer-unicode-ellipsis'),
    'no-wildcard-imports': require('./rules/no-wildcard-imports'),
  },
};
