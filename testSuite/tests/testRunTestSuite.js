/**
 * Better than nothing testing for runTestSuite.
 */

const { exec } = require("child_process");

const process =
  "node ../../codewars/balancedParens/tests/testBalancedParens.js";

exec(process, (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout:\n${stdout}`);
});
