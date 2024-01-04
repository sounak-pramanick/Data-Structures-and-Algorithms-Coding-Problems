// Leetcode 1422
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let n = s.length;
    const prefix0 = [], suffix1 = [];
    let count = 0, maxScoreCount = 0;

    for(let i = 0; i < n; i++) {
        if(s.charAt(i) === '0') count++;
        prefix0[i] = count;
    }

    count = 0;

    for(let i = n - 1; i >=0 ;i--) {
        if(s.charAt(i) === '1') count++;
        suffix1[i] = count;
    }

    for(let i = 0; i < n - 1; i++) {
        maxScoreCount = Math.max(maxScoreCount, prefix0[i] + suffix1[i + 1]);
    }

    return maxScoreCount;
};