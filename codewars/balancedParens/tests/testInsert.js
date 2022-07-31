const { insert } = require('../index.js');
const { runTestSuite } = require('../../../tests/index.js');

const testData = [
  {
    desc: 'insert s1 in front of s2',
    args: ['abc', '123', 0],
    expected: 'abc123',
  },
  {
    desc: 'insert s1 in middle of s2',
    args: ['abc', '123', 1],
    expected: '1abc23',
  },
  {
    desc: 'insert s1 in middle of s2',
    args: ['abc', '123', 2],
    expected: '12abc3',
  },
  {
    desc: 'insert s1 at end of s2',
    args: ['abc', '123', 3],
    expected: '123abc',
  },
  {
    desc: 'if idx greater than s2.length, insert at end of s2',
    args: ['abc', '123', 6],
    expected: '123abc',
  },
];

runTestSuite(insert, testData);
