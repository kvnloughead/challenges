/**
 * Tests for helper functions used in runTestSuite.
 */

const { deepEqual, runSimpleTestSuite } = require('./index.js');
const { arrayEqualData, deepEqualData } = require('./data.js');

function runAllTests() {
  let failing = 0;
  failing += runSimpleTestSuite(deepEqual, deepEqualData, true);
  failing += runSimpleTestSuite(deepEqual, arrayEqualData, true);
  console.log(
    `\n  ${
      failing === 0
        ? 'All tests for all test suites PASS'
        : `${failing} test${failing > 1 ? 's' : ''} FAILS`
    }\n`,
  );
}

runAllTests();
