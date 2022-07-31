const { countOpenParens } = require('../index.js');
const { runTestSuite } = require('../../../tests/index.js');

const testData = [
  {
    desc: 'all matching parens',
    args: ['(())'],
    expected: [1, 2, 1, 0],
  },
  {
    desc: 'all matching parens',
    args: ['(()())'],
    expected: [1, 2, 1, 2, 1, 0],
  },
  {
    desc: 'all matching parens',
    args: ['()()()'],
    expected: [1, 0, 1, 0, 1, 0],
  },
  {
    desc: 'all matching parens',
    args: ['(())()'],
    expected: [1, 2, 1, 0, 1, 0],
  },
  {
    desc: 'non-matching parens',
    args: ['((())()'],
    expected: [1, 2, 3, 2, 1, 2, 1],
  },
];

runTestSuite(countOpenParens, testData);
