const { alex } = require('../functions');

module.exports = {
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
