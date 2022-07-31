/**
 * Inserts s1 into s2 starting at the given index.
 *
 * @param {string} s1
 * @param {string} s2
 * @param {number} idx - an integer index
 * @returns
 */
function insert(s1, s2, idx) {
  return s2.slice(0, idx) + s1 + s2.slice(idx);
}

/**
 * Returns an array of element-wise counts of open parentheses.
 *
 * @param {string} s - a string containing parentheses
 * @returns {numbers[]} an array of non-negative integer counts of open parens.
 */
function countOpenParens(s) {
  let count = 0;
  const openParens = [];
  for (let i = 0; i < s.length; i++) {
    count += s[i] === '(' ? 1 : -1;
    openParens.push(count);
  }
  return openParens;
}
