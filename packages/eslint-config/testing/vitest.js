const merge = require('lodash/merge');

const common = require('./common.config');

/** @type {import("eslint-define-config").ESLintConfig} */
const config = merge(common, {
  extends: ['plugin:vitest/legacy-all'],
  rules: {
    'vitest/prefer-expect-assertions': 'off',
    'vitest/max-expects': 'off',
    'vitest/no-conditional-in-test': 'off',
    'vitest/no-conditional-tests': 'off',
    'vitest/no-hooks': 'off',
    'vitest/no-test-return-statement': 'off',
    'vitest/prefer-lowercase-title': 'off',
    'vitest/prefer-to-be-falsy': 'off',
    'vitest/prefer-to-be-truthy': 'off',
    'vitest/prefer-snapshot-hint': 'off',
    'vitest/prefer-spy-on': 'off',
    'vitest/require-top-level-describe': 'off',
  },
});

module.exports = config;
