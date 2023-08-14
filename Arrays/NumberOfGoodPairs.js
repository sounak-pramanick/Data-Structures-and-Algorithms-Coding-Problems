// Leetcode 1512
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let n = nums.length;
    const map = new Map();
    let pairs = 0;

    for(let i = 0; i < n; i++) {
        if(!map.has(nums[i])) map.set(nums[i], 1);
        else {
            pairs += map.get(nums[i]);
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }

    return pairs;
};