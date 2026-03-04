declare module '@eslint-community/eslint-plugin-eslint-comments';
declare module '@typescript-eslint/parser';
declare module 'eslint-plugin-jsx-a11y';
declare module 'eslint-plugin-require-extensions';
declare module 'eslint-plugin-try-catch-failsafe';
declare module 'eslint-plugin-you-dont-need-lodash-underscore';

declare module '@vitest/eslint-plugin' {
  import type { Linter } from 'eslint';

  const plugin: {
    configs: {
      all: Linter.Config;
    };
  };

  export = plugin;
}

declare module 'eslint-plugin-readme' {
  import type { Linter } from 'eslint';

  const plugin: {
    configs: {
      esm: Linter.Config;
      react: Linter.Config;
      typescript: Linter.Config;
    };
    rules: Record<string, unknown>;
  };

  export = plugin;
}
