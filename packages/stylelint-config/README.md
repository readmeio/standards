# @readme/stylelint-config

ReadMe coding standards for all things style-related, specifically CSS and SCSS.

[![](https://d3vv6lp55qjaqc.cloudfront.net/items/1M3C3j0I0s0j3T362344/Untitled-2.png)](https://readme.io)

[![npm](https://img.shields.io/npm/v/@readme/stylelint-config)](https://npm.im/@readme/stylelint-config) [![Build](https://github.com/readmeio/standards/workflows/CI/badge.svg)](https://github.com/readmeio/standards)

## Installation

```sh
# Install the config as a dev dependency.
npm install --save-dev @readme/eslint-config
```

### Peer dependencies

You need to additionally install [Stylelint](https://www.npmjs.com/package/stylelint) and [PostCSS](https://www.npmjs.com/package/postcss) into your project. These are peer dependencies of `@readme/stylelint-config`, which can conveniently be installed either manually or using [`install-peerdeps`](https://www.npmjs.com/package/install-peerdeps).

```sh
# Install with "install-peerdeps"
npx install-peerdeps --dev @readme/stylelint-config
```

```sh
# Install manually
npm install --save-dev stylelint postcss
```

## Usage

Create a `stylelint.config.js` file with the following contents:

```js
module.exports = {
  extends: "@readme/stylelint-config",
};
```

## Testing

```sh
# Run unit tests
npm run test
```

```sh
# Run unit tests in watch mode
npm run test -- --watch
```

## Extended configs

We've adopted the following list of shared configs that remain actively maintained by the broader developer community.

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) - The standard shareable config for Stylelint.
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) - The standard shareable SCSS config for Stylelint.
- [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) - A stylelint config inspired by [sass-guidelin.es](https://sass-guidelin.es/).
- [stylelint-config-css-modules](https://github.com/pascalduez/stylelint-config-css-modules) - CSS modules shareable config for stylelint. Tweaks stylelint rules to accept [css modules](https://github.com/css-modules/css-modules) specific syntax.
- [stylelint-prettier/recommended](https://github.com/prettier/stylelint-prettier) - Runs Prettier as a Stylelint rule and reports differences as individual Stylelint issues.
