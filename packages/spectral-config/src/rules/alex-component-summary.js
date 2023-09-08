import alex from '../functions/alex.js';

const rule = {
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

export default rule;
