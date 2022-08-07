interface ItemCounts {
  [n: number]: number;
}

/**
 * Returns a hash of the counts of the items in nums.
 *
 * @param {number[]} nums - an array of numbers
 * @returns {ItemCounts}
 */
export function getItemCounts(nums: number[]): ItemCounts {
  const res: ItemCounts = {};
  nums.forEach((n) => {
    typeof res[n] !== 'undefined' ? res[n]++ : (res[n] = 1);
  });
  return res;
}

/**
 * Returns the first matching element.
 *
 * @param {any[]} arr - an array
 * @param {(value: any) => Boolean)} callback
 * @returns the first matching element, or null if none match
 */
export function firstSuch(arr: any[], callback: (value: any) => Boolean) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return arr[i];
  }
  return null;
}
