// Leetcode 560
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let n = nums.length;
    let i = 0, sum = 0, count = 0;
    let map = new Map();

    for(i = 0; i < n; i++) {
        sum += nums[i];
        if(sum === k) count++;

        if(map.has(sum - k)) {
            count += map.get(sum - k);
        }
        
        if(!map.has(sum)) map.set(sum, 1);
        else map.set(sum, map.get(sum) + 1);
    }

    return count;
};