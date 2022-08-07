const { firstSuch, getItemCounts } = require('./helpers');

test('basic getItemCounts Tests', () => {
  expect(getItemCounts([1, 3, 2])).toStrictEqual({ 1: 1, 3: 1, 2: 1 });
  expect(getItemCounts([1, 3, 2, 3, 1])).toStrictEqual({ 1: 2, 3: 2, 2: 1 });
  expect(getItemCounts([])).toStrictEqual({});
});

test('basic firstSuch tests', () => {
  expect(firstSuch([1, 2, 1], (item) => item % 2 === 0)).toBe(2);
  expect(firstSuch([1, 2, 1], (item) => item < 0)).toBe(null);
  expect(firstSuch([1, 2, 3], (item) => item > 2)).toBe(3);
});
