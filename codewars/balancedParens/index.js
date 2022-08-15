/**
 * Recursively generates all possible sets of n matching parens.
 *
 * @param {number} n - an nonnegative integer
 * @param {number} left - the number of opening parens in the string
 * @param {number} right - the number of closing parens in the string
 * @param {string} s - the string of parens
 * @param {string[]} res - accumulated array of finished strings
 */
function generateParens(n, left, right, s, res) {
  if (left == n && right == n) {
    res.push(s);
    return;
  }
  if (left < n) {
    generateParens(n, left + 1, right, s + "(", res);
  }
  if (right < left) {
    generateParens(n, left, right + 1, s + ")", res);
  }
}

/**
 * Returns an array of all the ways to match n sets of parentheses.
 * Uses recursive generateParens algorithm.
 *
 * @param {number} n - an nonnegative integer
 * @returns {string[]} an array of all the ways to match n sets of parentheses.
 */
function balancedParens(n) {
  const res = [];
  generateParens(n, 0, 0, "", res);
  return res;
}

module.exports = { balancedParens };
