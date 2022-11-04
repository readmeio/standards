const { text } = require('alex');

/**
 * Ensure that a given string has considerate and inclusive language.
 *
 * @see {@link https://alexjs.com/}
 * @param {string} input
 */
module.exports = function alex(input, options, context) {
  const errors = text(input, { profanitySureness: 1 }).messages;

  return errors
    .map(err => {
      // We use `invalid` in some response error component descriptions and within the context that
      // they're used they're fine.
      if (err.ruleId === 'invalid') {
        return false;
      }

      return {
        message: err.reason,
        path: context.path,
      };
    })
    .filter(Boolean);
};
