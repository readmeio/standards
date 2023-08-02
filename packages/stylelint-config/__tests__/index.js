const fs = require('fs');

const stylelint = require('stylelint');

const config = require('..');

const invalidScss = fs.readFileSync('./__tests__/invalid.scss', 'utf-8');
const validScss = fs.readFileSync('./__tests__/valid.scss', 'utf-8');

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
      expect(data.output).toMatchSnapshot();
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
      expect(data.output).toContain('&:not(.one, .two, .three)');
    });
  });
});
