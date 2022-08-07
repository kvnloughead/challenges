const { findOdd } = require('./index');
const { getItemCounts } = require('../../utils/helpers');

test('basic firstSuch tests', () => {
  expect(findOdd([1, 2, 3, 1])).toBe(2);
  expect(findOdd([1, 2, 3])).toBe(1);
  expect(findOdd([1, 2, 3, 2, 1])).toBe(3);
});
