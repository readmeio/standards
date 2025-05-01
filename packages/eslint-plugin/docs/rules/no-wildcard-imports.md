# Ban wildcard imports (`import * as something`) from libraries (`readme/no-wildcard-imports`)

💼 This rule is enabled in the following configs: 📁 `esm`, ⚛️ `react`.

<!-- end auto-generated rule header -->

Importing libraries as `*` makes treeshaking very difficult as you are loading **everything**. By default this rule will ban all `*` imports however you can configure it to exempt specific modules if they must be loaded that way (like `@sentry/node`).

## Fail

```js
import * as dateFns from 'date-fns';
```

## Pass

```js
/*eslint readme/no-wildcard-imports: ["error", { allow: ['@sentry/node'] }]*/

import * as Sentry from '@sentry/node';
```

## Options

### `allow`

Type: `array`

You can exempt specific libraries like this:

```js
'readme/no-wildcard-imports': [
  'error',
  {
    allow: ['@sentry/node'],
  }
]
```

### `message`

Type: `string`

You can customize the default error message like this:

You can exempt specific libraries like this:

```js
'readme/no-wildcard-imports': [
  'error',
  {
    message: 'You should avoid wildcard imports because it can impact overall performance and memory usage.',
  },
],
```
