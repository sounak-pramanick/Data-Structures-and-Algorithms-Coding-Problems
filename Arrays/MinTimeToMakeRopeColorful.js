// Leetcode 1578
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let n = colors.length;
    if(n <= 1) return 0;

    let minTime = 0;

    for(let i = 0; i < n - 1; i++) {
        if(colors.charAt(i) === colors.charAt(i + 1)) {
            if(neededTime[i] <= neededTime[i + 1]) {
                minTime += neededTime[i];
            }
            else {
                minTime += neededTime[i + 1];
                neededTime[i + 1] = neededTime[i];
            }
        }
    }

    return minTime;
};