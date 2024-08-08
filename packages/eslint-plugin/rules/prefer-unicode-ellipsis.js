const { getDocURL } = require('../lib/utils');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer using a unicode ellipsis (`…`) instead of three periods (`...`).',
      url: getDocURL(__filename),
    },
    fixable: 'code',
  },
  create: context => {
    return {
      /**
       * @example console.log('buster...');
       */
      'Literal[value=/^(.*)[.]{3}$/im]': node => {
        context.report({
          node,
          message: 'Ellipsis should be written as `…`.',
          fix(fixer) {
            return fixer.replaceText(node, node.raw.replace('...', '…'));
          },
        });
      },

      /**
       * @example <Notification className={classes[\'Notification-Save\']} color="graphite">&nbsp;Saving...</Notification>
       */
      'JSXText[value=/^(.*)[.]{3}$/im]': node => {
        context.report({
          node,
          message: 'Ellipsis should be written as `…`.',
          fix(fixer) {
            return fixer.replaceText(node, node.raw.replace('...', '…'));
          },
        });
      },
    };
  },
};
