import { makeCopy, severityCodes, testRule } from '@ibm-cloud/openapi-ruleset/test/utils/index.js';
import readme from '@readme/oas-examples/3.0/json/readme.json';
import { describe, it, expect } from 'vitest';

const { alexComponentSummary } = require('../src/rules');

const rule = alexComponentSummary;
const ruleId = 'alex-component-summary';
const expectedSeverity = severityCodes.error;
const expectedErrorMsg = 'Don’t use `fucking`, it’s profane';

describe('rule: `alex-component-summary`', () => {
  describe('pass', () => {
    it('should have no errors on a passing spec', async () => {
      const results = await testRule(ruleId, rule, readme);
      expect(results).toHaveLength(0);
    });
  });

  describe('fail', () => {
    it('should throw errors', async () => {
      const spec = makeCopy(readme);

      spec.components.pathItems = {
        getApiSpec: {
          get: {
            summary: 'Get the fucking API spec',
          },
        },
      };

      const results = await testRule(ruleId, rule, spec);
      expect(results).toHaveLength(1);
      expect(results[0].code).toBe(ruleId);
      expect(results[0].message).toBe(expectedErrorMsg);
      expect(results[0].severity).toBe(expectedSeverity);
      expect(results[0].path.join('.')).toBe('components.pathItems.getApiSpec.get.summary');
    });
  });
});
