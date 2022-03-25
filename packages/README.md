# @readme/eslint-config

Core coding standards for ReadMe projects.

[![](https://d3vv6lp55qjaqc.cloudfront.net/items/1M3C3j0I0s0j3T362344/Untitled-2.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/@readme/eslint-config)](https://npm.im/@readme/eslint-config) [![Build](https://github.com/readmeio/eslint-config/workflows/CI/badge.svg)](https://github.com/readmeio/eslint-config)

## Installation

You'll need to install [`ESLint`](https://www.npmjs.com/package/eslint) and [`Prettier`](https://www.npmjs.com/package/prettier) into your project. Use this shortcut to install them alongside the config (if using **npm 5+**):

```sh
npx install-peerdeps --dev @readme/eslint-config
```

If you already have `eslint` and `prettier` installed in your project you run this command to install the config:

```sh
npm install --save @readme/eslint-config
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
> **Note:** `@readme/eslint-config/*` subconfigs must be loaded alongside `@readme/eslint-config`, or at least take advantage of a root `.eslintrc` config that has `root` set to `true`.

* `@readme/eslint-config`
* `@readme/eslint-config/docs`
  * Will enforce JSDoc blocks throughout a codebase.
* `@readme/eslint-config/react`
* `@readme/eslint-config/testing`
  * This config assumes you're using [Jest](https://jestjs.io/), but if you're using [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) you should use `@readme/eslint-config/testing-mocha` instead.
* `@readme/eslint-config/typescript`
  * When using this you should tandem extend your config with `@readme/eslint-config` also.

### Prettier
Included in this is our shared Prettier config. You can use it in your application by adding the following to your `package.json`:

```json
"prettier": "@readme/eslint-config/prettier"
```
