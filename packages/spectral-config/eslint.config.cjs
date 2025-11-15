const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('@readme/eslint-config'),
  {
    rules: {
      'import/extensions': ['error', 'always'],
    },
  },
  {
    files: ['test/**/*.js'],
    ...compat.extends('@readme/eslint-config/testing/vitest')[0],
  },
  {
    files: ['eslint.config.cjs'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
