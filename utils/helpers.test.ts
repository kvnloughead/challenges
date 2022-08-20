const {
  getItemCounts,
  isValid,
  modulus,
  containsDuplicate,
  setsAreEqual,
  isAnagram,
} = require("./helpers");

test("isAnagram", () => {
  expect(isAnagram("foobar", "barfoo")).toBe(true);
  expect(isAnagram("foobar", "barfoof")).toBe(false);
  expect(isAnagram("abc", "abcb")).toBe(false);
  expect(isAnagram("rat", "car")).toBe(false);
});

test("getItemCounts", () => {
  expect(getItemCounts([1, 2, 3, 1])).toStrictEqual({ 1: 2, 2: 1, 3: 1 });
  expect(getItemCounts(["ab", 2, "a", 2])).toStrictEqual({ 2: 2, a: 1, ab: 1 });
});

test("isValid parentheses", () => {
  expect(isValid("[({}){]")).toBe(false);
  expect(isValid("[({})]")).toBe(true);
  expect(isValid("[]{}()")).toBe(true);
  expect(isValid("[")).toBe(false);
});

test("modulus with small values", () => {
  expect(modulus("123", 7)).toBe(4);
  expect(modulus("1457", 13)).toBe(1);
  expect(modulus("9191", 4)).toBe(3);
});

test("contains duplicate", () => {
  expect(containsDuplicate([1, 2, 3])).toBe(false);
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  expect(containsDuplicate([2, 2, 2])).toBe(true);
  expect(containsDuplicate([1])).toBe(false);
  expect(containsDuplicate([0, 4, 5, 0, 3, 6])).toBe(true);
});

test("setsAreEqual", () => {
  expect(setsAreEqual(new Set([1, 2, 3]), new Set([3, 2, 1, 3]))).toBe(true);
  expect(setsAreEqual(new Set(["a", 1]), new Set(["a", 1, "c"]))).toBe(false);
});
