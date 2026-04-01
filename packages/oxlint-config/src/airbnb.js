import { defineConfig } from 'oxlint';

/**
 * This is the ESLint configuration ruleset from `eslint-config-airbnb-base` ported over for Oxlint.
 *
 */
export default defineConfig({
  rules: {
    // ── Best Practices ──────────────────────────────────────────────────
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    'class-methods-use-this': ['error', { exceptMethods: [] }],
    'consistent-return': 'error',
    curly: ['error', 'multi-line'],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-else-return': ['error', { allowElseIf: true }], // ReadMe override (airbnb: false)
    'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-global-assign': ['error', { exceptions: [] }],
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
      },
    ],
    'no-proto': 'error',
    'no-redeclare': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/479 */
    // 'no-restricted-properties': [
    //   'error',
    //   { object: 'arguments', property: 'callee', message: 'arguments.callee is deprecated' },
    //   {
    //     object: 'global',
    //     property: 'isFinite',
    //     message: 'Please use Number.isFinite instead',
    //   },
    //   { object: 'self', property: 'isFinite', message: 'Please use Number.isFinite instead' },
    //   {
    //     object: 'window',
    //     property: 'isFinite',
    //     message: 'Please use Number.isFinite instead',
    //   },
    //   { object: 'global', property: 'isNaN', message: 'Please use Number.isNaN instead' },
    //   { object: 'self', property: 'isNaN', message: 'Please use Number.isNaN instead' },
    //   { object: 'window', property: 'isNaN', message: 'Please use Number.isNaN instead' },
    //   { property: '__defineGetter__', message: 'Please use Object.defineProperty instead.' },
    //   { property: '__defineSetter__', message: 'Please use Object.defineProperty instead.' },
    //   {
    //     object: 'Math',
    //     property: 'pow',
    //     message: 'Use the exponentiation operator (**) instead.',
    //   },
    // ],

    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    'no-unused-labels': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/479 */
    // 'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    radix: 'error',
    'vars-on-top': 'error',
    yoda: 'error',

    // ── Errors ──────────────────────────────────────────────────────────
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'except-parens'], // ReadMe override (airbnb: "always")
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/479 */
    // 'no-unreachable-loop': ['error', { ignore: [] }],

    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'no-useless-backreference': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],

    // ── ES6 ─────────────────────────────────────────────────────────────
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-native-nonconstructor': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/479 */
    // 'no-restricted-exports': [
    //   'error',
    //   {
    //     restrictedNamedExports: ['default', 'then'],
    //   },
    // ],

    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-var': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/479 */
    // 'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/479 */
    // 'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],

    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: false },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'symbol-description': 'error',

    // ── Style ───────────────────────────────────────────────────────────
    // Most formatting rules below are overridden by eslint-config-prettier.
    // They are kept here for completeness and for consumers not using Prettier.
    /**
     * `camelcase` has been deprecated for `@typescript-eslint/naming-convention` but Oxlint
     * doesn't support that rule yet.
     *
     * @see {@link https://github.com/oxc-project/oxc/issues/479}
     * @see {@link https://github.com/oxc-project/oxc/issues/2180}
     * @fixme
     */
    // camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    'func-names': 'warn',
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': ['error'],
    // 'no-nested-ternary': 'error',
    'no-object-constructor': 'error',
    'no-plusplus': 'error',

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/479 */
    // 'no-restricted-syntax': [
    //   'error',
    //   {
    //     selector: 'ForInStatement',
    //     message:
    //       'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    //   },
    //   {
    //     selector: 'ForOfStatement',
    //     message:
    //       'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    //   },
    //   {
    //     selector: 'LabeledStatement',
    //     message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    //   },
    //   {
    //     selector: 'WithStatement',
    //     message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    //   },
    // ],

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/479 */
    // 'no-underscore-dangle': [
    //   'error',
    //   {
    //     allow: [],
    //     allowAfterThis: false,
    //     allowAfterSuper: false,
    //     enforceInMethodNames: true,
    //   },
    // ],

    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/479 */
    // 'one-var': ['error', 'never'],

    'operator-assignment': ['error', 'always'],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',

    // ── Node ────────────────────────────────────────────────────────────
    'global-require': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',

    // ── Strict ──────────────────────────────────────────────────────────
    /** @fixme Oxlint doesn't support this rule yet. https://github.com/oxc-project/oxc/issues/479 */
    // strict: ['error', 'never'],

    // ── Variables ───────────────────────────────────────────────────────
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },

      // Inlined from the `confusing-browser-globals` package (v1.0.10).
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top',
    ],
    'no-shadow': ['error', { allow: ['err'] }], // ReadMe override (airbnb: plain "error")
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  },
});
