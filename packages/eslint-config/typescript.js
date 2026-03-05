const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const perfPlugin = require('eslint-plugin-perfectionist');
const readmePlugin = require('eslint-plugin-readme');

module.exports = [
  js.configs.recommended,

  // typescript-eslint flat/recommended includes parser setup and base rules
  ...tsPlugin.configs['flat/recommended'],

  // readme typescript config (already flat format from eslint-plugin conversion)
  readmePlugin.configs.typescript,

  {
    plugins: {
      perfectionist: perfPlugin,
    },
    languageOptions: {
      parser: tsParser,
    },
    settings: {
      'import-x/resolver': 'typescript',
    },
    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-assertions': ['warn'],
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

      'import-x/extensions': [
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
      'import-x/no-unresolved': 'off',

      // TS ESLint plugin disables this and they neither say why, or how to get warned about it.
      // https://github.com/typescript-eslint/typescript-eslint/issues/3583
      // https://github.com/typescript-eslint/typescript-eslint/issues/1041
      'no-unreachable': 'error',

      // The stock `no-unused-vars` ESlint rule doesn't play with TS.
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          // Not flagging on `catch(err)` is fine because it's common to not use the caught error.
          caughtErrors: 'none',
        },
      ],

      // The stock `no-use-before-define` ESLint rule throws errors when TS interfaces, types, and
      // enums are used before they're defined -- eventhough in TS that's OK.
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],

      // The stock `no-shadow` ESLint rule throws false positive with TS enums.
      // https://github.com/typescript-eslint/typescript-eslint/issues/2483
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],

      'perfectionist/sort-enums': ['error', { type: 'natural', order: 'asc', sortByValue: 'always' }],
      'perfectionist/sort-interfaces': ['error', { type: 'natural', order: 'asc' }],
    },
  },
];
