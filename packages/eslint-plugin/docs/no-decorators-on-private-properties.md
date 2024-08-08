# Prevent the use of decorators on private properties

This rule aims to prevent you from introducing edge cases when using [decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) on [private properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) as they're fully private and can't be introspected upon -- which is a general use-case for decorators.

## Fail

```ts
class ExampleClass {
  @exampleDecorator()
  #methodName() {
    return true;
  }
}
```

```ts
class ExampleClass {
  @exampleDecorator()
  #buster = true;

  methodName() {
    return true;
  }
}
```

```ts
@exampleDecorator()
class ExampleClass {
  #buster = true;

  methodName() {
    return true;
  }
}
```

## Pass

```ts
class ExampleClass {
  @exampleDecorator()
  methodName() {
    return true;
  }
}
```

```ts
class ExampleClass {
  @exampleDecorator()
  buster = true;

  #methodName() {
    return true;
  }
}
```

```ts
@exampleDecorator()
class ExampleClass {
  buster = true;

  methodName() {
    return true;
  }
}
```
