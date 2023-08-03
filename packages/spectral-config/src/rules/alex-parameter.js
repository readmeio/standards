import alex from '../functions/alex.js';

const rule = {
  description: 'Operation parameters should have inclusive and considerate language.',
  message: '{{error}}',
  severity: 'error',
  given: '$.paths..[get,put,post,delete,options,head,patch,trace]..parameters..',
  type: 'style',
  then: {
    field: 'description',
    function: alex,
  },
};

export default rule;
