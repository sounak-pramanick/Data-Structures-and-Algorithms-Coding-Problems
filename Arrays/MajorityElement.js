// Leetcode 169
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    let ele, count = 0;

    for(let i = 0; i < n; i++) {
        if(count === 0) {
            ele = nums[i];
            count++;
        }
        else if(nums[i] === ele) {
            count++;
        }
        else if(nums[i] !== ele) {
            count--;
        }
    }

    // This should be done only if its not written in the question that the majority element always exists, see Striver's video for more details
    /*
    count = 0;
    for(let i = 0; i < n; i++) {
        if(nums[i] === ele) count++;
        if(count > n / 2) return ele;
    }
    */

    return ele;
};