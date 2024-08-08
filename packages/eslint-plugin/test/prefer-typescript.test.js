const { RuleTester } = require('eslint');

const { rules } = require('..');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2022,
    requireConfigFile: false,
  },
});

const errorMessage = 'TypeScript is preferred within this codebase.';

ruleTester.run('prefer-typescript', rules['prefer-typescript'], {
  valid: [
    { filename: 'file.ts', code: '/** this is a TS file */' },
    { filename: 'file.tsx', code: '/** this is a TSX file */' },
    { filename: 'file.cts', code: '/** this is a CTS file */' },
    { filename: 'file.ctsx', code: '/** this is a CTSX file */' },
    { filename: 'file.mts', code: '/** this is a MTS file */' },
    { filename: 'file.mtsx', code: '/** this is a MTSX file */' },
  ],
  invalid: [
    {
      filename: 'file.js',
      code: '/** this is a JS file */',
      errors: [{ message: errorMessage }],
      output: '/** this is a JS file */',
    },
    {
      filename: 'file.jsx',
      code: '/** this is a JSX file */',
      errors: [{ message: errorMessage }],
      output: '/** this is a JSX file */',
    },
    {
      filename: 'file.cjs',
      code: '/** this is a CJS file */',
      errors: [{ message: errorMessage }],
      output: '/** this is a CJS file */',
    },
    {
      filename: 'file.cjsx',
      code: '/** this is a CJSX file */',
      errors: [{ message: errorMessage }],
      output: '/** this is a CJSX file */',
    },
    {
      filename: 'file.mjs',
      code: '/** this is a MJS file */',
      errors: [{ message: errorMessage }],
      output: '/** this is a MJS file */',
    },
    {
      filename: 'file.mjsx',
      code: '/** this is a MJSX file */',
      errors: [{ message: errorMessage }],
      output: '/** this is a MJSX file */',
    },
  ],
});
