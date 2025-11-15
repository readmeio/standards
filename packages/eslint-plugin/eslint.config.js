const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('@readme/eslint-config'),
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
    },
  },
  {
    files: ['test/**/*.js'],
    rules: {
      'global-require': 'off',
      'import/no-unresolved': 'off',
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
