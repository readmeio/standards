module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:sonarjs/recommended',
    'prettier',
  ],
  plugins: ['node', 'prettier', 'unicorn'],
  rules: {
    'arrow-body-style': 'off',

    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-unused-disable': 'error',

    'func-names': 'off',

    'import/default': 'off',
    'import/named': 'off', // @fixme Disabling this for now, but there are some weird callouts with it.
    'import/order': 'off',

    'no-constructor-return': 'error',
    'no-dupe-else-if': 'error',
    'no-else-return': ['error', { allowElseIf: true }],

    // Disallow shadowing of any variable that isn't "err" as this is a common case that is acceptable.
    'no-shadow': ['error', { allow: ['err'] }],

    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-extraneous-require': 'error',

    'prefer-destructuring': 'off',

    'prettier/prettier': 'error',

    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-collapsible-if': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-duplicated-branches': 'off',
    'sonarjs/no-identical-functions': 'off', // @todo We should fix these.
    'sonarjs/prefer-immediate-return': 'off', // @todo We should fix these.

    'unicorn/catch-error-name': ['error', { caughtErrorsIgnorePattern: '^(error|err|e)$' }],
    // "unicorn/consistent-function-scoping": "error", // Maybe?
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-array-instanceof': 'error',
    // "unicorn/no-for-loop": "error", // Maybe?
    'no-nested-ternary': 'off', // Disabled in favor of `unicorn/no-nested-ternary` which has better nesting detection.
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    // "unicorn/no-unsafe-regex": "error", // @todo We should resolve these.
    'unicorn/no-unused-properties': 'error',
    // "unicorn/prefer-includes": "error", // Maybe?
    // "unicorn/prefer-query-selector": "error", // Maybe?
    'unicorn/prefer-starts-ends-with': 'off', // @todo We should resolve these.
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
  },
};
