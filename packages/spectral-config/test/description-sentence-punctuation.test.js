import { severityCodes, testRule } from '@ibm-cloud/openapi-ruleset/test/test-utils/index.js';
import petstore from '@readme/oas-examples/3.0/json/petstore-simple.json';
import readme from '@readme/oas-examples/3.0/json/readme-legacy.json';
import { describe, it, expect } from 'vitest';

import rule from '../src/rules/description-sentence-punctuation.js';

const ruleId = 'description-sentence-punctuation';
const expectedSeverity = severityCodes.info;
const expectedErrorMsg = 'Descriptions should have ending punctuation.';

describe('rule: `description-sentence-punctuation`', () => {
  describe('pass', () => {
    it('should have no errors on a passing spec', async () => {
      const results = await testRule(ruleId, rule, petstore);

      expect(results).toHaveLength(0);
    });
  });

  describe('fail', () => {
    it('should throw errors if an operation description is missing punctuation', async () => {
      const spec = structuredClone(readme);

      spec.paths['/version/{versionId}'].get.description = 'Returns the version with this version ID';

      const results = await testRule(ruleId, rule, spec);

      expect(results).toHaveLength(7);
      expect(results[0].code).toBe(ruleId);
      expect(results[0].message).toBe(expectedErrorMsg);
      expect(results[0].severity).toBe(expectedSeverity);
      expect(results[0].path.join('.')).toBe(
        'paths./docs.post.requestBody.content.application/json.schema.properties.type.description',
      );
    });

    it('should throw errors if a parameter description is missing punctuation', async () => {
      const spec = structuredClone(readme);

      spec.components.parameters.versionId.description = 'Semver identifier for the project version';

      const results = await testRule(ruleId, rule, spec);

      expect(results).toHaveLength(9);
      expect(results[0].code).toBe(ruleId);
      expect(results[0].message).toBe(expectedErrorMsg);
      expect(results[0].severity).toBe(expectedSeverity);
      expect(results[0].path.join('.')).toBe(
        'paths./docs.post.requestBody.content.application/json.schema.properties.type.description',
      );
    });
  });
});
