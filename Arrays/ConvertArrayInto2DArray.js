// Leetcode 2610
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let n = nums.length;
    const map = new Map();
    const matrix = [];
    let maxRows = 0;

    for(let i = 0; i < n; i++) {
        if(!map.has(nums[i])) map.set(nums[i], 1);
        else map.set(nums[i], map.get(nums[i]) + 1);
    }

    for(let i of map.values()) {
        maxRows = Math.max(maxRows, i);
    }

    for(let i = 0; i < maxRows; i++) matrix.push([]);

    for(let [key, value] of map) {
        let val = value, i = 0;
        while(val) {
            matrix[i++].push(key);
            val--;
        }
    }

    return matrix;
};