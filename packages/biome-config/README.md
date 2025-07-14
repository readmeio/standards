# @readme/biome-config

Core coding standards for ReadMe projects using [Biome](https://biomejs.dev/).

[![](https://raw.githubusercontent.com/readmeio/.github/main/oss-header.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/@readme/biome-config)](https://npm.im/@readme/biome-config) [![Build](https://github.com/readmeio/standards/workflows/CI/badge.svg)](https://github.com/readmeio/standards)

## Installation

You'll need to install [Biome](https://biomejs.dev/) into your project. Use this shortcut to install them alongside the config:

```sh
npm install --save-dev @biomejs/biome
```

If you already have Biome installed in your project you run this command to install the config:

```sh
npm install --save-dev @readme/biome-config
```

## Usage

Create a `biome.jsonc` file with the following contents:

```json
{
  "extends": ["@readme/biome-config"]
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
