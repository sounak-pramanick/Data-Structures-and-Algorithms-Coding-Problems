// Leetcode 2870
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let n = nums.length;

    if(!nums || n <= 1) return -1;

    const freqMap = new Map();
    let totalMinOperations = 0;

    for(let i = 0; i < n; i++) {
        if(!freqMap.has(nums[i])) freqMap.set(nums[i], 1);
        else freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
    }

    for(let [key, value] of freqMap) {
        if(value === 1) return -1;
        if(value % 3 === 0) {
            totalMinOperations += (value / 3);
        }
        else if(value % 3 === 1) {
            totalMinOperations += (2 + (value - 4) / 3)
        }
        else if(value % 3 === 2) {
            totalMinOperations += (1 + (value - 2) / 3)
        }
        else if(value % 2 === 0) {
            totalMinOperations += (value / 2);
        }
    }

    return totalMinOperations;
};