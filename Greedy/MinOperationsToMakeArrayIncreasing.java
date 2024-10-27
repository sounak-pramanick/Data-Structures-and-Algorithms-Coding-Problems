// Leetcode 1827

class Solution {
    public int minOperations(int[] nums) {
        int res = 0;
        if(nums.length <= 1) return res;
        int prev = 0;

        for(int curr : nums) {
            if(curr <= prev) {
                res += prev - curr + 1;
                prev = prev + 1;
            }
            else prev = curr;
        }

        return res;
    }
}