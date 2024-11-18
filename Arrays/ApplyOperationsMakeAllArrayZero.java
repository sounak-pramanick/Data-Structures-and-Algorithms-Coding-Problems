// Leetcode 2772

class Solution {
    public boolean checkArray(int[] nums, int k) {
        int curr = 0, n = nums.length;
        
        for(int i = 0; i < n; i++) {
            if (curr > nums[i]) return false;
            
            nums[i] -= curr;
            curr += nums[i];
            
            if(i >= k - 1) {
                curr -= nums[i - k + 1];
            }
        }
        
        return curr == 0;
    }
}