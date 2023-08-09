const merge = require('lodash.merge');

const common = require('./common.config');

module.exports = merge(common, {
  extends: ['plugin:vitest/all'],
  rules: {
    'vitest/no-conditional-in-test': 'off',
    'vitest/no-conditional-tests': 'off',
    'vitest/no-hooks': 'off',
    'vitest/prefer-to-be-falsy': 'off',
    'vitest/prefer-to-be-truthy': 'off',
    'vitest/require-top-level-describe': 'off',
  },
});
