const { nbYear } = require('./index');

test('basic tests', () => {
  expect(nbYear(1500, 5, 100, 1674)).toBe(1);
  expect(nbYear(1500, 5, 100, 1675)).toBe(1);
  expect(nbYear(1500, 5, 100, 1676)).toBe(2);
  expect(nbYear(1500, 5, 100, 5000)).toBe(15);
  expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
  expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
  expect(nbYear(1500000, 0.25, -1000, 2000000)).toBe(151);
});
