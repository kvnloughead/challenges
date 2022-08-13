const { commonPrefix, longestCommonPrefix } = require('./index');

test('commonPrefix', () => {
  expect(commonPrefix('foo', 'foobar')).toBe('foo');
  expect(commonPrefix('foobar', 'foo')).toBe('foo');
  expect(commonPrefix('foobar', 'foobar')).toBe('foobar');
  expect(commonPrefix('foo', 'bar')).toBe('');
});

test('longest', () => {});
