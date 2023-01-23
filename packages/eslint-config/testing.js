module.exports = {
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:testing-library/react',
  ],
  plugins: ['import', 'jest', 'jest-dom', 'node', 'testing-library'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'func-names': 'off',

    'import/no-extraneous-dependencies': 'off',

    'jest/consistent-test-it': ['warn', { fn: 'test', withinDescribe: 'it' }],
    'jest/no-disabled-tests': 'off',
    'jest/no-duplicate-hooks': 'warn',
    'jest/no-if': 'error',
    'jest/prefer-expect-resolves': 'warn',
    'jest/prefer-hooks-on-top': 'warn',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-todo': 'warn',
    'jest/require-to-throw-message': 'error',

    'node/no-extraneous-require': 'off',

    // Sniff out tests that have useless `async` declarations. Since there's valid usecases for
    // having a function be async and not return or await a Promise, we're only running this rule
    // for tests where such a case isn't likely to be a thing.
    'require-await': 'error',
  },
};
