/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  entry: ['src/index.js'],
  format: ['cjs', 'esm'],
  noExternal: ['alex'],
  outDir: 'dist',
});
