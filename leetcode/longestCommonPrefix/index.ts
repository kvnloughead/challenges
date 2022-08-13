/**
 * Returns common prefix of the two strings.
 *
 * @param {string} s - first string
 * @param {string} t - second string
 * @returns {string}
 */
export function commonPrefix(s: string, t: string): string {
  const minLen = Math.min(s.length, t.length);
  for (let i = 0; i <= minLen; i++) {
    if (s[i] !== t[i]) return s.slice(0, i);
  }
  return s.slice(0, minLen);
}

export function longestCommonPrefix(strs: string[]): string {
  const sorted = strs.sort();
  return commonPrefix(sorted[0], sorted[sorted.length - 1]);
}
