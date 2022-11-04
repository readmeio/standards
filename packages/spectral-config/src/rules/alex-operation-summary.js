const { alex } = require('../functions');

module.exports = {
  description: 'Operation summaries should have inclusive and considerate language.',
  message: '{{error}}',
  severity: 'error',
  given: '$.paths..[get,put,post,delete,options,head,patch,trace].',
  type: 'style',
  then: {
    field: 'summary',
    function: alex,
  },
};
