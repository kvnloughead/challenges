/**
 * Merges two sorted arrays into a single sorted array.
 *
 * @param {number[]} left
 * @param {number[]} right
 * @returns {number[]}
 */
export function merge(left: number[], right: number[]): number[] {
  const res = [];
  // Compare the arrays, pairwise, sorting them into the new array.
  // End loop once one of the arrays is empty.
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // We assert with a bang that left.shift() will definitely not be null.
      res.push(left.shift()!);
    } else {
      res.push(right.shift()!);
    }
  }
  // Tack any remaining elements onto res. Order doesn't matter, because one
  // of them will be empty.
  return res.concat(...left, ...right);
}

/**
 * Merge sort for numerical or string arrays.
 *
 * @param {number[]} arr
 */
export function mergeSort(arr: number[]): number[] {
  // Base case returns singleton or empty arrays.
  if (arr.length < 2) return arr;
  // Splice the array down the middle. Midpoint doesn't need to be an integer
  // because splice is permissive.
  const mid = arr.length / 2;
  const left = arr.splice(0, mid);
  // Now arr is the right half, thanks to splice.
  return merge(mergeSort(left), mergeSort(arr));
}
