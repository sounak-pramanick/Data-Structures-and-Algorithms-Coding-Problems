// Leetcode 989
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let n = num.length;

    for(let i = n - 1; i >= 0; i--) {
        k += num[i];
        num[i] = k % 10;
        k = Math.floor(k / 10);
    }

    while(k > 0) {
        num.unshift(k % 10);
        k = Math.floor(k / 10);
    }

    return num;
};