import { RuleTester } from 'eslint';

import plugin from '../src';

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

ruleTester.run('prefer-unicode-ellipsis', plugin.rules['prefer-unicode-ellipsis'], {
  valid: [
    {
      code: 'console.log("buster…");',
    },
    {
      code: '<span>&nbsp;Saving…</span>',
    },
    {
      code: `<Notification className={classes['Notification-Save']} color="graphite">
      <Spinner />
      &nbsp;Saving…
    </Notification>`,
    },
  ],
  invalid: [
    {
      code: 'console.log("buster...");',
      errors: [
        {
          message: 'Ellipsis should be written as `…`.',
        },
      ],
      output: 'console.log("buster…");',
    },
    {
      code: '<span>&nbsp;Saving...</span>',
      errors: [
        {
          message: 'Ellipsis should be written as `…`.',
        },
      ],
      output: '<span>&nbsp;Saving…</span>',
    },
    {
      code: '<Notification className={classes[\'Notification-Save\']} color="graphite">&nbsp;Saving...</Notification>',
      errors: [
        {
          message: 'Ellipsis should be written as `…`.',
        },
      ],
      output: '<Notification className={classes[\'Notification-Save\']} color="graphite">&nbsp;Saving…</Notification>',
    },
  ],
});
