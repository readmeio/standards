import type { Rule } from 'eslint';

import { getDocURL } from '../lib/utils';

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Prevent the use of decorators on private properties as they cannot be introspected.',
      url: getDocURL('no-decorators-on-private-properties'),
    },
  },
  create(context) {
    return {
      /**
       * Checking for class-level decorators that exist on a class that contains private properties
       *
       * @example
       * class ExampleClass {
       *  @exampleDecorator()
       *  #methodName() {
       *    return true;
       *  }
       * }
       */
      'ClassDeclaration[decorators.length>0] PrivateIdentifier': (node: Rule.Node) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- ESLint's Rule.Node doesn't type deep parent chains or decorators
        const decorators = (node as any).parent.parent.parent.decorators as any[];

        decorators.forEach(dnode => {
          const decorator = dnode.expression.callee.name;

          context.report({
            node: dnode.expression.callee,
            message: `You should not use decorators on ES6 classes that contain private properties as they cannot be introspected. If \`${decorator}\` does not do any method or property-level introspection then you can safely ignore this rule.`,
          });
        });
      },

      /**
       * Checking for decorators that are attached to a private property.
       *
       * @example
       * class ExampleClass {
       *  @exampleDecorator()
       *  #methodName() {
       *    return true;
       *  }
       * }
       */
      'Decorator[parent.key.type=PrivateIdentifier]': (node: Rule.Node) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Decorator nodes aren't typed in Rule.Node
        const decorator = (node as any).expression.callee.name as string;

        context.report({
          node,
          message: `You should not use decorators on ES6 class private properties as they cannot be introspected. If \`${decorator}\` does not do any method or property-level introspection then you can safely ignore this rule.`,
        });
      },
    };
  },
};

export default rule;
