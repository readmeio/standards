const prettierConfig = require('./prettier');

module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:sonarjs/recommended',
    'prettier',
    'prettier/prettier',
  ],
  plugins: ['eslint-comments', 'import', 'node', 'prettier', 'sonarjs', 'unicorn'],
  rules: {
    'arrow-body-style': 'off',

    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-unused-disable': 'error',

    'func-names': 'off',

    'import/order': 'off',
    'import/prefer-default-export': 'off',

    'no-cond-assign': ['error', 'except-parens'], // airbnb-base overrides the default
    'no-constructor-return': 'error',
    'no-dupe-else-if': 'error',
    'no-else-return': ['error', { allowElseIf: true }],

    'no-nested-ternary': 'off', // See also: `unicorn/no-nested-ternary`

    'no-restricted-imports': ['error', { paths: ['lodash'] }],

    // Disallow shadowing of any variable that isn't "err" as this is a common case that is acceptable.
    'no-shadow': ['error', { allow: ['err'] }],

    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-extraneous-require': 'error',

    'prefer-destructuring': 'off',

    'prettier/prettier': ['error', prettierConfig],

    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-collapsible-if': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-duplicated-branches': 'off',

    'unicorn/catch-error-name': ['error', { ignore: ['^(error|err|e)$'] }],
    // "unicorn/consistent-function-scoping": "error", // Maybe?
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/import-style': 'error',
    'unicorn/new-for-builtins': 'error',
    // 'unicorn/no-array-method-this-argument': 'error', // Maybe?
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-nested-ternary': 'off', // See also: `no-nested-ternary`
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-spread': 'error',
    // 'unicorn/no-useless-undefined': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',

    // We're comfortable using throttle and debounce out of Lodash instead of polyfilling them with something else.
    'you-dont-need-lodash-underscore/debounce': 'off',
    'you-dont-need-lodash-underscore/throttle': 'off',
  },
};
