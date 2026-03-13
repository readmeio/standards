const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const readmePlugin = require('eslint-plugin-readme');
const globals = require('globals');

module.exports = [
  jsxA11yPlugin.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs.flat.recommended,

  // readme react config (already flat format from eslint-plugin conversion)
  readmePlugin.configs.react,

  {
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Disable React Compiler rules from eslint-plugin-react-hooks v7.
      // These are only needed if a project uses the React Compiler.
      // We keep rules-of-hooks and exhaustive-deps which apply to all React projects.
      'react-hooks/component-hook-factories': 'off',
      'react-hooks/config': 'off',
      'react-hooks/error-boundaries': 'off',
      'react-hooks/gating': 'off',
      'react-hooks/globals': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/incompatible-library': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/set-state-in-render': 'off',
      'react-hooks/static-components': 'off',
      'react-hooks/unsupported-syntax': 'off',
      'react-hooks/use-memo': 'off',

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

      /**
       * These rules should be disabled as of React 17 since JSX transforms no
       * longer require `React` to be imported. See links for more info:
       * @link https://github.com/readmeio/readme/pull/14488/changes#r2108893073
       * @link https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
       */
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
