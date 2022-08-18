const { isValid, modulus } = require("./helpers");

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
