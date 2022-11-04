const rules = require('./rules');

module.exports = {
  extends: ['spectral:oas'],
  functionsDir: './rules',
  functions: ['alex', 'sentencePunctuation'],
  rules: {
    'alex-component-description': rules.alexComponentDescription,
    'alex-component-summary': rules.alexComponentSummary,

    'alex-operation-description': rules.alexComponentDescription,
    'alex-operation-summary': rules.alexOperationSummary,

    'alex-parameter': rules.alexParameter,
    'alex-response': rules.alexResponse,

    'description-sentence-punctuation': rules.descriptionSentencePunctuation,
  },
};