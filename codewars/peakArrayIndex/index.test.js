const { peak } = require('./index.js');

test('Basic tests', () => {
  expect(peak([1, 2, 3, 5, 3, 2, 1])).toBe(3);
  expect(peak([1, 12, 3, 3, 6, 3, 1])).toBe(2);
  expect(peak([10, 20, 30, 40])).toBe(-1);
});

// console.log(peak([1, 2, 3, 5, 3, 2, 1]));
