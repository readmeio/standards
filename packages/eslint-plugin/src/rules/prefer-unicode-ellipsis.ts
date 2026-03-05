import type { Rule } from 'eslint';

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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Literal.raw isn't on Rule.Node
            return fixer.replaceText(node, (node as any).raw.replace('...', '…'));
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- JSXText.raw isn't on Rule.Node
            return fixer.replaceText(node, (node as any).raw.replace('...', '…'));
          },
        });
      },
    };
  },
};

export default rule;
