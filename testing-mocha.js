module.exports = {
  extends: ['plugin:mocha/recommended'],
  plugins: ['import', 'mocha', 'node'],
  rules: {
    'import/no-extraneous-dependencies': 'off',

    // Disabling this because some Chai assertions trigger it.
    'no-unused-expressions': 'off',

    'node/no-extraneous-require': 'off',

    // Sniff out tests that have useless `async` declarations. Since there's valid usecases for
    // having a function be async and not return or await a Promise, we're only running this rule
    // for tests where such a case isn't likely to be a thing.
    'require-await': 'error',
  },
};
