// Leetcode 2706
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let leftoverMoney = 0;
    let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;
    let ind = -1;

    prices.map((price, i) => {
        if(price < min1) {
            min1 = price;
            ind = i;
        }
    });
    
    prices.map((price, i) => {
        if(price < min2 && i !== ind) {
            min2 = price;
        }
    });

    leftoverMoney = (min1 + min2 <= money) ? (money - (min1 + min2)) : money;

    return leftoverMoney;
};