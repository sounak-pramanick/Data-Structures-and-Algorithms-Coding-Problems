// Leetcode 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length;
    const map = new Map();

    for(let i = 0; i < n; i++) {
        if(map.has(target - nums[i])) return [i, map.get(target - nums[i])];
        map.set(nums[i], i);
    }

    return [];
};