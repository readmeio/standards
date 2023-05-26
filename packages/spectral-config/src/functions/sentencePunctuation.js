/**
 * Ensure that a given string has ending punctuation (if it's longer than three words).
 *
 * @param {string} input
 */
module.exports = function sentencePunctuation(input) {
  if (!input) {
    // Minor protection for when we have a `description` property as part of an endpoint payload,
    // not a `description` of a schema entry.
    return [];
  } else if (input.split(' ').length <= 3) {
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
