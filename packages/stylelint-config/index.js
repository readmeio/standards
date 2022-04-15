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
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  rules: {
    // ReadMe still uses color names as values in many places.
    'color-named': null,

    // ReadMe breaks this rule in many places.
    'max-nesting-depth': null,

    // ReadMe still references elements by #id. Allow at most one per selector.
    'selector-max-id': 1,

    // ReadMe relies on "element[attr='value']" selectors in too many places.
    // Eventually, it may be beneficial to turn this on.
    'selector-no-qualifying-type': null,

    // ReadMe relies on legacy color functions (e.g. rgba(0, 0, 0, 0.5))
    // everywhere in addition to Scss allowing this to be written with a color
    // name (e.g. rgba(black, 0.5)). Eventually, consider removing this rule to
    // use "modern" style with comma-free syntax (e.g. rgb(0 0 0 / 0.5)). This
    // change however won't be trivial.
    'color-function-notation': 'legacy',

    // Custom regex for ReadMe id patterns.
    'selector-id-pattern': [
      '^(([a-z][a-z0-9]*(-[a-z0-9]+)*)|([A-Z][a-z0-9]*)+)$',
      {
        message: 'Expected id selector to be kebab-case or TitleCase',
      },
    ],

    // Custom regex of ReadMe's current BEM selector class pattern.
    'selector-class-pattern': [
      '^[a-zA-Z0-9]+((_|-)([a-zA-Z0-9]+))*$',
      {
        message:
          'Selector should start in CapitalCase or camelCase and optionally followed by either kebab-lowercase with hyphens or snake_lowercase with underscores (e.g. BlockName-element-name_modifier-name)',
      },
    ],

    // TODO: Remove this when migrating to Dart Sass.
    // Disallows the use of global function names, as these global functions are
    // now located inside built-in Dart Sass modules.
    'scss/no-global-function-names': null,
  },
};
