// Leetcode 231
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n == 0) return false;
    return Math.ceil(Math.log10(n)/Math.log10(2)) == Math.floor(Math.log10(n)/Math.log10(2));
};