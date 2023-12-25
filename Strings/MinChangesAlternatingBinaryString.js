// Leetcode 1758
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let n = s.length;
    let start0 = 0, start1 = 0;

    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            if(s.charAt(i) === '0') start1++;
            else start0++;
        }
        else {
            if(s.charAt(i) === '0') start0++;
            else start1++;
        }
    }

    return Math.min(start0, start1);
};