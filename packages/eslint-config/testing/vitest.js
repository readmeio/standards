const merge = require('lodash/merge');

const common = require('./common.config');

/** @type {import("eslint-define-config").ESLintConfig} */
const config = merge(common, {
  extends: ['plugin:@vitest/legacy-all'],
  plugins: ['@vitest'],
  rules: {
    '@vitest/max-expects': 'off',
    '@vitest/no-conditional-in-test': 'off',
    '@vitest/no-conditional-tests': 'off',

    '@vitest/no-focused-tests': [
      'warn',
      {
        // This rule defaults to fixing issues by default but if we have VSCode configured to
        // automatically fix all fixable issues on save any `.only` in a test will be removed every
        // time -- essentially making `.only` impossible to use unless you explicitly save with
        // "save without formatting". Very annoying!
        fixable: false,
      },
    ],

    '@vitest/no-hooks': 'off',
    '@vitest/no-test-return-statement': 'off',

    '@vitest/padding-around-all': 'off',
    '@vitest/padding-around-expect-groups': 'off',

    '@vitest/prefer-expect-assertions': 'off',
    '@vitest/prefer-lowercase-title': 'off',
    '@vitest/prefer-to-be-falsy': 'off',
    '@vitest/prefer-to-be-truthy': 'off',
    '@vitest/prefer-snapshot-hint': 'off',
    '@vitest/prefer-spy-on': 'off',
    '@vitest/require-top-level-describe': 'off',
  },
});

module.exports = config;
