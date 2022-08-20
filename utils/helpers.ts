interface ItemCounts {
  [k: string | number]: number;
}

// /**
//  * Returns a hash of the counts of the items in nums.
//  *
//  * @param {number[]} nums - an array of numbers
//  * @returns {ItemCounts}
//  */
// export function getItemCounts(nums: number[]): ItemCounts {
//   const res: ItemCounts = {};
//   nums.forEach((n) => {
//     typeof res[n] !== "undefined" ? res[n]++ : (res[n] = 1);
//   });
//   return res;
// }

/**
 * Returns a hash of the counts of the elements in an array.
 *
 * @param {(string | number)[]} arr - an array of primitives
 * @returns {ItemCounts}
 */
export function getItemCounts(arr: (string | number)[]): ItemCounts {
  const res: ItemCounts = {};
  arr.forEach((a) => {
    typeof res[a] !== "undefined" ? res[a]++ : (res[a] = 1);
  });
  return res;
}

/**
 * Returns the first matching element.
 * @param {any[]} arr - an array
 * @param {(value: any) => Boolean} callback - conditional function called on
 *  all array elements.
 * @returns the first matching element, or null if none match
 */
export function firstSuch(arr: any[], callback: (value: any) => Boolean): any {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return arr[i];
  }
  return null;
}

/**
 * Returns true if the string contains matching pairs of brackets.
 *
 * @param {string} s - a string consisting of brackets: (), {}, []
 * @return {boolean} - true if s contains only validly matching pairs
 */
export function isValid(s: string) {
  const closers: { [key: string]: string } = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (
      closers.hasOwnProperty(s[i]) &&
      stack[stack.length - 1] !== closers[s[i]]
    ) {
      return false;
    } else if (closers.hasOwnProperty(s[i])) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}

/**
 * Returns first numRows of Pascal's triangle
 *
 * @param {number} numRows
 * @returns {number[][]}
 */
export function generate(numRows: number): number[][] {
  const res = [];
  for (let i = 0; i <= numRows; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row.push(res[i - 1][j - 1] + res[i - 1][j]);
    }
    if (i > 0) row.push(1);
    res.push(row);
  }
  return res;
}

/**
 * Returns s1 % s2, where s1 is a string representing an arbitrarily
 * large integer number.
 *
 * Works because modulus is distributive over addition. So
 *        (a + b) % m = ((a % m) + (b % m)) % m
 * For instance,
 *        (100 + 20 + 3) % 7 = ((100 % 7) + (20 % 7) + (3 % 7)) % 7
 *                           = (2 + 6 + 3) % 7
 *                           = 4
 */
export function modulus(divident: string, divisor: number) {
  return Array.from(divident)
    .map((d) => parseInt(d) % divisor)
    .reduce((prev, curr) => (prev * 10 + curr) % divisor, 0);
}

/** Returns true if the sets are equal. */
export function setsAreEqual(s1: Set<unknown>, s2: Set<unknown>) {
  return s1.size == s2.size && [...s1].every((x) => s2.has(x));
}

export function containsDuplicate(nums: number[]): boolean {
  return nums.find((n, i) => i != nums.indexOf(n)) === undefined ? false : true;
}

/** Returns true if the strings are anagrams. */
export function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  const [_s, _t] = [[...s].sort(), [...t].sort()];
  return _s.every((x, i) => x === _t[i]);
}

/** Shifts all zeros to the end of the array of numbers. */
export function moveZeroes(nums: number[]): void {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) nums[count++] = nums[i];
  }
  while (count < nums.length) {
    nums[count++] = 0;
  }
}
