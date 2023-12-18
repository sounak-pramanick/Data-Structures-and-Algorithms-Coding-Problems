// Leetcode 485
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let countOnes = 0, maxCountOnes = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            maxCountOnes = Math.max(maxCountOnes, countOnes);
            countOnes = 0;
        }
        else {
            countOnes++;
        }
    }

    maxCountOnes = Math.max(maxCountOnes, countOnes);

    return maxCountOnes;
};