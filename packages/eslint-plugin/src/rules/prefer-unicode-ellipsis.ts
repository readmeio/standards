import type { Rule } from 'eslint';
import type * as ESTree from 'estree';

import { getDocURL } from '../lib/utils';

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer using a unicode ellipsis (`…`) instead of three periods (`...`).',
      url: getDocURL('prefer-unicode-ellipsis'),
    },
    fixable: 'code',
  },
  create(context) {
    return {
      /**
       * @example console.log('buster...');
       */
      'Literal[value=/^(.*)[.]{3}$/im]': (node: Rule.Node) => {
        context.report({
          node,
          message: 'Ellipsis should be written as `…`.',
          fix(fixer) {
            return fixer.replaceText(node, (node as ESTree.SimpleLiteral).raw!.replace('...', '…'));
          },
        });
      },

      /**
       * @example <Notification>&nbsp;Saving...</Notification>
       */
      'JSXText[value=/^(.*)[.]{3}$/im]': (node: Rule.Node) => {
        context.report({
          node,
          message: 'Ellipsis should be written as `…`.',
          fix(fixer) {
            // JSXText isn't part of the ESTree spec so there's no type for it
            return fixer.replaceText(node, (node as unknown as { raw: string }).raw.replace('...', '…'));
          },
        });
      },
    };
  },
};

export default rule;
