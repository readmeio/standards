module.exports = {
  extends: [
    // Standard rules to enforce common conventions
    'stylelint-config-standard',

    // Standard rules for SCSS
    'stylelint-config-standard-scss',

    // Stylelint config inspired by https://sass-guidelin.es
    'stylelint-config-sass-guidelines',

    // Support CSS modules syntax
    'stylelint-config-css-modules',

    // Enable prettier formatting for SCSS/CSS
    'stylelint-prettier/recommended',
  ],
  plugins: [
    // Enable ordering rules for content within declaration blocks.
    'stylelint-order',
  ],
  rules: {
    // Until we migrate *all* our repos away from legacy node-sass to dart sass,
    // we must continue defining alpha values with decimal numbers. Node-sass
    // has its own "rgb" and "rgba" funcitons. These get compiled and fails to
    // parse percentage values appropriately, e.g. rgba(0,0,0,50%) gets compiled
    // to rgb(0,0,0).
    //
    // This rule forces us to continue using decimal numbers for alpha value.
    // e.g. rgba(0, 0, 0, 0.015)
    'alpha-value-notation': 'number',

    // ReadMe relies on legacy color functions (e.g. rgba(0, 0, 0, 0.5))
    // everywhere in addition to Scss allowing this to be written with a color
    // name (e.g. rgba(black, 0.5)). Eventually, consider removing this rule to
    // use "modern" style with comma-free syntax (e.g. rgb(0 0 0 / 0.5)). This
    // change however won't be trivial.
    'color-function-notation': 'legacy',

    // ReadMe still uses color names as values in many places.
    'color-named': null,

    // Extend the existing rule for our custom CSS props and make an exception
    // for legacy CSS names like "--lightGray" and "--minimumGray" since
    // customers may still be defining these in their custom stylesheets.
    'custom-property-pattern': [
      '^(([A-Z]+)?([A-Z][a-z0-9]+)+|([a-z][a-z0-9]*))((-[a-z0-9]+)*|Gray)$',
      {
        message:
          'Expected custom property name to be kebab-case and optionally prefixed with TitleCase or ALLCAPSTitleCase, e.g. "text-color", "MyComponent-text-color", "APIAuthInput-text-color.',
      },
    ],

    // ReadMe breaks this rule in many places.
    'max-nesting-depth': null,

    // Prefer neither "prefix" or "context" notations for media queries.
    // e.g. "min-width: 400px" or "width >= 600px"
    // https://stylelint.io/user-guide/rules/media-feature-range-notation/
    'media-feature-range-notation': null,

    // Rule is not appropriate when using SCSS variables with media queries.
    // e.g. @media (max-width: $container-lg)
    // https://stylelint.io/user-guide/rules/media-query-no-invalid/
    'media-query-no-invalid': null,

    // Allows us to write duplicate selectors in groups
    // https://github.com/stylelint/stylelint/issues/3196
    'no-descending-specificity': [
      true,
      {
        ignore: ['selectors-within-list'],
      },
    ],

    // Extend from existing rule to allow additional sections that are specific
    // to our project such as dark-theme mixins, etc.
    // https://github.com/bjankord/stylelint-config-sass-guidelines/blob/main/index.js#L50
    'order/order': [
      [
        {
          // Always place custom mixin definitions at the very top to ensure they
          // are defined before any references below it.
          type: 'at-rule',
          name: 'mixin',
        },
        'custom-properties',
        {
          // Allow "@mixin {prefix}-dark-mode" directly after custom props
          // section to support defining dark-mode styles inside a mixin that
          // can be invoked in multiple places.
          type: 'at-rule',
          name: 'mixin',
          parameter: '-dark-mode$',
        },
        {
          // Allow "@include dark-mode" directly after custom props section to
          // support our dark-mode pattern as documented here:
          // https://next.readme.ninja/ui/#/Core/Themes
          type: 'at-rule',
          name: 'include',
          parameter: '^dark-mode$',
        },
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        'rules',
      ],
    ],
    'order/properties-alphabetical-order': true,

    // Custom regex of ReadMe's current BEM selector class pattern.
    'selector-class-pattern': [
      '^[a-zA-Z0-9]+((_|-)([a-zA-Z0-9]+))*$',
      {
        message:
          'Selector should start in CapitalCase or camelCase and optionally followed by either kebab-lowercase with hyphens or snake_lowercase with underscores (e.g. BlockName-element-name_modifier-name)',
      },
    ],

    // Custom regex for ReadMe id patterns.
    'selector-id-pattern': [
      '^(([a-z][a-z0-9]*(-[a-z0-9]+)*)|([A-Z][a-z0-9]*)+)$',
      {
        message: 'Expected id selector to be kebab-case or TitleCase (selector-id-pattern)',
      },
    ],

    // ReadMe still references elements by #id. Allow at most one per selector.
    'selector-max-id': 1,

    // ReadMe relies on "element[attr='value']" selectors in too many places.
    // Eventually, it may be beneficial to turn this on.
    'selector-no-qualifying-type': null,

    // Complex selectors are a level 4 spec that is not yet fully supported by
    // all browsers, e.g. `:not(one, two, three)`. Until then, prefer the simple
    // pattern that we use today, e.g. `:not(one):not(two):not(three)`.
    // https://stylelint.io/user-guide/rules/list/selector-not-notation/
    'selector-not-notation': 'simple',

    // TODO: Remove this when migrating to Dart Sass.
    // Disallows the use of global function names, as these global functions are
    // now located inside built-in Dart Sass modules.
    'scss/no-global-function-names': null,
  },
};
