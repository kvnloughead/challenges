/**
 * Returns true if x and y are deeply equal.
 * May not work with dates.
 *
 * @param {*} x
 * @param {*} y
 * @returns {boolean} whether x and y are deeply equal.
 */
function deepEqual(x, y) {
  const xKeys = Object.keys(x),
    yKeys = Object.keys(y),
    tx = typeof x,
    ty = typeof y;
  return x && y && tx === "object" && tx === ty
    ? x.length === y.length &&
        xKeys.length === yKeys.length &&
        xKeys.every((key) => deepEqual(x[key], y[key]))
    : x === y;
}

/**
 * Runs a simple test suite. Only supports strict, non-deep equality.
 * Written to test helper functions for runTestSuite.
 *
 *
 * @param {function} func - function to be tested
 * @param {object[]} data - array of objects containing data for each test
 * @param {string[]} data[].desc - descriptions for each test
 * @param {Array[]} data[].args - arguments for each test
 * @param {*[]} data[].expected - expected values for each test
 * @param {boolean} [verbose=false] - if true, additional info is logged
 * @returns {number} the number of failing tests in the suite
 */
function runSimpleTestSuite(func, data, verbose = false) {
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
    if (verbose) console.log("\n");
  });
  console.log(
    `\n  ${
      failing === 0
        ? "All tests PASS"
        : `${failing} test${failing > 1 ? "s" : ""} FAILS`
    }\n`
  );
  return failing;
}

/**
 * Runs a test suite. Tests deep equality of actual and expected results.
 *
 * @param {function} func - function to be tested
 * @param {object[]} data - array of objects containing data for each test
 * @param {string[]} data[].desc - descriptions for each test
 * @param {array[]} data[].args - arguments for each test
 * @param {*[]} data[].expected - expected values for each test
 * @param {boolean} [verbose=false] - if true, additional info is logged
 * @returns {number} the number of failing tests in the suite
 */
function runTestSuite(func, data, verbose = false) {
  let failing = 0;
  data.forEach(({ desc, args, expected }) => {
    if (verbose) console.log(`  Testing ${desc}`);
    const actual = func(...args);
    if (deepEqual(actual, expected)) {
      console.log(`  PASS - Expected ${expected}, Actual: ${actual}`);
    } else {
      console.log(`  FAIL - Expected ${expected}, Actual: ${actual}`);
      failing++;
    }
    if (verbose) console.log("\n");
  });
  console.log(
    `\n  ${
      failing === 0
        ? "All tests PASS"
        : `${failing} test${failing > 1 ? "s" : ""} FAILS`
    }\n`
  );
  return failing;
}

module.exports = {
  deepEqual,
  runSimpleTestSuite,
  runTestSuite,
};
