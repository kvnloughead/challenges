const { lastDigit } = require("./index");

test("n2 is 0", () => {
  expect(lastDigit("120", "0")).toBe(1);
});

test("n1 is 0 or 1", () => {
  expect(lastDigit("120", "3")).toBe(0);
  expect(lastDigit("30", "1")).toBe(0);
  expect(lastDigit("121", "3")).toBe(1);
  expect(lastDigit("31", "1")).toBe(1);
});

test("n1 is 2", () => {
  expect(lastDigit("12", "1")).toBe(2);
  expect(lastDigit("22", "2")).toBe(4);
  expect(lastDigit("122", "3")).toBe(8);
  expect(lastDigit("122", "4")).toBe(6);
  expect(lastDigit("122", "5")).toBe(2);
  expect(lastDigit("122", "6")).toBe(4);
  expect(lastDigit("122", "7")).toBe(8);
  expect(lastDigit("122", "8")).toBe(6);
});
