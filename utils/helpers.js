"use strict";
/**
 * Returns a hash of the counts of the items in nums.
 *
 * @param {number[]} nums - an array of numbers
 * @returns {ItemCounts}
 */
function getItemCounts(nums) {
    const res = {};
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
function firstSuch(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]))
            return arr[i];
    }
    return null;
}
module.exports = { firstSuch, getItemCounts };
