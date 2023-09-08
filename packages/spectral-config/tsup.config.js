/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  entry: ['src/index.js'],
  format: ['esm'],
  noExternal: ['alex'],
  outDir: 'dist',
});
