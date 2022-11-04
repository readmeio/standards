const { alex } = require('../functions');

module.exports = {
  description: 'Component schema summaries should have inclusive and considerate language.',
  message: '{{error}}',
  severity: 'error',
  given: '$.components..',
  type: 'style',
  then: {
    field: 'summary',
    function: alex,
  },
};
