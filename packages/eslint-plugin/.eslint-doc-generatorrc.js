/** @type {import('eslint-doc-generator').GenerateOptions} */
const config = {
  configEmoji: [
    ['esm', '📁'],
    ['typescript', '🧠'],
    ['react', '⚛️'],
  ],
  urlRuleDoc(name, page) {
    if (page === 'README.md') {
      return `https://github.com/readmeio/standards/tree/main/packages/eslint-plugin/docs/rules/${name}.md`;
    }
    return undefined;
  },
};

module.exports = config;
