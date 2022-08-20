/**
 * Returns the trio of numbers with maximal product.
 *
 * @param nums - an array of numbers, positive or negative
 */
export function maximumProduct(nums: number[]): number {
  const [s, t] = [
    nums.sort((a, b) => a - b).slice(0, 2),
    nums.sort((a, b) => a - b).slice(-3),
  ];
  return Math.max(
    t[2] * s.reduce((a, b) => a * b, 1),
    t.reduce((a, b) => a * b, 1)
  );
}
