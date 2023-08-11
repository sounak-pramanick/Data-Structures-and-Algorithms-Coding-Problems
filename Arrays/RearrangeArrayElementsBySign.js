// Leetcode 2149
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let n = nums.length;
    let posInd = 0, negInd = 0;
    let res = [];

    for(let i = 0; i < n; i++) {
        if(nums[i] > 0) {
            res[2 * posInd] = nums[i];
            posInd++;
        }
        else {
            res[2 * negInd + 1] = nums[i];
            negInd++;
        }
    }

    for(let i = 0; i < n; i++) {
        nums[i] = res[i];
    }

    return nums;
};