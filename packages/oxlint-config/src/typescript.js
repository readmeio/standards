import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['typescript'],
  jsPlugins: ['eslint-plugin-perfectionist', 'eslint-plugin-readme', 'eslint-plugin-you-dont-need-lodash-underscore'],
  rules: {
    'func-names': 'error',

    'perfectionist/sort-enums': ['error', { type: 'natural', order: 'asc', sortByValue: 'always' }],
    'perfectionist/sort-interfaces': ['error', { type: 'natural', order: 'asc' }],

    'readme/no-decorators-on-private-properties': 'error',

    'typescript/array-type': 'error',
    'typescript/ban-ts-comment': [
      'warn',
      {
        'ts-check': 'allow-with-description',
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
      },
    ],

    'typescript/consistent-indexed-object-style': 'error',
    'typescript/consistent-type-assertions': ['warn'],
    'typescript/consistent-type-definitions': ['error', 'interface'],
    'typescript/consistent-type-imports': 'error',

    // Disable requiring return types because it's too easy to broaden them by accident.
    'typescript/explicit-module-boundary-types': 'off',

    'typescript/no-duplicate-enum-values': 'off',
    'typescript/no-empty-object-type': 'error',
    'typescript/no-extra-non-null-assertion': 'error',
    'typescript/no-explicit-any': 'off',
    'typescript/no-misused-new': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-asserted-optional-chain': 'error',
    'typescript/no-require-imports': 'error',
    'typescript/no-this-alias': 'error',
    'typescript/no-unnecessary-type-constraint': 'error',
    'typescript/no-unsafe-declaration-merging': 'error',
    'typescript/no-unsafe-function-type': 'error',
    'typescript/no-wrapper-object-types': 'error',
    'typescript/prefer-as-const': 'error',
    'typescript/prefer-namespace-keyword': 'error',
    'typescript/triple-slash-reference': 'error',
  },
});
