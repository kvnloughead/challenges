const { deepEqual } = require('./index.js');
const { arrayEqualData, deepEqualData } = require('./data.js');

/**
 * Runs a simple test suite.
 *
 * @param {*} func - function to be tested
 * @param {*} data- array of objects containing data for each test
 * @param {string[]} data[].desc - descriptions for each test
 * @param {Array[]} data[].args - arguments for each test
 * @param {*[]} data[].expected - expected values for each test
 * @param {boolean} [verbose=false] - if true, additional info is logged
 * @returns {number} the number of failing tests in the suite
 */
function simpleTest(func, data, verbose = false) {
  let failing = 0;
  data.forEach(({ desc, args, expected }) => {
    if (verbose) console.log(`  Testing ${desc}`);
    const actual = func(...args);
    if (actual === expected) {
      console.log(`  PASS - Expected ${expected}, Actual: ${actual}`);
    } else {
      console.log(`  FAIL - Expected ${expected}, Actual: ${actual}`);
      failing++;
    }
    if (verbose) console.log('\n');
  });
  console.log(
    `\n  ${
      failing === 0
        ? 'All tests PASS'
        : `${failing} test${failing > 1 ? 's' : ''} FAILS`
    }\n`,
  );
  return failing;
}

function runAllTests() {
  let failing = 0;
  failing += simpleTest(deepEqual, deepEqualData, true);
  failing += simpleTest(deepEqual, arrayEqualData, true);
  console.log(
    `\n  ${
      failing === 0
        ? 'All tests for all test suites PASS'
        : `${failing} test${failing > 1 ? 's' : ''} FAILS`
    }\n`,
  );
}

runAllTests();
