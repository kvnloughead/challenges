/**
 * Swaps the first two arguments. Can be used in two ways.
 *
 *  - To swap array elements in place, pass indices and array
 *      swap(i: number, j: number, arr) => void
 *  - To swap any value
 *      swap(i: unknown, j: unknown) => [j, i]
 *
 * @param {unknown} i - either an array index or any value
 * @param {unknown} j - either an array index or any value
 * @param {unknown[]?} arr - optional array
 * @returns {[unknown, unknown] | void}
 */
export function swap(
  i: unknown,
  j: unknown,
  arr?: unknown[]
): [unknown, unknown] | void {
  if (Array.isArray(arr) && typeof i == "number" && typeof j == "number") {
    let [a, b] = [arr[i], arr[j]];
    arr[i] = b;
    arr[j] = a;
    return;
  }
  [i, j] = [j, i];
  return [i, j];
}

/**
 * Bubble sort sorting algorithm.
 *
 * @param {number[]} arr - an arrat to sort
 * @returns {number[]} - the sorted array
 */
export function bubbleSort(arr: number[]): number[] {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1, arr);
        swapped = true;
      }
    }
  }
  return arr;
}

export function insertionSort<T extends unknown>(
  arr: T[],
  compare: (a: T, b: T) => boolean = (a, b) => a < b
): T[] {
  for (let i = 1; i <= arr.length; i++) {
    const queued = arr[i];
    let pointer = i - 1;
    while (pointer >= 0 && compare(queued, arr[pointer])) {
      swap(pointer, pointer + 1, arr);
      pointer--;
    }
  }
  return arr;
}
