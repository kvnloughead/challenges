const { balancedParens } = require("../index.js");
const { runTestSuite } = require("../../../testSuite/index.js");

const testData = [
  {
    desc: "balancedParens with n === 0",
    args: [0],
    expected: [""],
  },
  {
    desc: "balancedParens with n === 1",
    args: [1],
    expected: ["()"],
  },
  {
    desc: "balancedParens with n === 2",
    args: [2],
    expected: ["(())", "()()"],
  },
  {
    desc: "balancedParens with n === 3",
    args: [3],
    expected: ["((()))", "(()())", "(())()", "()(())", "()()()"],
  },
  {
    desc: "balancedParens with n === 4",
    args: [4],
    expected: [
      "(((())))",
      "((()()))",
      "((())())",
      "((()))()",
      "(()(()))",
      "(()()())",
      "(()())()",
      "(())(())",
      "(())()()",
      "()((()))",
      "()(()())",
      "()(())()",
      "()()(())",
      "()()()()",
    ],
  },
];

runTestSuite(balancedParens, testData);
