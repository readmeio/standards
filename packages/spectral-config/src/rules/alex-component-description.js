const { alex } = require('../functions');

module.exports = {
  description: 'Component schema description should have inclusive and considerate language.',
  message: '{{error}}',
  severity: 'error',
  given: '$.components..',
  type: 'style',
  then: {
    field: 'description',
    function: alex,
  },
};
