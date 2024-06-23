// Leetcode 3194

class Solution {
    public double minimumAverage(int[] nums) {
        Arrays.sort(nums);

        int i = 0, j = nums.length - 1;
        double avg = Double.MAX_VALUE;

        while(i < j) {
            avg = Math.min(avg, (nums[i] + nums[j]) / 2.0);
            i++;
            j--;
        }

        return avg;
    }
}