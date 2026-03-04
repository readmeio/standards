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
      parserOptions: {
        ecmaVersion: 2022,
      },
    },
  },
  {
    files: ['eslint.config.js'],
    rules: { 'import/no-extraneous-dependencies': 'off' },
  },
  {
    rules: {
      'import/no-unresolved': ['error', { ignore: ['@typescript-eslint/parser'] }],
    },
  },
];
