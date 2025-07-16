/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let res = 0;
    for (j = 1; j < prices.length; j++) {
        if (prices[j] < prices[i]) {
            i = j;
        } else {
            res = Math.max(res, prices[j] - prices[i]);
        }
    }
    return res;
    
};