import oxlintConfig from '@readme/oxlint-config';
import oxlintConfigJest from '@readme/oxlint-config/testing/jest';
import oxlintConfigVitest from '@readme/oxlint-config/testing/vitest';
import oxlintConfigTS from '@readme/oxlint-config/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [oxlintConfig, oxlintConfigTS, oxlintConfigJest, oxlintConfigVitest],
});
