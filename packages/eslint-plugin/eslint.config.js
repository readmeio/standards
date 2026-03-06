module.exports = [
  ...require('@readme/eslint-config'), // eslint-disable-line global-require
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
    files: ['test/**'],
    rules: {
      'import/no-unresolved': ['error', { ignore: ['@typescript-eslint/parser'] }],
    },
  },
];
