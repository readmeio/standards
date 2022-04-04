const config = require('..');
const fs = require('fs');
const stylelint = require('stylelint');

const invalidScss = fs.readFileSync('./__tests__/invalid.scss', 'utf-8');
const validScss = fs.readFileSync('./__tests__/valid.scss', 'utf-8');

describe('stylelint-config', () => {
  let data;

  describe('with a valid file', () => {
    beforeEach(async () => {
      data = await stylelint.lint({
        code: validScss,
        config,
      });
    });

    it('has no errors', () => {
      expect(data.errored).toBeFalsy();
    });

    it('flags no warnings', () => {
      expect(data.results[0].warnings).toHaveLength(0);
    });
  });

  describe('with an invalid file and auto-fix enabled', () => {
    beforeEach(async () => {
      data = await stylelint.lint({
        code: invalidScss,
        config,
        fix: true,
      });
    });

    it('matches the auto-fixed snapshot', () => {
      expect(data.output).toMatchSnapshot();
    });

    it('has errors', () => {
      expect(data.errored).toBeTruthy();
    });

    it('flags warnings', () => {
      expect(data.results[0].warnings).toHaveLength(4);
    });
  });
});
