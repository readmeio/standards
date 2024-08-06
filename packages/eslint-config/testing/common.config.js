/** @type {import("eslint-define-config").ESLintConfig} */
const config = {
  plugins: ['import', 'node'],
  rules: {
    // A failing `JSON.parse()` will fail the unit test it's in so it's safe to ignore.
    'try-catch-failsafe/json-parse': 'off',

    'func-names': 'off',

    'import/no-extraneous-dependencies': 'off',

    'node/no-extraneous-require': 'off',

    // Sniff out tests that have useless `async` declarations. Since there's valid usecases for
    // having a function be async and not return or await a Promise, we're only running this rule
    // for tests where such a case isn't likely to be a thing.
    'require-await': 'error',
  },
};

module.exports = config;
