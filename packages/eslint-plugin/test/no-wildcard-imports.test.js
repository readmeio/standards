const { RuleTester } = require('eslint');

const { rules } = require('..');

const ruleTester = new RuleTester({
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    ecmaVersion: 2022,
    requireConfigFile: false,
  },
});

ruleTester.run('no-wildcard-imports', rules['no-wildcard-imports'], {
  valid: [
    { name: 'allow default import', code: "import lodash from 'lodash';" },
    { name: 'allow default import (explicit)', code: "import { default as lodash } from 'lodash';" },
    { name: 'allow named import', code: "import { flatten } from 'lodash';" },
    {
      name: 'allow wildcard import if configured',
      code: "import * as Sentry from '@sentry/node';",
      options: [
        {
          allow: ['@sentry/node'],
        },
      ],
    },
  ],
  invalid: [
    {
      name: 'restrict wildcard import',
      code: "import * as Sentry from '@sentry/node';",
      errors: [
        {
          message:
            'Loading everything out of a library should be avoided because it makes treeshaking difficult and leads to larger bundle sizes.',
        },
      ],
    },
  ],
});
