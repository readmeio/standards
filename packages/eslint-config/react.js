/** @type {import("eslint-define-config").ESLintConfig} */
const config = {
  extends: ['plugin:jsx-a11y/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-a11y/no-onchange': 'off', // @todo We should fix these.

    'no-param-reassign': ['error', { props: false }],

    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
      },
    ],

    'react/jsx-sort-props': ['error', { ignoreCase: true, reservedFirst: true }],
    'react/no-invalid-html-attribute': 'error',
    'react/sort-default-props': ['error', { ignoreCase: true }],
    'react/sort-prop-types': [
      'error',
      {
        ignoreCase: true,
        sortShapeProp: true,
      },
    ],
  },
};

module.exports = config;
