import { makeCopy, severityCodes, testRule } from '@ibm-cloud/openapi-ruleset/test/utils/index.js';
import readme from '@readme/oas-examples/3.0/json/readme.json';

import rule from '../src/rules/description-sentence-punctuation.js';

const ruleId = 'description-sentence-punctuation';
const expectedSeverity = severityCodes.info;
const expectedErrorMsg = 'Descriptions should have ending punctuation.';

describe('rule: `description-sentence-punctuation`', () => {
  describe('pass', () => {
    it('should have no errors on a passing spec', async () => {
      const results = await testRule(ruleId, rule, readme);
      expect(results).toHaveLength(0);
    });
  });

  describe('fail', () => {
    it('should throw errors if an operation description is missing punctuation', async () => {
      const spec = makeCopy(readme);

      spec.paths['/version/{versionId}'].get.description = 'Returns the version with this version ID';

      const results = await testRule(ruleId, rule, spec);
      expect(results).toHaveLength(1);
      expect(results[0].code).toBe(ruleId);
      expect(results[0].message).toBe(expectedErrorMsg);
      expect(results[0].severity).toBe(expectedSeverity);
      expect(results[0].path.join('.')).toBe('paths./version/{versionId}.get.description');
    });

    it('should throw errors if a parameter description is missing punctuation', async () => {
      const spec = makeCopy(readme);

      spec.components.parameters.versionId.description = 'Semver identifier for the project version';

      const results = await testRule(ruleId, rule, spec);
      expect(results).toHaveLength(3);
      expect(results[0].code).toBe(ruleId);
      expect(results[0].message).toBe(expectedErrorMsg);
      expect(results[0].severity).toBe(expectedSeverity);
      expect(results[0].path.join('.')).toBe('paths./version/{versionId}.get.parameters.0.description');
    });
  });
});
