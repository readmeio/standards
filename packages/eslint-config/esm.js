/** @type {import("eslint-define-config").ESLintConfig} */
const config = {
  extends: ['plugin:require-extensions/recommended'],
  plugins: ['require-extensions', 'unicorn'],
  rules: {
    // see here for more rules to possibly enable in the future:
    // https://gist.github.com/Jaid/164668c0151ae09d2bc81be78a203dd5
    'import/no-commonjs': 'error',

    /**
     * This rule enablement is generally only intended for public-facing libraries but when shipping
     * a package that exports CJS and ESM exports you cannot do `export default` and also
     * `export type` in the same file because `export default` gets translated to `export =` in CJS
     * and TS types can't be layered on top of that.
     *
     * @see {@link https://github.com/isaacs/tshy#handling-default-exports}
     */
    'import/no-default-export': 'error',

    'node/no-extraneous-import': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-node-protocol': 'error',
  },
};

module.exports = config;
