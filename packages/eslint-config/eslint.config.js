module.exports = [
  ...require('./index'), // eslint-disable-line global-require
  {
    files: ['eslint.config.js'],
    rules: { 'import/no-extraneous-dependencies': 'off' },
  },
  {
    files: ['**/typescript.js'],
    rules: {
      // These modules resolve fine at runtime but the import resolver can't trace them.
      'import/no-unresolved': ['error', { ignore: ['@typescript-eslint/eslint-plugin', '@typescript-eslint/parser'] }],
    },
  },
];
