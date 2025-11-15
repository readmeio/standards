import { severityCodes, testRule } from '@ibm-cloud/openapi-ruleset/test/test-utils/index.js';
import readme from '@readme/oas-examples/3.0/json/readme-legacy.json';
import { describe, expect, it } from 'vitest';

import rule from '../src/rules/alex-parameter.js';

const ruleId = 'alex-parameter';
const expectedSeverity = severityCodes.error;
const expectedErrorMsg = 'Don’t use `fucking`, it’s profane';

describe('rule: `alex-parameter`', { timeout: 10000 }, () => {
  describe('pass', () => {
    it('should have no errors on a passing spec', async () => {
      const results = await testRule(ruleId, rule, readme);

      expect(results).toHaveLength(0);
    });
  });

  describe('fail', () => {
    it('should throw errors', async () => {
      const spec = structuredClone(readme);

      spec.paths['/version'].get.parameters = [
        {
          name: 'deprecated',
          in: 'query',
          description: 'Only pull versions that are fucking deprecated.',
          required: true,
          schema: {
            type: 'boolean',
          },
        },
      ];

      const results = await testRule(ruleId, rule, spec);

      expect(results).toHaveLength(1);
      expect(results[0].code).toBe(ruleId);
      expect(results[0].message).toBe(expectedErrorMsg);
      expect(results[0].severity).toBe(expectedSeverity);
      expect(results[0].path.join('.')).toBe('paths./version.get.parameters.0.description');
    });
  });
});
