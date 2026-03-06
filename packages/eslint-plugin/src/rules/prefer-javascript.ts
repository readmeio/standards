import type { Rule } from 'eslint';

import path from 'node:path';

import { getDocURL } from '../lib/utils';

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer using pure Javascript within a codebase.',
      url: getDocURL('prefer-javascript'),
    },
  },
  create(context) {
    return {
      Program(node) {
        const filename = context.physicalFilename;
        const extension = path.extname(filename);

        if (extension.match(/\.(c|m)?tsx?$/)) {
          context.report({ node, message: 'Pure Javascript is preferred within this codebase.' });
        }
      },
    };
  },
};

export default rule;
