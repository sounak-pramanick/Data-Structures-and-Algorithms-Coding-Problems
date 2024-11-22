// Leetcode 3349

class Solution {
    public boolean hasIncreasingSubarrays(List<Integer> nums, int k) {
        int n = nums.size();
        if(2 * k > n) return false;
        int flag = 0;

        for(int i = 0; i <= n - 2 * k; i++) {
            flag = 0;
            for(int j = i ; j < i + k - 1; j++) {
                if(nums.get(j) >= nums.get(j + 1)) flag = 1;
            }

            if(flag == 1) continue;
            for(int x = i + k; x < i + 2 * k - 1; x++) {
                if(nums.get(x) >= nums.get(x + 1)) flag = 1;
            }

            if(flag == 0) return true; 
        }

        return false;
    }
}