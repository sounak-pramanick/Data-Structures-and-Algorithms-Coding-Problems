// Leetcode 26
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length;
    let i = 0;

    for(let j = 0; j < n; j++) {
        if(nums[i] !== nums[j]) {
            nums[i + 1] = nums[j];
            i++;
        }
    }

    return i + 1;
};