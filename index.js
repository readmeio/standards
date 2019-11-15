module.exports = {
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
  ],
  plugins: ["node"],
  rules: {
    "arrow-body-style": "off",

    "eslint-comments/disable-enable-pair": ["error", {"allowWholeFile": true}],

    "func-names": "off",

    "import/default": "off",
    "import/named": "off", // @fixme Disabling this for now, but there are some weird callouts with it.
    "import/order": "off",

    // Disallow shadowing of any variable that isn't "err" as this is a common case that is acceptable
    "no-shadow": ["error", {"allow": ["err"]}],

    "node/no-deprecated-api": "error",
    "node/no-exports-assign": "error",
    "node/no-extraneous-require": "error",

    "prefer-destructuring": "off",
  }
};
