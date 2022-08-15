type Test = {
  arr: unknown[];
  args?: unknown;
  expected?: unknown;
  description?: string;
};

/**
 * Runs test suite on each test in data. Minimally, the test
 * can consist of an arbitrary array to be sorted.
 *
 * @param {Function} func
 * @param {Test[]} data
 */
export function testSortingFunction(func: Function, data: Test[]) {
  data.forEach((t) => {
    test(t.description || func.name, () => {
      const sorted = t.arr.sort();
      expect(t.arr).toStrictEqual(sorted);
    });
  });
}
