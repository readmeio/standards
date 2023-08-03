import sentencePunctuation from '../functions/sentencePunctuation.js';

const rule = {
  description: 'Descriptions should have ending punctuation.',
  message: '{{description}}',
  severity: 'info',
  given: '$.paths..[get,put,post,delete,options,head,patch,trace]..description',
  type: 'style',
  then: {
    field: 'description',
    function: sentencePunctuation,
  },
};

export default rule;
