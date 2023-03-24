// Leetcode 2348
class Solution {
    public long zeroFilledSubarray(int[] nums) {
        int n = nums.length;

        int i = 0, j = 0;
        long count = 0, ans = 0;

        while(j < n) {
            if(nums[j] == 0) {
                // j++;
            }
            else {
                count = j - i;
                if(count != 0) {
                    ans += count * (count + 1) / 2;
                    count = 0;
                    i = j;
                }

                i++;
                // j++;
            }
            
            j++;
        }

        count = j - i;    
        if(count != 0) {
            ans += count * (count + 1) / 2;
        }

        return ans;
    }
}