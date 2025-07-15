# @readme/standards

Core coding standards for ReadMe projects.

[![](https://raw.githubusercontent.com/readmeio/.github/main/oss-header.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/@readme/standards)](https://npm.im/@readme/standards) [![Build](https://github.com/readmeio/standards/workflows/CI/badge.svg)](https://github.com/readmeio/standards)

## Configs

<!-- prettier-ignore -->
| Config | Description |
| :-- | :--- |
| `@readme/eslint-config/biome` | For projects that use [Biome](https://biomejs.dev/). |
| `@readme/eslint-config/prettier` | For projects that use [Prettier](https://prettier.io/). |

### Biome

### Installation

```sh
npm install --save-dev @biomejs/biome @readme/standards
```

### Usage

Create a `biome.jsonc` file with the following contents:

```json
{
  "extends": ["@readme/standards/biome"]
}
```

By default this config does **not** enable auto-formatting. If you need that enabled you will have to turn it on with:

```json
{
  "formatter": {
    "enabled": true
  }
}
```

> [!NOTE]
> If you do use auto-formatting with Biome we recommend **not** also using `@readme/standards/prettier` as they two may collide.

### Prettier

### Installation

```sh
npm install --save-dev prettier @readme/standards
```

### Usage

Add the following into your `package.json`:

```json
"prettier": "@readme/standards/prettier"
```

> [!NOTE]
> If you use Biome and Prettier we recommend disabling Biome's auto-formatting by setting `formatter.enabled` to `false` as the two may collide.
