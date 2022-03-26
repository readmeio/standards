module.exports = {
  extends: [
    // Standard rules to enforce common conventions
    'stylelint-config-standard',

    // Standard rules for SCSS
    'stylelint-config-standard-scss',

    // Stylelint config inspired by https://sass-guidelin.es
    'stylelint-config-sass-guidelines',

    // Enable prettier formatting for SCSS/CSS
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  rules: {
    // Rules not handled by pretty printers
    'comment-whitespace-inside': 'always',
    'function-name-case': 'lower',
    'selector-type-case': 'lower',
    'value-keyword-case': 'lower',

    // Conflicting stylelint-config-sass-guidelines rules with readme styles
    'color-named': null,
    'max-nesting-depth': null,

    // Custom regex of our current BEM selector class pattern
    'selector-class-pattern': [
      '^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*(_[a-zA-Z0-9]+)*$',
      {
        message:
          'Selector should start in CapitalCase or camelCase and optionally followed by kebab-lowercase with hyphens and end with snake_lowercase with underscores (e.g. BlockName-element-name_modifier-name)',
      },
    ],

    // Scss rule should be used instead of Stylelint's function-no-unknown.
    'function-no-unknown': null,
    'scss/function-no-unknown': true,

    // TODO: Remove this when migrating to Dart Sass
    // Disallows the use of global function names, as these global functions are
    // now located inside built-in Sass modules.
    'scss/no-global-function-names': null,
  },
};
