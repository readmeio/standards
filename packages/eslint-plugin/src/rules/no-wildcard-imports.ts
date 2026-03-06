import type { Rule } from 'eslint';
import type * as ESTree from 'estree';

import { getDocURL } from '../lib/utils';

interface Options {
  allow: string[];
  message: string;
}

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ban wildcard imports (`import * as something`) from libraries.',
      url: getDocURL('no-wildcard-imports'),
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
          message: {
            type: 'string',
          },
        },
      },
    ],
  },
  create(context) {
    const options: Options = {
      allow: [],
      message:
        'Loading everything out of a library should be avoided because it makes treeshaking difficult and leads to larger bundle sizes.',
      ...context.options[0],
    };

    return {
      /**
       * Checking for for any wildcard imports.
       *
       * @example import * as dateFns from 'date-fns';
       */
      ImportNamespaceSpecifier(node) {
        const isAllowed = options.allow.some(
          moduleName => (node.parent as ESTree.ImportDeclaration).source.value === moduleName,
        );
        if (!isAllowed) {
          context.report({
            node: node.parent,
            message: options.message,
          });
        }
      },
    };
  },
};

export default rule;
