const path = require('node:path');

const { getDocURL } = require('../lib/utils');

module.exports = {
  meta: {
    type: 'problem',
    category: 'TypeScript',
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
