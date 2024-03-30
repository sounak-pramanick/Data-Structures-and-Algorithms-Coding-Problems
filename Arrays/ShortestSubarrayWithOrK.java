// Leetcode 3095

class Solution {
    public int minimumSubarrayLength(int[] nums, int k) {
        int n = nums.length;
        int len = Integer.MAX_VALUE;

        for(int i = 0; i < n; i++) {
            int orVal = 0;
            
            for(int j = i; j < n; j++) {
                orVal |= nums[i] | nums[j];

                if(orVal >= k) {
                    len = Math.min(len, j - i + 1);
                }
            }
        }

        
        return len == Integer.MAX_VALUE? -1 : len;
    }
}