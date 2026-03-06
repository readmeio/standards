module.exports = [
  ...require('./index'), // eslint-disable-line global-require
  {
    files: ['**/typescript.js'],
    rules: {
      // These modules resolve fine at runtime but the import resolver can't trace them.
      'import-x/no-unresolved': [
        'error',
        { ignore: ['@typescript-eslint/eslint-plugin', '@typescript-eslint/parser'] },
      ],
    },
  },
];
