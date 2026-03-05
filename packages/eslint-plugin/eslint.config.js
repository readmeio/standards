module.exports = [
  { ignores: ['dist/'] },
  ...require('@readme/eslint-config'), // eslint-disable-line global-require
  ...require('@readme/eslint-config/typescript'), // eslint-disable-line global-require
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
      },
    },
  },
  {
    files: ['eslint.config.js', '.eslint-doc-generatorrc.js', 'index.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'import/no-extraneous-dependencies': 'off',
      'readme/prefer-typescript': 'off',
    },
  },
  {
    files: ['vitest.config.mts'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
