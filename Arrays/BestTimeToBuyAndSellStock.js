// Leetcode 121
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let buy = prices[0], sell, profit = 0;

    for(let i = 1; i < n; i++) {
        sell = prices[i];
        profit = Math.max(profit, sell - buy);
        buy = Math.min(buy, prices[i]);
    }

    return profit;
};