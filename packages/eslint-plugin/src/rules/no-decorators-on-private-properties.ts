import type { Rule } from 'eslint';
import type * as ESTree from 'estree';

import { getDocURL } from '../lib/utils';

// Decorators are not part of the ESTree spec, so we define the shape we expect from the AST.
interface DecoratorNode {
  expression: {
    callee: ESTree.Identifier;
  };
}

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
        // Selector guarantees: PrivateIdentifier → MethodDefinition → ClassBody → ClassDeclaration
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Rule.Node doesn't type deep parent chains
        const classDecl = (node as any).parent.parent.parent as { decorators: DecoratorNode[] };

        classDecl.decorators.forEach(dnode => {
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
        const decorator = (node as unknown as DecoratorNode).expression.callee.name;

        context.report({
          node,
          message: `You should not use decorators on ES6 class private properties as they cannot be introspected. If \`${decorator}\` does not do any method or property-level introspection then you can safely ignore this rule.`,
        });
      },
    };
  },
};

export default rule;
