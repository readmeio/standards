import eslint from '@eslint/js';
import globals from 'globals';

/** @type {import("eslint-define-config").ESLintConfig} */
const config = {
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
};

export default [eslint.configs.recommended, config];
