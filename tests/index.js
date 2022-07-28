/**
 * Tests a function with a single set of arguments.
 * Use in conjunction with runTests.
 * @param {function} func - function to be tested
 * @param {string | ""} description - description of the test.
 * @param {Array} args - arguments to pass to func
 * @param {*} expected - expected return value
 * @returns {boolean} whether the return value equals the expected value
 */
function testOnce(func, description, args, expected) {
  console.log(`\n${description}` || `\nTesting ${func.name}`);
  let passing = true;
  const actual = func(...args);
  if (actual === expected) {
    console.log(`  PASS - Expected ${expected}, Actual: ${actual}`);
  } else {
    console.log(`
      ----
      FAIL
        Args: ${args}
        Expected: ${expected}
        Actual: ${actual}
    `);
    passing = false;
  }
  return passing;
}

// TODO - fix param docs
/**
 * Runs testOnce for each item in data
 * @param {function} func - function to be tested
 * @param {Object[]} data - array of objects containing data for each test
 * @param {string[]} data[].descriptions - descriptions for each test
 * @param {Array[]} data[].args - arguments for each test
 * @param {*[]} data[].expected - expected values for each test
 * @returns {boolean} true if all tests pass
 */
function runTests(func, tests, description = '') {
  console.log(`\n${description || `Testing ${func.name}`}`);
  console.log('----------------------\n');
  let passing = true;
  tests.forEach(({ desc, args, expected }) => {
    passing = testOnce(func, desc, args, expected);
  });
  console.log(
    `\n  ${passing ? 'All tests PASS' : 'At least one test FAILS'}\n`,
  );
  console.log('----------------------\n');
  return passing;
}

module.exports = { testOnce, runTests };
