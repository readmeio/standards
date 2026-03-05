/* eslint-disable global-require */
const { name: packageName, version: packageVersion } = require('./package.json');

const plugin = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: {},
  rules: {
    'no-decorators-on-private-properties': require('./rules/no-decorators-on-private-properties'),
    'no-dual-exports': require('./rules/no-dual-exports'),
    'prefer-javascript': require('./rules/prefer-javascript'),
    'prefer-typescript': require('./rules/prefer-typescript'),
    'prefer-unicode-ellipsis': require('./rules/prefer-unicode-ellipsis'),
    'no-wildcard-imports': require('./rules/no-wildcard-imports'),
  },
};

// Configs are defined after the plugin object so they can reference it directly
// in the `plugins` map (flat config requires plugin objects, not strings).
// @ts-expect-error — TS infers `configs` as `{}` so it doesn't recognize dynamic properties.
// These can't be defined inline because each config needs a reference back to the plugin object.
plugin.configs.esm = {
  plugins: { readme: plugin },
  rules: {
    'readme/no-dual-exports': 'error',
    'readme/no-wildcard-imports': 'error',
  },
};

// @ts-expect-error — same as above
plugin.configs.react = {
  plugins: { readme: plugin },
  rules: {
    'readme/prefer-unicode-ellipsis': 'warn',
    'readme/no-wildcard-imports': 'error',
  },
};

// @ts-expect-error — same as above
plugin.configs.typescript = {
  plugins: { readme: plugin },
  rules: {
    'readme/no-decorators-on-private-properties': 'error',
  },
};

module.exports = plugin;
