import { mergeSort } from ".";

const { testSortingFunction } = require("../../../utils/testHelpers");

const numberTests = [
  { arr: [] },
  { arr: [1] },
  { arr: [2, 3] },
  { arr: [1, 2, 3, 4] },
  { arr: [3, 4, 1, 2] },
  { arr: [4, 3, 2, 1] },
  { arr: [4, 3, 1, 2, 5, 9] },
  { arr: [-3, 0, 1, 12, -7, 0, 1] },
];

const stringTests = [
  [],
  [""],
  ["", "a"],
  ["a", "b", "c"],
  ["a", "d", "c", "e", "c"],
  ["ab", "de", "ba", "z", ""],
];

testSortingFunction(mergeSort, numberTests);
