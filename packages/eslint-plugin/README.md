# eslint-plugin-readme

Custom ESLint plugin for some ReadMe engineering guidelines and gotchas.

[![](https://raw.githubusercontent.com/readmeio/.github/main/oss-header.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/@readme/eslint-plugin)](https://npm.im/@readme/eslint-plugin) [![Build](https://github.com/readmeio/standards/workflows/CI/badge.svg)](https://github.com/readmeio/standards)

## Usage

In `.eslintrc` file add the following line:

```js
extends: ['plugin:@readme/<config>'],
plugins: ['@readme'],
```

## 🔖 Available Configs

<!-- prettier-ignore-start -->

| Config | Description |
| :--- | :--- |
| `esm` | Rules specific to ESM libraries. |

<!-- prettier-ignore-end -->

## 📖 Rules

<!-- prettier-ignore-start -->

| Rule | Description | Config |
| :--- | :--- | :--- |
| [no-dual-exports](https://github.com/readmeio/standards/tree/main/packages/eslint-plugin/docs/no-dual-exports.md) | Prevent cases of having a file with dual `default` and named exports. | `esm` |

<!-- prettier-ignore-end -->
