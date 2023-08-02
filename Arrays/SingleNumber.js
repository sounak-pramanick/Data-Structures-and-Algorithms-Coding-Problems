// Leetcode 136
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singleNum = 0;

    for(let i of nums) singleNum ^= i;


    return singleNum;
};