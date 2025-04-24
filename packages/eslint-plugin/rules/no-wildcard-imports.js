const { getDocURL } = require('../lib/utils');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ban wildcard imports (`import * as something`) from libraries.',
      url: getDocURL(__filename),
    },
    schema: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          allow: {
            type: 'array',
            uniqueItems: true,
          },
        },
      },
    ],
  },
  create: context => {
    const options = {
      allow: [],
      ...context.options[0],
    };

    if (!options.allow) {
      options.allow = [];
    }

    return {
      /**
       * Checking for for any wildcard imports.
       *
       * @example import * as dateFns from 'date-fns';
       */
      ImportNamespaceSpecifier: node => {
        const isAllowed = options.allow.some(moduleName => node.parent.source.value === moduleName);
        if (!isAllowed) {
          context.report({
            node,
            message:
              'Loading everything out of a library should be avoided because it makes treeshaking difficult and leads to larger bundle sizes.',
          });
        }
      },
    };
  },
};
