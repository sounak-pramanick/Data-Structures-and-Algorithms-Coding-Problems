// Leetcode 2150
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    let n = nums.length;
    const map = new Map();
    const res = [];

    for(let num of nums) {
        if(!map.has(num)) map.set(num, 1);
        else map.set(num, map.get(num) + 1);
    }

    for(let num of nums) {
        if(map.get(num) === 1 && !map.has(num - 1) && !map.has(num + 1)) {
            res.push(num);
        }
    }

    return res;
};