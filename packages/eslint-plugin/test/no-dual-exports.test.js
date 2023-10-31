const { RuleTester } = require('eslint');

const { rules } = require('..');

const ruleTester = new RuleTester({
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    requireConfigFile: false,
  },
});

const errorMessage =
  "In a dual package world you cannot ship a file for CJS environments that has a mix of `default` and named exports. This export should either be made a named export or refactor this file to have just one export that's a defaut.";

ruleTester.run('no-dual-exports', rules['no-dual-exports'], {
  valid: [
    {
      code: 'export class ReducerOptions {}',
    },
    {
      code: 'export default class ReducerOptions {}',
    },
    {
      code: 'export default function reducer(definition, opts) {}',
    },
    {
      code: `export class ReducerOptions {}

      export function reducer(definition, opts) {}`,
    },
  ],
  invalid: [
    {
      code: `export class ReducerOptions {}

      export default function reducer(definition, opts) {}`,
      errors: [{ message: errorMessage }],
    },
    {
      code: `const buster = "buster";
      export function getDogName() {};

      export default buster = buster;`,
      errors: [{ message: errorMessage }],
    },
  ],
});
