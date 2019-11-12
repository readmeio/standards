module.exports = {
  extends: ["plugin:jest/recommended", "plugin:jest/style"],
  plugins: ["jest"],
  env: {
    "jest/globals": true
  },
  rules: {
    "jest/consistent-test-it": 1,
    "jest/expect-expect": 1,
    "jest/no-disabled-tests": 0,
    "jest/no-duplicate-hooks": 1,
    "jest/no-expect-resolves": 1,
    "jest/no-if": 2,
    "jest/prefer-hooks-on-top": 1,
    "jest/prefer-strict-equal": 2,
    "jest/valid-describe": 2,
    "jest/valid-title": 1
  }
};
