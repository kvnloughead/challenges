/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums: number[], target: number): number[] | -1 {
  const ledger: { [key: string]: number } = {};
  for (let i = 0; i <= nums.length; i++) {
    if (ledger.hasOwnProperty(nums[i])) {
      return [i, ledger[nums[i]]];
    }
    ledger[target - nums[i]] = i;
  }
  return -1;
};
