// Leetcode 189
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;

    if(k > n) k = k % n;

    rotateByK(nums, 0, n - 1);
    rotateByK(nums, 0, k - 1);
    rotateByK(nums, k, n - 1);
};



let rotateByK = (nums, low, high) => {
    while(low < high) {
        let temp = nums[low];
        nums[low] = nums[high];
        nums[high] = temp;
        low++;
        high--;
    }
}