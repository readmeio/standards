# @readme/eslint-config

Core coding standards for ReadMe projects.

[![](https://d3vv6lp55qjaqc.cloudfront.net/items/1M3C3j0I0s0j3T362344/Untitled-2.png)](https://readme.io)

## Installation

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
* `@readme/eslint-config/react`
* `@readme/eslint-config/testing`

## Contributing
To assist in cleaner commit logs and a better changelog, all commit messages must be formatted against the https://commitlint.js.org/ standards.

See [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) for some more information.
