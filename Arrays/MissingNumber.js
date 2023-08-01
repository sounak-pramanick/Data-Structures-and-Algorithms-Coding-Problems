// Leetcode 268
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // Sum solution
    /*
    let n = nums.length;
    let sum = n * (n + 1) / 2;
    let sumOfNums = 0;

    for(let i of nums) sumOfNums += i;

    return sum - sumOfNums;
    */


    // XOR solution
    let n = nums.length;
    let xor = n;

    for(let i = 0; i < n; i++) {
        xor ^= nums[i] ^ i;
    }

    return xor;
};