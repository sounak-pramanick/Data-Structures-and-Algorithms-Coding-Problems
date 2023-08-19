// Leetcode 2824
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let n = nums.length;
    let i = 0, j = n - 1;
    let count = 0;

    nums.sort((a, b) => a - b);

    while(i < j) {
        if(nums[i] + nums[j] >= target) j--;
        else {
            count += j - i;
            i++;
        }
    }

    return count;
};