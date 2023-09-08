import alex from '../functions/alex.js';

const rule = {
  description: 'Operation responses should have inclusive and considerate language.',
  message: '{{error}}',
  severity: 'error',
  given: '$.paths..[get,put,post,delete,options,head,patch,trace]..responses..',
  type: 'style',
  then: {
    field: 'description',
    function: alex,
  },
};

export default rule;
