# eslint-plugin-readme

An ESLint plugin providing custom rules for ReadMe's coding standards.

[![](https://raw.githubusercontent.com/readmeio/.github/main/oss-header.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/eslint-plugin-readme)](https://npm.im/eslint-plugin-readme) [![Build](https://github.com/readmeio/standards/workflows/CI/badge.svg)](https://github.com/readmeio/standards)

## Usage

In `.eslintrc` file add the following line:

```js
extends: ['plugin:readme/<config>'],
plugins: ['readme'],
```

## 📖 Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
⚠️ Configurations set to warn in.\
📁 Set in the `esm` configuration.\
🏡 Set in the `react` configuration.\
🧠 Set in the `typescript` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                                                                                                            | Description                                                                         | 💼  | ⚠️  | 🔧  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- | :-- | :-- | :-- |
| [no-decorators-on-private-properties](https://github.com/readmeio/standards/tree/main/packages/eslint-plugin/docs/rules/no-decorators-on-private-properties.md) | Prevent the use of decorators on private properties as they cannot be introspected. | 🧠  |     |     |
| [no-dual-exports](https://github.com/readmeio/standards/tree/main/packages/eslint-plugin/docs/rules/no-dual-exports.md)                                         | Prevent cases of having a file with dual `default` and named exports.               | 📁  |     |     |
| [prefer-typescript](https://github.com/readmeio/standards/tree/main/packages/eslint-plugin/docs/rules/prefer-typescript.md)                                     | Prefer using TypeScript within a codebase.                                          |     |     |     |
| [prefer-unicode-ellipsis](https://github.com/readmeio/standards/tree/main/packages/eslint-plugin/docs/rules/prefer-unicode-ellipsis.md)                         | Prefer using a unicode ellipsis (`…`) instead of three periods (`...`).             |     | 🏡  | 🔧  |

<!-- end auto-generated rules list -->
