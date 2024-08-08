const path = require('node:path');

const { getDocURL } = require('../lib/utils');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer using TypeScript within a codebase.',
      url: getDocURL(__filename),
    },
  },
  create: context => {
    return {
      Program(node) {
        const filename = context.physicalFilename;
        const extension = path.extname(filename);

        if (extension.match(/\.(c|m)?jsx?$/)) {
          context.report(node, 'TypeScript is preferred within this codebase.');
        }
      },
    };
  },
};
