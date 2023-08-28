// Leetcode 2834
/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
    let nums = [];
    let i = 1;
    let set = new Set();

    while(nums.length < n) {
        if(!set.has(target - i)) {
            nums.push(i);
            set.add(i);
        }
        
        i++;
    }

    return nums.reduce((acc, curr) => acc + curr, 0);
};