// Leetcode 2844
/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
    let n = num.length;
    let zeroFound = false, fiveFound = false;

    for(let i = n - 1; i >= 0; i--) {
        if(zeroFound && num[i] === '0') return n - 2 - i;
        if(zeroFound && num[i] === '5') return n - 2 - i;
        if(fiveFound && num[i] === '2') return n - 2 - i;
        if(fiveFound && num[i] === '7') return n - 2 - i;

        if(num[i] === '0') zeroFound = true;
        if(num[i] === '5') fiveFound = true;
    }

    if(zeroFound) return n - 1;
    return n;
};