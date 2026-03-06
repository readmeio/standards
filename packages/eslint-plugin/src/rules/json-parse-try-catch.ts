import type { Rule } from 'eslint';

import { findTryStatementRange } from '../lib/find-try-statement';
import { getDocURL } from '../lib/utils';

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: '`JSON.parse()` must be wrapped in a try-catch block.',
      url: getDocURL('json-parse-try-catch'),
    },
    messages: {
      shouldWrap: 'JSON.parse should be wrapped in try-catch',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.object.type === 'Identifier' &&
          node.callee.object.name === 'JSON' &&
          node.callee.property.type === 'Identifier' &&
          node.callee.property.name === 'parse'
        ) {
          const range = findTryStatementRange(node);

          if (!range) {
            context.report({ node, messageId: 'shouldWrap' });
            return;
          }

          // The try-block range should fully encompass the node.
          if (range[0] < node.range![0] && node.range![1] < range[1]) {
            return;
          }

          context.report({ node, messageId: 'shouldWrap' });
        }
      },
    };
  },
};

export default rule;
