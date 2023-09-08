/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  clean: true,
  outDir: 'dist',
  noExternal: ['alex'],
  format: 'esm',
});
