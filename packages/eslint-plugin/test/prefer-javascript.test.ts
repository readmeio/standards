import tsParser from '@typescript-eslint/parser';
import { RuleTester } from 'eslint';

import plugin from '../src';

const ruleTester = new RuleTester({
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 2022,
    },
  },
});

const errorMessage = 'Pure Javascript is preferred within this codebase.';

ruleTester.run('prefer-javascript', plugin.rules['prefer-javascript'], {
  valid: [
    { filename: 'file.js', code: '/** this is a JS file */' },
    { filename: 'file.jsx', code: '/** this is a JSX file */' },
    { filename: 'file.cjs', code: '/** this is a CJS file */' },
    { filename: 'file.cjsx', code: '/** this is a CJSX file */' },
    { filename: 'file.mjs', code: '/** this is a MJS file */' },
    { filename: 'file.mjsx', code: '/** this is a MJSX file */' },
  ],
  invalid: [
    {
      filename: 'file.ts',
      code: '/** this is a TS file */',
      errors: [{ message: errorMessage }],
    },
    {
      filename: 'file.tsx',
      code: '/** this is a TSX file */',
      errors: [{ message: errorMessage }],
    },
    {
      filename: 'file.cts',
      code: '/** this is a CTS file */',
      errors: [{ message: errorMessage }],
    },
    {
      filename: 'file.ctsx',
      code: '/** this is a CTSX file */',
      errors: [{ message: errorMessage }],
    },
    {
      filename: 'file.mts',
      code: '/** this is a MTS file */',
      errors: [{ message: errorMessage }],
    },
    {
      filename: 'file.mtsx',
      code: '/** this is a MTSX file */',
      errors: [{ message: errorMessage }],
    },
  ],
});
