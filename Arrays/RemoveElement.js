// Leetcode 27
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let n = nums.length;
    let i = 0, j = 0;

    while(i < n && nums[i] !== val) i++;
    
    j = i + 1;

    while(j < n && nums[j] === val) j++;

    while(j < n) {
        if(nums[j] !== val) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
        j++;
    }

    return i;
};