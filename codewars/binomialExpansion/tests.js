const { tokenize, expand, getPascalsTriangle } = require("./script.js");

const exprWithSameExponent = [
  "(2x + 3)^2",
  "(-2x + 3)^2",
  "(2x - 3)^2",
  "(-2q - 3)^2",
  "(-x - 3)^2",
  "(y - 3)^2",
  "(-3)^2",
  "(3)^2",
  "(x)^2",
];

const expressions = [
  "(2x + 3)^0",
  "(2x + 3)^1",
  "(2x + 3)^2", // 4x^2 + 12x + 9
  "(2x + 3)^3",
  "(2x + 3)^4",
  "(-x + 3)^5",
  "(2x + 3)^6",
  "(2x + 3)^7",
];

// 8x^3 -36x^2 + 54x - 27
const negativeConstantTerm = ["(2x - 3)^3"];

const exponents = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function testTokenize() {
  exprWithSameExponent.forEach((expr) => {
    console.log(tokenize(expr));
  });
}

function testGetPascalsTriangle() {
  exponents.forEach((exponent) => {
    console.log(getPascalsTriangle(exponent));
  });
}

function testExpand(expressions) {
  expressions.forEach((expr) => {
    console.log(expand(expr));
  });
}

// testTokenize();
// testGetPascalsTriangle();
testExpand(expressions);
testExpand(exprWithSameExponent);
// testExpand(negativeConstantTerm);
// testExpand(["(9t)^2"]);
