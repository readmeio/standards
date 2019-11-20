module.exports = {
  extends: ["plugin:jest/recommended", "plugin:jest/style"],
  plugins: ["jest"],
  env: {
    "jest/globals": true
  },
  rules: {
    "jest/consistent-test-it": "warn",
    "jest/expect-expect": "warn",
    "jest/no-disabled-tests": "off",
    "jest/no-duplicate-hooks": "warn",
    "jest/no-expect-resolves": "warn",
    "jest/no-if": "error",
    "jest/prefer-hooks-on-top": "warn",
    "jest/prefer-strict-equal": "error",
    "jest/valid-describe": "error",
    "jest/valid-title": "warn",

    "import/no-extraneous-dependencies": "off",
    "node/no-extraneous-require": "off",

    "sonarjs/no-identical-functions": "off"
  }
};
