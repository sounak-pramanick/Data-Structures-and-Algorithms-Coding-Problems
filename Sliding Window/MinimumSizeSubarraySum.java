// Leetcode 209
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int n = nums.length;
        int i = 0, j = 0, sum = 0;
        int window = 0, minSubarray = Integer.MAX_VALUE;

        while(j < n) {
            sum += nums[j];

            if(sum < target) {
                // j++;
            }
            else {
                while(sum >= target) {
                    window = j - i + 1;
                    minSubarray = Math.min(minSubarray, window);
                    sum -= nums[i];
                    i++;
                }
                // j++;
            }
            
            j++;
        }

        return minSubarray == Integer.MAX_VALUE ? 0 : minSubarray;
    }
}