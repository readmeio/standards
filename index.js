module.exports = {
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
  ],
  rules: {
    "arrow-body-style": "off",
    "func-names": "off",

    "import/default": "off",
    "import/named": "off", // @fixme Disabling this for now, but there are some weird callouts with it.
    "import/order": "off",

    // Disallow shadowing of any variable that isn't "err" as this is a common case that is acceptable
    "no-shadow": ["error", {"allow": ["err"]}],

    "prefer-destructuring": "off",
  }
};
