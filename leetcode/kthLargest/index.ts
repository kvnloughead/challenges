/**
 * Finds kth largest number in array in O(n) time.
 *
 * @param nums
 * @param k
 * @returns
 */
export function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => a - b)[nums.length - k];
}
