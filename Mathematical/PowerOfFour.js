// Leetcode 342
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 0) return false;
    if(Math.floor(Math.log(n) / Math.log(4)) === Math.ceil(Math.log(n) / Math.log(4))) return true;
    return false;
};