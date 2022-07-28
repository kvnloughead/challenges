const { balancedParens } = require("./script.js");

function test(func, testName, data, expected) {
  console.log(testName);
  let passing = true;
  const actual = func(data);
  if (actual === expected) {
    console.log(`  Test ${i} - Expected ${expected}, Actual: ${actual}`);
  } else {
    console.log("  ----");
    console.log(`  Test ${i} failed`);
    console.log(`    Data: [${row}]`);
    console.log(`    Expected: ${expected}`);
    console.log(`    Actual: ${actual}`);
    console.log("  ----");
    passing = false;
  }
  console.log(`\n  ${passing ? "PASS" : "FAIL"}\n`);
  console.log("----------------------\n");
  return passing;
}
