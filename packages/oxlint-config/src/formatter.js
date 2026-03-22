import { defineConfig } from 'oxfmt';

export default defineConfig({
  arrowParens: 'avoid',
  printWidth: 120,
  singleQuote: true,
  sortImports: {
    groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],

    ignoreCase: true,
    'newlines-between': 'always',
    order: 'asc',
    sortSideEffects: true,
  },
});
