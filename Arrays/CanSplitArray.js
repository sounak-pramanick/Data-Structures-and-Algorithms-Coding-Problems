// Leetcode 2811
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function(nums, m) {
    let n = nums.length;
    if(n <= 2) return true;

    for(let i = 0; i < n - 1; i++) {
        if(nums[i] + nums[i + 1] >= m) return true;
    }

    return false;
};