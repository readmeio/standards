# @readme/eslint-config

Core coding standards for ReadMe projects.

[![](https://d3vv6lp55qjaqc.cloudfront.net/items/1M3C3j0I0s0j3T362344/Untitled-2.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/@readme/eslint-config)](https://npm.im/@readme/eslint-config) [![Build](https://github.com/readmeio/standards/workflows/CI/badge.svg)](https://github.com/readmeio/standards)

## Installation

You'll need to install [`ESLint`](https://www.npmjs.com/package/eslint) and [`Prettier`](https://www.npmjs.com/package/prettier) into your project. Use this shortcut to install them alongside the config (if using **npm 5+**):

```sh
npx install-peerdeps --dev @readme/eslint-config
```

If you already have `eslint` and `prettier` installed in your project you run this command to install the config:

```sh
npm install --save-dev @readme/eslint-config
```

## Usage

Create a `.eslintrc` file with the following contents:

```js
{
  "extends": [
    "@readme/eslint-config"
  ]
}
```

## Configs

<!-- prettier-ignore -->
| Config | Description |
| :-- | :--- |
| `@readme/eslint-config` | Rules for a pure JS codebase. |

### Specialties

> **Note**
> If you use one, or both of these, you should also extend `@readme/eslint-config`.

<!-- prettier-ignore -->
| Config | Description |
| :-- | :--- |
| `@readme/eslint-config/esm` | Rules for ESM codebases. |
| `@readme/eslint-config/react` | Rules for codebases that use React. |
| `@readme/eslint-config/typescript` | Rules for a TS codebase. |

### Unit testing

<!-- prettier-ignore -->
| Config | Description |
| :-- | :--- |
| `@readme/eslint-config/testing/jest` | Rules specific to the [Jest](https://jestjs.io/) test runner. |
| `@readme/eslint-config/testing/jest-dom` | Jest-specific rules for when testing, and using [jest-dom](https://npm.im/jest-dom). _Automaticaly imports `@readme/eslint-config/testing/jest`_. |
|`@readme/eslint-config/testing/react` | Rules specific to React codebases where you use [@testing-library/react](https://npm.im/@testing-library/react). Is specific to neither [Jest](https://jestjs.io/) or [Vitest](https://vitest.dev/).
| `@readme/eslint-config/testing/vitest` | Rules specific  to the [Vitest](https://vitest.dev/) test runner.

### Prettier

Included in this is our shared Prettier config. You can use it in your application by adding the following to your `package.json`:

```json
"prettier": "@readme/eslint-config/prettier"
```
