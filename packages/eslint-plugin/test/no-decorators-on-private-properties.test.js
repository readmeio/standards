const { RuleTester } = require('eslint');

const { rules } = require('..');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2022,
    requireConfigFile: false,
  },
});

const propertyErrorMessage =
  'You should not use decorators on ES6 class private properties as they cannot be introspected. If `exampleDecorator` does not do any method or property-level introspection then you can safely ignore this rule.';

const classErrorMessage =
  'You should not use decorators on ES6 classes that contain private properties as they cannot be introspected. If `exampleDecorator` does not do any method or property-level introspection then you can safely ignore this rule.';

ruleTester.run('no-decorators-on-private-properties', rules['no-decorators-on-private-properties'], {
  valid: [
    {
      code: `
class ExampleClass {
  #methodName() {
    return true;
  }
}`,
    },
    {
      code: `
class ExampleClass {
  @exampleDecorator()
  buster = true;

  #methodName() {
    return true;
  }
}`,
    },
    {
      code: `
@exampleDecorator()
class ExampleClass {
  buster = true;

  methodName() {
    return true;
  }
}`,
    },
  ],
  invalid: [
    {
      code: `
class ExampleClass {
  @exampleDecorator()
  #methodName() {
    return true;
  }
}`,
      errors: [{ message: propertyErrorMessage }],
    },
    {
      code: `
class ExampleClass {
  @exampleDecorator()
  #buster = true;

  methodName() {
    return true;
  }
}`,
      errors: [{ message: propertyErrorMessage }],
    },
    {
      code: `
@exampleDecorator()
class ExampleClass {
  #buster = true;

  methodName() {
    return true;
  }
}`,
      errors: [{ message: classErrorMessage }],
    },
  ],
});
