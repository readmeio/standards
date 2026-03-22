import { defineConfig } from 'oxlint';

/**
 * This is the ESLint configuration ruleset from `eslint-plugin-jest` ported over for Oxlint.
 *
 * @see {@link https://npm.im/eslint-plugin-jest}
 */
const eslintPluginJestRules = {
  recommended: {
    'jest/expect-expect': 'warn',
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'warn',
    'jest/no-conditional-expect': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-done-callback': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error',
  },

  style: {
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
  },
};

export default defineConfig({
  plugins: ['jest'],
  globals: {
    jest: 'readonly',
    expect: 'readonly',
    describe: 'readonly',
    it: 'readonly',
    test: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
  },
  jsPlugins: ['eslint-plugin-readme'],
  rules: {
    ...eslintPluginJestRules.recommended,
    ...eslintPluginJestRules.style,

    'func-names': 'off',

    'jest/consistent-test-it': 'warn',

    'jest/no-disabled-tests': 'off',
    'jest/no-duplicate-hooks': 'warn',
    'jest/no-mocks-import': 'off',

    'jest/padding-around-after-all-blocks': 'warn',
    'jest/padding-around-after-each-blocks': 'warn',
    'jest/padding-around-before-all-blocks': 'warn',
    'jest/padding-around-before-each-blocks': 'warn',
    'jest/padding-around-describe-blocks': 'warn',
    'jest/padding-around-test-blocks': 'warn',

    'jest/prefer-expect-resolves': 'warn',
    'jest/prefer-hooks-on-top': 'warn',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-todo': 'warn',

    'jest/require-to-throw-message': 'error',

    'readme/json-parse-try-catch': 'off',

    // Sniff out tests that have useless `async` declarations. Since there's valid usecases for
    // having a function be async and not return or await a Promise, we're only running this rule
    // for tests where such a case isn't likely to be a thing.
    'require-await': 'error',
    'typescript/require-await': 'error',
  },
});
