// Leetcode 283
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Approach by me
    /*
    let n = nums.length;
    let i = 0, j = 0;

    while(j < n) {
        if(nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }

    while(i < n) {
        nums[i] = 0;
        i++;
    }
    */


    // Striver's approach
    let n = nums.length;
    let i = 0, j = 0;

    while(i < n) {
        if(nums[i] === 0) break;
        i++;
    }

    j = i + 1;

    while(j < n) {
        if(nums[j] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j++;
        }
        else j++;
    }
    
};