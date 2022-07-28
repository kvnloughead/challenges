/**
 * A working but subpar binary search function.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target, start = 0, end = null) {
//   end = end !== null ? end : nums.length - 1;
//   const mid = Math.floor((start + end) / 2);
//   if (start > end) return -1;
//   if (start === end && nums[mid] !== target) return -1;
//   if (nums[mid] === target) {
//     return mid;
//   } else if (nums[mid] < target) {
//     return search(nums, target, mid + 1, end);
//   } else {
//     return search(nums, target, 0, mid - 1);
//   }
// };

var search = function (nums, target) {
  const length = nums.length;
  const mid = Math.floor((nums.length - 1) / 2);
  if (length < 1) return -1;
  if (length === 1 && nums[0] !== target) return -1;
  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return search(nums.slice(mid + 1), target);
  } else {
    return search(nums.slice(0, mid - 1), target);
  }
};

search([5, 7], 7);

const testSearch = (nums, target, expected, full = false) => {
  const actual = search(nums, target);
  if (actual !== expected || full) {
    console.log(`Testing search([${nums}], ${target})`);
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    console.log(expected === actual ? "PASS" : "FAIL");
    console.log("=================");
  }
};

// Zero element array
testSearch([], 5, -1);

// Single element arrays
testSearch([5], 5, 0);
testSearch([5], 3, -1);
testSearch([5], 7, -1);

// Two element arrays
testSearch([5, 7], 5, 0);
testSearch([5, 7], 7, 1);
testSearch([5, 7], 3, -1);
testSearch([5, 7], 6, -1);
testSearch([5, 7], 8, -1);

// Three element arrays
testSearch([5, 7, 9], 5, 0);
testSearch([5, 7, 9], 7, 1);
testSearch([5, 7, 9], 9, 2);
testSearch([5, 7, 9], 3, -1);
testSearch([5, 7, 9], 6, -1);
testSearch([5, 7, 9], 8, -1);
testSearch([5, 7, 9], 10, -1);

// Even number of elements
testSearch([-1, 0, 3, 5, 9, 12], -1, 0);
testSearch([-1, 0, 3, 5, 9, 12], 0, 1);
testSearch([-1, 0, 3, 5, 9, 12], 3, 2);
testSearch([-1, 0, 3, 5, 9, 12], 5, 3);
testSearch([-1, 0, 3, 5, 9, 12], 9, 4);
testSearch([-1, 0, 3, 5, 9, 12], 12, 5);
testSearch([-1, 0, 3, 5, 9, 12], 4, -1);
testSearch([-1, 0, 3, 5, 9, 12], -2, -1);
testSearch([-1, 0, 3, 5, 9, 12], 13, -1);

// // Odd number of elements
testSearch([-1, 0, 3, 5, 9], -1, 0);
testSearch([-1, 0, 3, 5, 9], 0, 1);
testSearch([-1, 0, 3, 5, 9], 3, 2);
testSearch([-1, 0, 3, 5, 9], 5, 3);
testSearch([-1, 0, 3, 5, 9], 9, 4);
testSearch([-1, 0, 3, 5, 9], 4, -1);
testSearch([-1, 0, 3, 5, 9], -2, -1);
testSearch([-1, 0, 3, 5, 9], 10, -1);
