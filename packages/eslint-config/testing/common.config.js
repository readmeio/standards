// Note: this config is always used alongside the base config (index.js), which already registers
// the `import` and `n` plugins. We only set rule overrides here — no plugin re-registration —
// to avoid "Cannot redefine plugin" errors from conflicting object references.
module.exports = [
  {
    rules: {
      // A failing `JSON.parse()` will fail the unit test it's in so it's safe to ignore.
      'readme/json-parse-try-catch': 'off',

      'func-names': 'off',

      'import-x/no-extraneous-dependencies': 'off',

      'n/no-extraneous-require': 'off',

      // Sniff out tests that have useless `async` declarations. Since there's valid usecases for
      // having a function be async and not return or await a Promise, we're only running this rule
      // for tests where such a case isn't likely to be a thing.
      'require-await': 'error',
    },
  },
];
