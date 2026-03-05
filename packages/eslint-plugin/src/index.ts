import type { Linter, Rule } from 'eslint';

import noDecoratorsOnPrivateProperties from './rules/no-decorators-on-private-properties';
import noDualExports from './rules/no-dual-exports';
import noWildcardImports from './rules/no-wildcard-imports';
import preferJavascript from './rules/prefer-javascript';
import preferTypescript from './rules/prefer-typescript';
import preferUnicodeEllipsis from './rules/prefer-unicode-ellipsis';

// eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
const { name: packageName, version: packageVersion } = require('../package.json') as {
  name: string;
  version: string;
};

interface Plugin {
  configs: Record<string, Linter.Config>;
  meta: { name: string; version: string };
  rules: Record<string, Rule.RuleModule>;
}

const plugin: Plugin = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: {},
  rules: {
    'no-decorators-on-private-properties': noDecoratorsOnPrivateProperties,
    'no-dual-exports': noDualExports,
    'prefer-javascript': preferJavascript,
    'prefer-typescript': preferTypescript,
    'prefer-unicode-ellipsis': preferUnicodeEllipsis,
    'no-wildcard-imports': noWildcardImports,
  },
};

// Configs are defined after the plugin object so they can reference it directly
// in the `plugins` map (flat config requires plugin objects, not strings).
plugin.configs.esm = {
  plugins: { readme: plugin as unknown as Record<string, unknown> },
  rules: {
    'readme/no-dual-exports': 'error',
    'readme/no-wildcard-imports': 'error',
  },
};

plugin.configs.react = {
  plugins: { readme: plugin as unknown as Record<string, unknown> },
  rules: {
    'readme/prefer-unicode-ellipsis': 'warn',
    'readme/no-wildcard-imports': 'error',
  },
};

plugin.configs.typescript = {
  plugins: { readme: plugin as unknown as Record<string, unknown> },
  rules: {
    'readme/no-decorators-on-private-properties': 'error',
  },
};

export = plugin;
