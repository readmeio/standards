import { defineConfig } from 'oxlint';

/**
 * This is the ESLint configuration ruleset from `eslint-plugin-vitest` ported over for Oxlint.
 *
 * @see {@link https://npm.im/eslint-plugin-vitest}
 */
const eslintPluginViestRules = {
  all: {
    'vitest/consistent-each-for': 'warn',
    'vitest/consistent-test-filename': 'warn',
    'vitest/consistent-test-it': 'warn',
    'vitest/consistent-vitest-vi': 'warn',
    'vitest/expect-expect': 'warn',
    'vitest/hoisted-apis-on-top': 'warn',
    'vitest/max-expects': 'warn',
    'vitest/max-nested-describe': 'warn',
    'vitest/no-alias-methods': 'warn',
    'vitest/no-commented-out-tests': 'warn',
    'vitest/no-conditional-expect': 'warn',
    'vitest/no-conditional-in-test': 'warn',
    'vitest/no-conditional-tests': 'warn',
    'vitest/no-disabled-tests': 'warn',
    'vitest/no-duplicate-hooks': 'warn',
    'vitest/no-focused-tests': 'warn',
    'vitest/no-hooks': 'warn',
    'vitest/no-identical-title': 'warn',
    'vitest/no-import-node-test': 'warn',
    'vitest/no-importing-vitest-globals': 'off',
    'vitest/no-interpolation-in-snapshots': 'warn',
    'vitest/no-large-snapshots': 'warn',
    'vitest/no-mocks-import': 'warn',
    'vitest/no-restricted-matchers': 'warn',
    'vitest/no-restricted-vi-methods': 'warn',
    'vitest/no-standalone-expect': 'warn',
    'vitest/no-test-prefixes': 'warn',
    'vitest/no-test-return-statement': 'warn',
    'vitest/no-unneeded-async-expect-function': 'warn',
    'vitest/padding-around-after-all-blocks': 'warn',
    'vitest/padding-around-after-each-blocks': 'warn',
    'vitest/padding-around-all': 'warn',
    'vitest/padding-around-before-all-blocks': 'warn',
    'vitest/padding-around-before-each-blocks': 'warn',
    'vitest/padding-around-describe-blocks': 'warn',
    'vitest/padding-around-expect-groups': 'warn',
    'vitest/padding-around-test-blocks': 'warn',
    'vitest/prefer-called-exactly-once-with': 'warn',
    'vitest/prefer-called-once': 'off',
    'vitest/prefer-called-times': 'warn',
    'vitest/prefer-called-with': 'warn',
    'vitest/prefer-comparison-matcher': 'warn',
    'vitest/prefer-describe-function-title': 'warn',
    'vitest/prefer-each': 'warn',
    'vitest/prefer-equality-matcher': 'warn',
    'vitest/prefer-expect-assertions': 'warn',
    'vitest/prefer-expect-resolves': 'warn',
    'vitest/prefer-expect-type-of': 'warn',
    'vitest/prefer-hooks-in-order': 'warn',
    'vitest/prefer-hooks-on-top': 'warn',
    'vitest/prefer-import-in-mock': 'warn',
    'vitest/prefer-importing-vitest-globals': 'warn',
    'vitest/prefer-lowercase-title': 'warn',
    'vitest/prefer-mock-promise-shorthand': 'warn',
    'vitest/prefer-snapshot-hint': 'warn',
    'vitest/prefer-spy-on': 'warn',
    'vitest/prefer-strict-boolean-matchers': 'warn',
    'vitest/prefer-strict-equal': 'warn',
    'vitest/prefer-to-be-falsy': 'off',
    'vitest/prefer-to-be-object': 'warn',
    'vitest/prefer-to-be-truthy': 'off',
    'vitest/prefer-to-be': 'warn',
    'vitest/prefer-to-contain': 'warn',
    'vitest/prefer-to-have-been-called-times': 'warn',
    'vitest/prefer-to-have-length': 'warn',
    'vitest/prefer-todo': 'warn',
    'vitest/prefer-vi-mocked': 'warn',
    'vitest/require-awaited-expect-poll': 'warn',
    'vitest/require-hook': 'warn',
    'vitest/require-local-test-context-for-concurrent-snapshots': 'warn',
    'vitest/require-mock-type-parameters': 'warn',
    'vitest/require-test-timeout': 'off',
    'vitest/require-to-throw-message': 'warn',
    'vitest/require-top-level-describe': 'warn',
    'vitest/unbound-method': 'warn',
    'vitest/valid-describe-callback': 'warn',
    'vitest/valid-expect-in-promise': 'warn',
    'vitest/valid-expect': 'warn',
    'vitest/valid-title': 'warn',
  },
};

export default defineConfig({
  plugins: ['vitest'],
  jsPlugins: ['eslint-plugin-readme'],
  rules: {
    ...eslintPluginViestRules.all,

    'func-names': 'off',

    'readme/json-parse-try-catch': 'off',

    // Sniff out tests that have useless `async` declarations. Since there's valid usecases for
    // having a function be async and not return or await a Promise, we're only running this rule
    // for tests where such a case isn't likely to be a thing.
    'require-await': 'error',
    'typescript/require-await': 'error',

    'vitest/max-expects': 'off',
    'vitest/no-conditional-in-test': 'off',
    'vitest/no-conditional-tests': 'off',

    // This rule is autofixable by default and does not give you a way to disable that like
    // `eslint-plugin-vitest` does. If we leave this enabled as a `warn` then anytime you change a
    // test to be focused and save it'll be autofixed and undone every time.
    'vitest/no-focused-tests': 'off',

    'vitest/no-hooks': 'off',
    'vitest/no-test-return-statement': 'off',

    'vitest/padding-around-all': 'off',
    'vitest/padding-around-expect-groups': 'off',

    'vitest/prefer-describe-function-title': 'off',
    'vitest/prefer-expect-assertions': 'off',
    'vitest/prefer-lowercase-title': 'off',
    'vitest/prefer-to-be-falsy': 'off',
    'vitest/prefer-to-be-truthy': 'off',
    'vitest/prefer-snapshot-hint': 'off',
    'vitest/prefer-spy-on': 'off',
    'vitest/require-top-level-describe': 'off',
  },
});
