/** @type {import("eslint-define-config").ESLintConfig} */
const config = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:typescript-sort-keys/recommended', 'plugin:readme/typescript'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': 'typescript',
  },
  rules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': 'error',

    // Disable requiring return types because it's too easy to broaden them by accident.
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // The stock `default-param-last` ESlint rule doesn't play with TS.
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],

    '@typescript-eslint/no-empty-function': 'off',

    '@typescript-eslint/sort-type-constituents': 'error',

    'func-names': 'error',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Disabling this rule in TS code because TS handles this sort of error for us automatically.
    'import/no-unresolved': 'off',

    // TS ESLint plugin disables this and they neither say why, or how to get warned about it.
    // https://github.com/typescript-eslint/typescript-eslint/issues/3583
    // https://github.com/typescript-eslint/typescript-eslint/issues/1041
    'no-unreachable': 'error',

    // The stock `no-unused-vars` ESlint rule doesn't play with TS.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    // The stock `no-use-before-define` ESLint rule throws errors when TS interfaces, types, and
    // enums are used before they're defined -- eventhough in TS that's OK.
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    // The stock `no-shadow` ESLint rule throws false positive with TS enums.
    // https://github.com/typescript-eslint/typescript-eslint/issues/2483
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};

module.exports = config;
