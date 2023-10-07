# @readme/spectral-config

ReadMe coding standards for API documentation, using [Spectral](https://github.com/stoplightio/spectral) linting rules.

[![](https://raw.githubusercontent.com/readmeio/.github/main/oss-header.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/@readme/spectral-config)](https://npm.im/@readme/spectral-config) [![Build](https://github.com/readmeio/standards/workflows/CI/badge.svg)](https://github.com/readmeio/standards)

## Installation

```sh
npm install --save @readme/spectral-config
```

## Usage

Create a `.spectral.yml` file with the following contents:

```yaml
extends: '@readme/spectral-config'
```

## Rules

> **Note**
>
> This ruleset extends the core `oas` ruleset in Spectral. All of these rules are enabled by default.

<!-- prettier-ignore -->
| Rule | Description |
| :--- | :--- |
| `alex-component-summary` | Component schema summaries should have inclusive and considerate language. |
| `alex-component-descriptions` | Component schema description should have inclusive and considerate language. |
| `alex-operation-summary` | Operation summaries should have inclusive and considerate language. |
| `alex-operation-description` | Operation descriptions should have inclusive and considerate language.|
| `alex-parameter` | Operation parameters should have inclusive and considerate language. |
| `alex-response` | Operation responses should have inclusive and considerate language. |
| `description-sentence-punctuation` | Descriptions should have ending punctuation. |
