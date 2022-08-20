const { findKthLargest } = require("./index");

test("findKthLargest", () => {
  expect(findKthLargest([1, 2, 5, 4, 7], 2)).toBe(5);
  expect(findKthLargest([1, 2, 5, 4, 7], 1)).toBe(7);
  expect(findKthLargest([1, 2, 5, 4, 7], 3)).toBe(4);
  expect(findKthLargest([1, 2, 5, 4, 7], 4)).toBe(2);
  expect(findKthLargest([1, 2, 5, 4, 7], 5)).toBe(1);
});
