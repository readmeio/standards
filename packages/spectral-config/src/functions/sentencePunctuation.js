/**
 * Ensure that a given string has ending punctuation (if it's longer than three words).
 *
 * @param {string} input
 */
module.exports = function sentencePunctuation(input) {
  if (input.split(' ').length <= 3) {
    return [];
  } else if (!input.match(/^(.*)[.?!/]$/m)) {
    return [
      {
        message: `\`${input}\` does not have trailing punctuation.`,
      },
    ];
  }

  return [];
};
