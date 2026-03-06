import type { Rule } from 'eslint';

import path from 'node:path';

import { getDocURL } from '../lib/utils';

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer using TypeScript within a codebase.',
      url: getDocURL('prefer-typescript'),
    },
  },
  create(context) {
    return {
      Program(node) {
        const filename = context.physicalFilename;
        const extension = path.extname(filename);

        if (extension.match(/\.(c|m)?jsx?$/)) {
          context.report({ node, message: 'TypeScript is preferred within this codebase.' });
        }
      },
    };
  },
};

export default rule;
