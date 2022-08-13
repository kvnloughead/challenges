function maxProfit(prices: number[]): number {
  let low = prices[0];
  let profit = 0;
  prices.forEach((n) => {
    low = Math.min(low, n);
    profit = Math.max(profit, n - low);
  });
  return profit;
}
