const { testSortingFunction } = require("../../../utils/testHelpers");

const numberTests = [
  [],
  [1],
  [2, 3],
  [1, 2, 3, 4],
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [4, 3, 1, 2, 5, 9],
  [-3, 0, 1, 12, -7, 0, 1],
];

const stringTests = [
  [],
  [""],
  ["", "a"],
  ["a", "b", "c"],
  ["a", "d", "c", "e", "c"],
  ["ab", "de", "ba", "z", ""],
];
