import fs from 'fs';
import path from 'path';

import stylelint from 'stylelint';
import { describe, beforeEach, it, expect } from 'vitest';

import config from '..';

const invalidScss = fs.readFileSync(path.join(__dirname, './invalid.scss'), 'utf-8');
const validScss = fs.readFileSync(path.join(__dirname, './valid.scss'), 'utf-8');

describe('stylelint-config', () => {
  let data;
  let warnings;

  describe('with a valid file', () => {
    beforeEach(async () => {
      data = await stylelint.lint({
        code: validScss,
        config,
      });
      ({ warnings } = data.results[0]);
    });

    it('has no errors', () => {
      expect(data.errored).toBeFalsy();
    });

    it('flags no warnings', () => {
      expect(warnings).toHaveLength(0);
    });
  });

  describe('with an invalid file and auto-fix enabled', () => {
    beforeEach(async () => {
      data = await stylelint.lint({
        code: invalidScss,
        config,
        fix: true,
      });
      ({ warnings } = data.results[0]);
    });

    it('matches the auto-fixed snapshot', () => {
      expect(data.code).toMatchSnapshot();
    });

    it('has errors', () => {
      expect(data.errored).toBeTruthy();
    });

    it('flags warnings', () => {
      expect(warnings).toContainEqual(
        expect.objectContaining({
          text: expect.stringMatching(/scss\/dollar-variable-pattern/),
        }),
      );
      expect(warnings).toContainEqual(
        expect.objectContaining({
          text: expect.stringMatching(/color-function-notation/),
        }),
      );
      expect(warnings).toContainEqual(
        expect.objectContaining({
          text: expect.stringMatching(/selector-id-pattern/),
        }),
      );
      expect(warnings).toContainEqual(
        expect.objectContaining({
          text: expect.stringMatching(/selector-max-id/),
        }),
      );
    });

    it('expects no more than 1 id selector', () => {
      expect(warnings.some(w => w.rule === 'selector-max-id')).toBeTruthy();
    });

    it('expects id pattern to be either kebab-case or TitleCase', () => {
      expect(warnings.some(w => w.rule === 'selector-id-pattern')).toBeTruthy();
    });

    it('auto-fixes "selector-not-notation" to "simple" pattern', () => {
      expect(data.code).toContain('&:not(.one):not(.two):not(.three)');
    });
  });

  describe('prettier rules', () => {
    it('matches snapshot with all formatting errors fixed', async () => {
      data = await stylelint.lint({
        code: `
$prettier: "should be single quotes";
`,
        config,
        fix: true,
      });
      ({ warnings } = data.results[0]);
      expect(data.code).toMatchSnapshot();
    });

    it('flags double quotes as an error', async () => {
      data = await stylelint.lint({
        code: '$prettier: "should be single quotes"',
        config,
      });
      ({ warnings } = data.results[0]);
      expect(warnings).toHaveLength(1);
      expect(warnings[0].rule).toBe('prettier/prettier');
    });
  });
});
