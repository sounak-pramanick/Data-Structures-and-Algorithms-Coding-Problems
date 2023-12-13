// Leetcode 1464
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max1 = -1, max2 = -1, ind = -1, n = nums.length;

    for(let i = 0; i < n; i++) {
        if(nums[i] > max1) {
            max1 = nums[i];
            ind = i;
        }
    }

    for(let i = 0; i < n; i++) {
        if(nums[i] > max2 && i !== ind) {
            max2 = nums[i];
        }
    }

    return (max1 - 1) * (max2 - 1);
};