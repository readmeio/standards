const { getDocURL } = require('../lib/utils');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Prevent the use of decorators on private properties as they cannot be introspected.',
      url: getDocURL(__filename),
    },
  },
  create: context => {
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
      'ClassDeclaration[decorators.length>0] PrivateIdentifier': node => {
        const decorators = node.parent.parent.parent.decorators;

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
      'Decorator[parent.key.type=PrivateIdentifier]': node => {
        const decorator = node.expression.callee.name;

        context.report({
          node,
          message: `You should not use decorators on ES6 class private properties as they cannot be introspected. If \`${decorator}\` does not do any method or property-level introspection then you can safely ignore this rule.`,
        });
      },
    };
  },
};
