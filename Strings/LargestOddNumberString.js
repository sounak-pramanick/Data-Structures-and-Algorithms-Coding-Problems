// Leetcode 1903
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    if(!num) return "";

    let res = "";

    for(let i = num.length - 1; i >= 0; i--) {
        if(parseInt(num.charAt(i)) % 2 === 1) {
            res = num.substring(0, i + 1);
            break;
        }
    }

    return res;
};