// Leetcode 1752
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let n = nums.length;
    let countMax = 0;

    for(let i = 0; i < n; i++) {
        if(nums[i] > nums[(i + 1) % n]) {
            countMax++;
        }

        if(countMax > 1) return false;
    }

    return true;
};