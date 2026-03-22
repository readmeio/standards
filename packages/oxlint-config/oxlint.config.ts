import oxlintConfig from '@readme/oxlint-config';
import oxlintConfigTS from '@readme/oxlint-config/typescript';
import oxlintConfigJest from '@readme/oxlint-config/testing/jest';
import oxlintConfigVitest from '@readme/oxlint-config/testing/vitest';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [oxlintConfig, oxlintConfigTS, oxlintConfigJest, oxlintConfigVitest],
});
