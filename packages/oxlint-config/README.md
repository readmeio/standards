# @readme/oxlint-config

ReadMe coding standards for projects with [Oxlint](https://oxc.rs).

[![](https://raw.githubusercontent.com/readmeio/.github/main/oss-header.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/@readme/oxlint-config)](https://npm.im/@readme/oxlint-config) [![Build](https://github.com/readmeio/standards/workflows/CI/badge.svg)](https://github.com/readmeio/standards)

## Configs

| Config                             | Description                                            |
| :--------------------------------- | :----------------------------------------------------- |
| `@readme/oxlint-config`            | For projects that use [Oxlint](https://oxc.rs).        |
| `@readme/oxlint-config/typescript` | &mdash; addon for TypeScript repositories.<sup>†</sup> |

<sub>† This requires also using `@readme/oxlint-config`.</sub>

### Unit testing

<!-- prettier-ignore -->
| Config | Description |
| :-- | :--- |
| `@readme/oxlint-config/testing/jest` | Rules specific to the [Jest](https://jestjs.io/) test runner. |
| `@readme/oxlint-config/testing/vitest` | Rules specific to the [Vitest](https://vitest.dev/) test runner.

## Installation

```sh
npm install --save-dev oxlint @readme/oxlint-config
```

### Usage

Create a `oxlint.config.ts` file with the following contents:

```ts
import oxlintConfig from '@readme/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [oxlintConfig],
});
```
