const { PaginationHelper } = require('../index.js');

const pager1 = new PaginationHelper(['a', 'b', 'c', 'd,', 'e'], 2);
const pager2 = new PaginationHelper(['a', 'b', 'c', 'd,', 'e'], 3);

test('itemCount', () => {
  expect(pager1.itemCount()).toBe(5);
  expect(pager2.itemCount()).toBe(5);
});

test('pageCount', () => {
  expect(pager1.pageCount()).toBe(3);
  expect(pager2.pageCount()).toBe(2);
});

test('pageItemCount returns -1 if index too high', () => {
  expect(pager1.pageItemCount(3)).toBe(-1);
  expect(pager2.pageItemCount(2)).toBe(-1);
});

test('pageItemCount', () => {
  expect(pager1.pageItemCount(2)).toBe(1);
  expect(pager1.pageItemCount(1)).toBe(2);
  expect(pager1.pageItemCount(0)).toBe(2);
  expect(pager2.pageItemCount(0)).toBe(3);
  expect(pager2.pageItemCount(1)).toBe(2);
});

test('pageIndex', () => {
  expect(pager1.pageIndex(-1)).toBe(-1);
  expect(pager1.pageIndex(0)).toBe(0);
  expect(pager1.pageIndex(1)).toBe(0);
  expect(pager1.pageIndex(2)).toBe(1);
  expect(pager1.pageIndex(3)).toBe(1);
  expect(pager1.pageIndex(4)).toBe(2);
  expect(pager1.pageIndex(5)).toBe(-1);

  expect(pager2.pageIndex(0)).toBe(0);
  expect(pager2.pageIndex(1)).toBe(0);
  expect(pager2.pageIndex(2)).toBe(0);
  expect(pager2.pageIndex(3)).toBe(1);
  expect(pager2.pageIndex(4)).toBe(1);
  expect(pager2.pageIndex(5)).toBe(-1);
});
