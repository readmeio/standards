const { getDocURL } = require('../lib/utils');

module.exports = {
  meta: {
    type: 'problem',
    category: 'ESM',
    docs: {
      description: 'Prevent cases of having a file with dual `default` and named exports.',
      url: getDocURL('no-dual-exports'),
    },
  },
  create: context => {
    return {
      ExportDefaultDeclaration: node => {
        if (!node?.parent?.body) {
          return;
        } else if (!node.parent.body.filter(n => n.type === 'ExportNamedDeclaration').length) {
          return;
        }

        context.report({
          node,
          message:
            'In a dual package world you cannot ship a file for CJS environments that has a mix of `default` and named exports. This export should either be made a named export or refactor this file to have just one default export.',
        });
      },
    };
  },
};
