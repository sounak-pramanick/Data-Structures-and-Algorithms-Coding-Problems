// Leetcode 2587
class Solution {
    public int maxScore(int[] nums) {
        int n = nums.length;
        long prefix[] = new long[n];
        int score = 0;

        Arrays.sort(nums);
        reverse(nums);      // As there is no method to sort array in descending order

        prefix[0] = nums[0];
        if(prefix[0] > 0) score++;

        for(int i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] + nums[i];
            if(prefix[i] > 0) score++;
        }

        return score;
    }


    private void reverse(int nums[]) {
        int i = 0, j = nums.length - 1;

        while(i < j) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;

            i++;
            j--;
        }
    }
}