# @readme/eslint-config

ReadMe coding standards for API documentation.

[![](https://d3vv6lp55qjaqc.cloudfront.net/items/1M3C3j0I0s0j3T362344/Untitled-2.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/@readme/spectral-config)](https://npm.im/@readme/spectral-config) [![Build](https://github.com/readmeio/standards/workflows/CI/badge.svg)](https://github.com/readmeio/standards)

## Installation

```sh
npm install --save @readme/spectral-config
```

## Usage

Create a `.spectral.yml` file with the following contents:

```js
extends: '@readme/spectral-config'
```

## Rules

> **Note**
>
> This ruleset extends the core `oas` ruleset in Spectral. All of these rules are enabled by default.

| Rule | Description |
| :--- | :--- |
| `alex-component-summary` | Component schema summaries should have inclusive and considerate language. |
| `alex-component-descriptions` | Component schema description should have inclusive and considerate language. |
| `alex-operation-summary` | Operation summaries should have inclusive and considerate language. |
| `alex-operation-description` | Operation descriptions should have inclusive and considerate language.|
| `alex-parameter` | Operation parameters should have inclusive and considerate language. |
| `alex-response` | Operation responses should have inclusive and considerate language. |
| `description-sentence-punctuation` | Descriptions should have ending punctuation. |
