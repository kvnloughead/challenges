const { isValid, getSubSquares, validSolution } = require("./script.js");

const boardPassing = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const oneRowFailing = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 1, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const rowsWithDuplicates = [
  [5, 5, 4, 6, 7, 8, 9, 1, 2],
  [5, 3, 4, 6, 7, 5, 9, 1, 2],
  [5, 3, 4, 6, 5, 8, 9, 1, 2],
  [5, 3, 4, 6, 7, 8, 9, 5, 2],
  [5, 3, 4, 6, 7, 8, 9, 1, 5],
  [5, 3, 4, 6, 7, 8, 9, 2, 2],
  [5, 3, 4, 6, 2, 8, 9, 1, 2],
  [2, 3, 2, 6, 2, 8, 9, 1, 2],
  [5, 3, 4, 6, 7, 7, 9, 1, 2],
];

const rowsWithZero = [
  [3, 4, 5, 2, 0, 6, 1, 7, 9],
  [3, 4, 5, 2, 8, 6, 1, 7, 0],
  [0, 4, 5, 2, 8, 6, 1, 7, 9],
];

const boardFailing = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
];

const subsquares = [
  [1, 1, 1, 4, 4, 4, 7, 7, 7],
  [1, 1, 1, 4, 4, 4, 7, 7, 7],
  [1, 1, 1, 4, 4, 4, 7, 7, 7],
  [2, 2, 2, 5, 5, 5, 8, 8, 8],
  [2, 2, 2, 5, 5, 5, 8, 8, 8],
  [2, 2, 2, 5, 5, 5, 8, 8, 8],
  [3, 3, 3, 6, 6, 6, 9, 9, 9],
  [3, 3, 3, 6, 6, 6, 9, 9, 9],
  [3, 3, 3, 6, 6, 6, 9, 9, 9],
];

function testIsValid(rows, expected) {
  console.log(`Test suite should be ${expected}\n`);
  let passing = true;
  rows.forEach((row, i) => {
    const actual = isValid(row);
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
  });
  console.log(`\n  ${passing ? "PASS" : "FAIL"}\n`);
  console.log("----------------------\n");
  return passing;
}

function testGetSubSquares(board, expected) {
  const actual = getSubSquares(board);
  console.log(actual);
}

function testValidSolution(board, expected) {
  const actual = validSolution(board);
  if (actual === expected) {
    console.log(`  Expected ${expected}, Actual: ${actual}`);
  } else {
    console.log("  ----");
    console.log(`  Test failed`);
    console.log(`    Expected: ${expected}`);
    console.log(`    Actual: ${actual}`);
    console.log("  ----");
    passing = false;
  }
}

function runTestIsValidSuite() {
  let passing = true;
  passing = testIsValid(boardPassing, true);
  passing = testIsValid(rowsWithZero, false);
  passing = testIsValid(rowsWithDuplicates, false);
  console.log(
    `\n  ${passing ? "All tests PASS" : "At least one test FAILS"}\n`
  );
}

runTestIsValidSuite();
// testGetSubSquares(subsquares);
// testValidSolution(boardPassing, true);
// testValidSolution(boardFailing, false);
// testValidSolution(rowsWithDuplicates, false);
// testValidSolution(oneRowFailing, false);
