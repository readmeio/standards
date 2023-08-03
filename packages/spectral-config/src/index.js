import { oas } from '@stoplight/spectral-rulesets';

import alexComponentDescription from './rules/alex-component-description.js';
import alexComponentSummary from './rules/alex-component-summary.js';
import alexOperationDescription from './rules/alex-operation-description.js';
import alexOperationSummary from './rules/alex-operation-summary.js';
import alexParameter from './rules/alex-parameter.js';
import alexResponse from './rules/alex-response.js';
import descriptionSentencePunctuation from './rules/description-sentence-punctuation.js';

const config = {
  extends: oas,
  rules: {
    'alex-component-description': alexComponentDescription,
    'alex-component-summary': alexComponentSummary,

    'alex-operation-description': alexOperationDescription,
    'alex-operation-summary': alexOperationSummary,

    'alex-parameter': alexParameter,
    'alex-response': alexResponse,

    'description-sentence-punctuation': descriptionSentencePunctuation,
  },
};

export default config;
