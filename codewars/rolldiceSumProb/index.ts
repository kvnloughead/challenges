export function rolldiceSumProb(sum: number, dice: number): number {
  function rolldiceGetCount(sum: number, dice: number): number {
    let count = 0;

    if (dice === 1) return sum > 0 && sum <= 6 ? 1 : 0;
    for (let i = 1; i <= 6; i++) {
      if (sum - i <= 6 * (dice - 1)) {
        count += rolldiceGetCount(sum - i, dice - 1);
      }
    }
    return count;
  }

  return rolldiceGetCount(sum, dice) / 6 ** dice;
}
