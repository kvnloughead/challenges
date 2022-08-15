const { insertionSort, swap, bubbleSort } = require("./index");

test("swap numbers", () => {
  let [a, b] = [1, 2];
  [a, b] = swap(a, b);
  expect([a, b]).toStrictEqual([2, 1]);
});

test("swap strings", () => {
  let [a, b] = ["foo", "bar"];
  [a, b] = swap(a, b);
  expect([a, b]).toStrictEqual(["bar", "foo"]);
});

test("swap other", () => {
  let [a, b] = [true, ["foobar"]];
  [a, b] = swap(a, b);
  expect([a, b]).toStrictEqual([["foobar"], true]);
});

test("swap array items", () => {
  const arr = [1, 2, 3, 4];
  swap(0, 3, arr);
  expect(arr).toStrictEqual([4, 2, 3, 1]);
});

test("bubbleSort", () => {
  const arr = [1, 2, 3, 4];
  bubbleSort(arr);
  expect(arr).toStrictEqual([1, 2, 3, 4]);
});

test("insertionSort", () => {
  const arr = [1, 2, 3, 4];
  insertionSort(arr);
  expect(arr).toStrictEqual([1, 2, 3, 4]);
});

test("insertionSort", () => {
  const arr = [4, 2, 1, 3];
  insertionSort(arr);
  expect(arr).toStrictEqual([1, 2, 3, 4]);
});

test("insertionSort", () => {
  const arr = [4, 3, 1, 2, 5, 9];
  insertionSort(arr);
  expect(arr).toStrictEqual(arr.sort());
});
