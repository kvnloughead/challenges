const { rolldiceSumProb } = require("./index");

test("basic tests", () => {
  expect(rolldiceSumProb(11, 2)).toBeCloseTo(0.055555555555);
  expect(rolldiceSumProb(8, 2)).toBeCloseTo(0.13888888889);
  expect(rolldiceSumProb(8, 3)).toBeCloseTo(0.0972222222222);
});
