import { RuleTester } from 'eslint';

import plugin from '../src';

const ruleTester = new RuleTester();

ruleTester.run('json-parse-try-catch', plugin.rules['json-parse-try-catch'], {
  valid: [
    {
      name: 'JSON.parse inside try block',
      code: `try { JSON.parse('{}'); } catch (e) {}`,
    },
    {
      name: 'JSON.parse inside nested function in try block',
      code: `try { function foo() { JSON.parse('{}'); } } catch (e) {}`,
    },
  ],
  invalid: [
    {
      name: 'JSON.parse without try-catch',
      code: `JSON.parse('{}');`,
      errors: [{ messageId: 'shouldWrap' }],
    },
    {
      name: 'JSON.parse inside catch block',
      code: `try { throw new Error(); } catch (e) { JSON.parse('{}'); }`,
      errors: [{ messageId: 'shouldWrap' }],
    },
    {
      name: 'JSON.parse inside finally block',
      code: `try { } catch (e) { } finally { JSON.parse('{}'); }`,
      errors: [{ messageId: 'shouldWrap' }],
    },
  ],
});
