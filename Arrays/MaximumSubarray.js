// Leetcode 53
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length;
    let sum = 0, max = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < n; i++) {
        sum += nums[i];

        max = Math.max(max, sum);

        if(sum < 0) sum = 0;
    }

    return max;
};