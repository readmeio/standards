const { makeCopy, severityCodes, testRule } = require('@ibm-cloud/openapi-ruleset/test/utils');
const readme = require('@readme/oas-examples/3.0/json/readme.json');

const { alexOperationDescription } = require('../src/rules');

const rule = alexOperationDescription;
const ruleId = 'alex-operation-description';
const expectedSeverity = severityCodes.error;
const expectedErrorMsg = 'Don’t use `fucking`, it’s profane';

describe('rule: `alex-operation-description`', () => {
  describe('pass', () => {
    it('should have no errors on a passing spec', async () => {
      const results = await testRule(ruleId, rule, readme);
      expect(results).toHaveLength(0);
    });
  });

  describe('fail', () => {
    it('should throw errors', async () => {
      const spec = makeCopy(readme);

      spec.paths['/version/{versionId}'].get.description = 'Return the fucking version.';

      const results = await testRule(ruleId, rule, spec);
      expect(results).toHaveLength(1);
      expect(results[0].code).toBe(ruleId);
      expect(results[0].message).toBe(expectedErrorMsg);
      expect(results[0].severity).toBe(expectedSeverity);
      expect(results[0].path.join('.')).toBe('paths./version/{versionId}.get.description');
    });
  });
});