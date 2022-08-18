const { modulus } = require("../../utils/helpers");

const lastDigits = [
  [0],
  [1],
  [2, 4, 8, 6],
  [3, 9, 7, 1],
  [4, 6],
  [5],
  [6],
  [7, 9, 3, 1],
  [8, 4, 2, 6],
  [9, 1],
];

/**
 * Returns the last digit of Number(str1) ** Number(str2).
 *
 * @param {string} str1 - an integer string
 * @param {string} str2 - an integer string
 * @returns {number} the last digit of Number(str1) ** Number(str2).
 */
export function lastDigit(str1: String, str2: String): number {
  if (str2 === "0") return 1;
  const n = Number(str1[str1.length - 1]) % 10;
  const m = lastDigits[n].length;
  return lastDigits[n][(modulus(str2, m) + m - 1) % m];
}
