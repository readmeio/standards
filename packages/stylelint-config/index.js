module.exports = {
  extends: [
    // Standard rules to enforce common conventions
    'stylelint-config-standard',

    // Standard rules for SCSS
    'stylelint-config-standard-scss',

    // Shared config for CSS modules syntax
    'stylelint-config-css-modules',

    // Enable running prettier config as additional rules
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
};
