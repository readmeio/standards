const path = require('node:path');

const { getDocURL } = require('../lib/utils');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer using pure Javascript within a codebase.',
      url: getDocURL(__filename),
    },
  },
  create: context => {
    return {
      Program(node) {
        const filename = context.physicalFilename;
        const extension = path.extname(filename);

        if (extension.match(/\.(c|m)?tsx?$/)) {
          context.report(node, 'Pure Javascript is preferred within this codebase.');
        }
      },
    };
  },
};
