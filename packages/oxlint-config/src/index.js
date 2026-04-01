import { defineConfig } from 'oxlint';

import airbnbCore from './airbnb.js';

export default defineConfig({
  extends: [airbnbCore],
  plugins: ['import', 'node', 'unicorn'],
  jsPlugins: ['eslint-plugin-readme', 'eslint-plugin-you-dont-need-lodash-underscore'],
  categories: {
    correctness: 'error',
  },
  rules: {
    'arrow-body-style': 'off' /** @todo we should enable this */,
    'func-names': 'off',

    'import/export': 'error',
    'import/first': 'error',
    'import/named': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/1117 */
    // 'import/newline-after-import': 'error',

    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': ['error', { allowArray: true, allowObject: true }],
    'import/no-cycle': ['error'],
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/1117 */
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: [
    //       'test/**',
    //       'tests/**',
    //       'spec/**',
    //       '**/__tests__/**',
    //       '**/__mocks__/**',
    //       'test.{js,jsx}',
    //       'test-*.{js,jsx}',
    //       '**/*{.,_}{test,spec}.{js,jsx}',
    //       '**/jest.config.js',
    //       '**/jest.setup.js',
    //       '**/vue.config.js',
    //       '**/webpack.config.js',
    //       '**/webpack.config.*.js',
    //       '**/rollup.config.js',
    //       '**/rollup.config.*.js',
    //       '**/gulpfile.js',
    //       '**/gulpfile.*.js',
    //       '**/Gruntfile{,.js}',
    //       '**/protractor.conf.js',
    //       '**/protractor.conf.*.js',
    //       '**/karma.conf.js',
    //       '**/.eslintrc.js',
    //       '**/eslint.config.js',
    //     ],
    //     optionalDependencies: false,
    //   },
    // ],

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/1117 */
    // 'import/no-import-module-exports': ['error', { exceptions: [] }],

    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-mutable-exports': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/1117 */
    // 'import/no-relative-packages': 'error',

    'import/no-self-import': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/1117 */
    // 'import/no-useless-path-segments': ['error', { commonjs: true }],

    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 'off',

    'no-restricted-imports': [
      'error',
      {
        paths: [
          // Unless explicitly allowed we are generaly anti-Lodash because most things we we would
          // use it for are available in in JS.
          'lodash',
        ],
      },
    ],

    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,

        // Not flagging unused variables on `catch(err)` is fine.
        caughtErrors: 'none',
      },
    ],

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/493 */
    // 'node/no-deprecated-api': 'error',

    'node/no-exports-assign': 'error',

    'prefer-destructuring': 'off',

    'readme/json-parse-try-catch': 'error',

    'unicorn/catch-error-name': ['error', { ignore: ['^(error|err|e)$'] }],
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/684 */
    // 'unicorn/import-style': 'error',

    'unicorn/new-for-builtins': 'error',
    'unicorn/no-instanceof-array': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/684 */
    // 'unicorn/no-unnecessary-polyfills': 'error',

    'unicorn/no-unreadable-array-destructuring': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/684 */
    // 'unicorn/no-unused-properties': 'error',

    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-undefined': 'warn',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',

    // We're comfortable using `debounce` out of Lodash instead of polyfilling them.
    'you-dont-need-lodash-underscore/throttle': 'off',
  },
});
