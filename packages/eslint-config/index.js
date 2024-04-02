// The following are ESLint rules that collide with our Prettier config. If we don't disable these
// then code formatted by Prettier will cause ESLint to throw errors.
const prettierOverrides = {
  'arrow-body-style': 'off',
  'arrow-parens': 'off',
  'object-curly-newline': 'off',
  'operator-linebreak': 'off',
  'prefer-arrow-callback': 'off',
};

/** @type {import("eslint-define-config").ESLintConfig} */
const config = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:you-dont-need-lodash-underscore/compatible',
  ],
  plugins: ['node', 'unicorn'],
  // @ts-ignore `prettierOverrides` is compatible with `rules` this isn't TS for us to type that.
  rules: {
    ...prettierOverrides,

    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-unused-disable': 'error',

    // This rule is enabled in our `typescript` config, eventually it will be enabled here as well.
    'func-names': 'off',

    'import/no-anonymous-default-export': ['error', { allowArray: true, allowObject: true }],

    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],

    'import/prefer-default-export': 'off',

    'no-cond-assign': ['error', 'except-parens'], // airbnb-base overrides the default
    'no-constructor-return': 'error',
    'no-dupe-else-if': 'error',
    'no-else-return': ['error', { allowElseIf: true }],

    'no-nested-ternary': 'off', // See also: `unicorn/no-nested-ternary`

    'no-restricted-imports': ['error', { paths: ['lodash'] }],

    // Disallow shadowing of any variable that isn't "err" as this is a common case that is
    // acceptable.
    'no-shadow': ['error', { allow: ['err'] }],

    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-extraneous-require': 'error',

    'prefer-destructuring': 'off',

    // The `eslint-config-airbnb-base` that we extend off of doesn't have any rules for catching for
    // templated strings that aren't templates.
    quotes: ['error', 'single', { avoidEscape: true }],

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
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    // 'unicorn/no-useless-undefined': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',

    // We're comfortable using throttle and debounce out of Lodash instead of polyfilling them with
    // something else.
    'you-dont-need-lodash-underscore/debounce': 'off',
    'you-dont-need-lodash-underscore/throttle': 'off',
  },
};

module.exports = config;
