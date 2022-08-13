const { isValid } = require('./helpers');

test('isValid parentheses', () => {
  expect(isValid('[({}){]')).toBe(false);
  expect(isValid('[({})]')).toBe(true);
  expect(isValid('[]{}()')).toBe(true);
  expect(isValid('[')).toBe(false);
});
