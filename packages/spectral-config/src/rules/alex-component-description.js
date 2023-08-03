import alex from '../functions/alex.js';

const rule = {
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

export default rule;
