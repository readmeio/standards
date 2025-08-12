# @readme/standards

Core coding standards for ReadMe projects.

[![](https://raw.githubusercontent.com/readmeio/.github/main/oss-header.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/@readme/standards)](https://npm.im/@readme/standards) [![Build](https://github.com/readmeio/standards/workflows/CI/badge.svg)](https://github.com/readmeio/standards)

## Configs

<!-- prettier-ignore -->
| Config | Description |
| :-- | :--- |
| `@readme/standards/biome` | For projects that use [Biome](https://biomejs.dev/). |
| `@readme/standards/biome/esm` | &mdash; addon for ESM-only repositories.<sup>†</sup>  |
| `@readme/standards/biome/react` | &mdash; addon for React codebases.<sup>†‡</sup>  |
| `@readme/standards/prettier` | For projects that use [Prettier](https://prettier.io/). |

<sub>† This requires also using `@readme/standards/biome`.</sub>

<sub>‡ Though Biome supports linting React and JSX by default this supplemental is for additional rules that should apply **only** within React packages.</sub>

### Biome

### Installation

```sh
npm install --save-dev @biomejs/biome @readme/standards
```

### Usage

Create a `biome.jsonc` file with the following contents:

```json
{
  "extends": [
    "@readme/standards/biome"
    // "@readme/standards/biome/<supplemental>"
  ]
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
