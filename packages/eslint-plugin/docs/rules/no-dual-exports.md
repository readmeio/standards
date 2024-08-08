# Prevent cases of having a file with dual `default` and named exports (`readme/no-dual-exports`)

💼 This rule is enabled in the 📁 `esm` config.

<!-- end auto-generated rule header -->

In libraries that support CJS and ESM environments, having a file that has a `default` **and** a named export makes that file incompatible with CJS environments due to the way that CJS resolution works in that case. To resolve this, a file should either have a single `default` export, or it should only be comprised of named exports. You cannot have both.

## Fail

```ts
export interface ReducerOptions {
  paths?: Record<string, string[] | '*'>;
  tags?: string[];
}

export default function reducer(definition: OASDocument, opts: ReducerOptions = {}) {
  /** code here */
}
```

## Pass

```ts
export interface ReducerOptions {
  paths?: Record<string, string[] | '*'>;
  tags?: string[];
}

export function reducer(definition: OASDocument, opts: ReducerOptions = {}) {
  /** code here */
}
```

```js
export default class SDK {}
```
